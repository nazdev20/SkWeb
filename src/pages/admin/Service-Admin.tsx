import React, { useState, useEffect } from 'react';
import { db, storage } from '../../config/firebaseconfig';
import { collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot, DocumentData } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Service, FormField } from '../../data/data';
import { useModal } from '../../context/ModalContext';

const AdminServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState<Omit<Service, 'id'>>({
    title: '',
    description: '',
    imageUrl: '',
    formFields: []
  });
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [formFields, setFormFields] = useState<FormField[]>([{ label: '', type: 'text' }]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editServiceId, setEditServiceId] = useState<string | null>(null);
  const { showModal } = useModal();

  const servicesCollectionRef = collection(db, 'services');

  useEffect(() => {
    const unsubscribe = onSnapshot(servicesCollectionRef, (snapshot) => {
      setServices(snapshot.docs.map((doc: DocumentData) => ({ ...doc.data(), id: doc.id } as Service)));
    }, (error) => {
      console.error('Error fetching services:', error);
      showModal('Error', 'Failed to fetch services.');
    });

    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImage = async (image: File | null): Promise<string | undefined> => {
    if (!image) return;
    try {
      const imageRef = ref(storage, `services/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      showModal('Upload Error', 'Failed to upload the image.');
    }
  };

  const addOrUpdateService = async () => {
    try {
      // Validate that title is not empty
      if (!newService.title.trim()) {
        showModal('Validation Error', 'Service title is required.');
        return;
      }

      const imageUrl = imageUpload ? await uploadImage(imageUpload) : newService.imageUrl;

      // Check if image upload failed
      if (imageUpload && !imageUrl) {
        // The error modal is already shown in uploadImage, so we just stop the process here.
        return;
      }
      
      const serviceData: Omit<Service, 'id'> = { 
        title: newService.title,
        description: newService.description,
        imageUrl: imageUrl || '',
        formFields
      };

      if (editMode && editServiceId) {
        const serviceDoc = doc(db, 'services', editServiceId);
        await updateDoc(serviceDoc, serviceData);
        showModal('Success', 'Service updated successfully!');
        setEditMode(false);
        setEditServiceId(null);
      } else {
        await addDoc(servicesCollectionRef, serviceData);
        showModal('Success', 'Service added successfully!');
      }

      setNewService({ title: '', description: '', imageUrl: '', formFields: [] });
      setFormFields([{ label: '', type: 'text' }]);
      setImageUpload(null);

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      console.error('Error adding/updating service:', error);
      showModal('Error', `Failed to ${editMode ? 'update' : 'add'} the service.`);
    }
  };

  const deleteService = async (id: string) => {
    try {
      const serviceDoc = doc(db, 'services', id);
      await deleteDoc(serviceDoc);
      showModal('Success', 'Service deleted successfully!');
    } catch (error) {
      console.error('Error deleting service:', error);
      showModal('Error', 'Failed to delete the service.');
    }
  };

  const addFormField = () => {
    setFormFields([...formFields, { label: '', type: 'text' }]);
  };

  const updateFormField = (index: number, field: keyof FormField, value: string) => {
    const updatedFields = formFields.map((f, i) => (i === index ? { ...f, [field]: value } : f));
    setFormFields(updatedFields);
  };

  const removeFormField = (index: number) => {
    setFormFields(formFields.filter((_, i) => i !== index));
  };

  const editService = (service: Service) => {
    setNewService({
      title: service.title,
      description: service.description,
      imageUrl: service.imageUrl,
      formFields: service.formFields
    });
    setFormFields(service.formFields || []); // Ensure formFields is an array
    setEditMode(true);
    setEditServiceId(service.id);
  };

  return (
    <div className="p-6 max-w-screen mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Services Management</h1>

      {/* Service Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-[100%] mx-auto">
        <h2 className="text-2xl font-bold mb-4">{editMode ? 'Edit Service' : 'Add New Service'}</h2>
        <input
          type="text"
          placeholder="Service Title"
          value={newService.title}
          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Service Description"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="file"
          onChange={(e) => setImageUpload(e.target.files ? e.target.files[0] : null)}
          className="block w-full mb-4"
        />

        {/* Form Fields */}
        <div>
          <h3 className="text-lg font-bold mb-2">Custom Form Fields</h3>
          {formFields.map((field, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Field Label"
                value={field.label}
                onChange={(e) => updateFormField(index, 'label', e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded mr-2"
              />
              <select
                value={field.type}
                onChange={(e) => updateFormField(index, 'type', e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="textarea">Textarea</option>
              </select>
              <button
                onClick={() => removeFormField(index)}
                className="ml-2 bg-red-500 text-white p-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addFormField}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Field
          </button>
        </div>

        <button
          onClick={addOrUpdateService}
          className="mt-4 bg-green-500 text-white p-2 rounded"
        >
          {editMode ? 'Update Service' : 'Add Service'}
        </button>
      </div>

      {/* Services List */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-[100%] mx-auto">
        <h2 className="text-2xl font-bold mb-4">Existing Services</h2>
        {services.map((service) => (
          <div key={service.id} className="border-b border-gray-200 py-4">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p>{service.description}</p>
            {service.imageUrl && <img src={service.imageUrl} alt={service.title} className="w-32 h-32 object-cover my-2" />}
            <button
              onClick={() => editService(service)}
              className="mr-2 bg-yellow-500 text-white p-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteService(service.id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
