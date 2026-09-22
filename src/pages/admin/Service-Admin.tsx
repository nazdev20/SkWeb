import React, { useState, useEffect } from 'react';
import { db, storage } from '../../config/firebaseconfig';
import { collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Service, FormField } from '../../data/data';
import { useModal } from '../../context/ModalContext';
import { normalizeService } from '../../data/firestoreData';

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
      setServices(snapshot.docs.map(normalizeService));
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
      const imageRef = ref(storage, `services/${crypto.randomUUID()}-${image.name}`);
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
    <div className="mx-auto max-w-full overflow-x-hidden p-3 sm:p-6">
      <h1 className="mb-6 text-center text-2xl font-bold sm:text-3xl">Admin Services Management</h1>

      {/* Service Form */}
      <div className="mx-auto mb-8 max-w-full rounded-lg bg-white p-4 shadow-md sm:p-6">
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">{editMode ? 'Edit Service' : 'Add New Service'}</h2>
        <input
          type="text"
          placeholder="Service Title"
          value={newService.title}
          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
          className="mb-4 block w-full rounded border border-gray-300 p-2"
        />
        <textarea
          placeholder="Service Description"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          className="mb-4 block w-full rounded border border-gray-300 p-2"
        />
        <input
          type="file"
          onChange={(e) => setImageUpload(e.target.files ? e.target.files[0] : null)}
          className="mb-4 block w-full"
        />

        {/* Form Fields */}
        <div>
          <h3 className="mb-2 text-lg font-bold">Custom Form Fields</h3>
          {formFields.map((field, index) => (
            <div key={index} className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="text"
                placeholder="Field Label"
                value={field.label}
                onChange={(e) => updateFormField(index, 'label', e.target.value)}
                className="block w-full rounded border border-gray-300 p-2"
              />
              <select
                value={field.type}
                onChange={(e) => updateFormField(index, 'type', e.target.value)}
                className="rounded border border-gray-300 p-2"
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="textarea">Textarea</option>
              </select>
              <button
                onClick={() => removeFormField(index)}
                className="rounded bg-red-500 p-2 text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addFormField}
            className="rounded bg-blue-500 p-2 text-white"
          >
            Add Field
          </button>
        </div>

        <button
          onClick={addOrUpdateService}
          className="mt-4 rounded bg-green-500 p-2 text-white"
        >
          {editMode ? 'Update Service' : 'Add Service'}
        </button>
      </div>

      {/* Services List */}
      <div className="mx-auto max-w-full rounded-lg bg-white p-4 shadow-md sm:p-6">
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">Existing Services</h2>
        {services.map((service) => (
          <div key={service.id} className="border-b border-gray-200 py-4">
            <h3 className="text-lg font-semibold sm:text-xl">{service.title}</h3>
            <p className="break-words">{service.description}</p>
            {service.imageUrl && <img src={service.imageUrl} alt={service.title} className="my-2 h-32 w-32 object-cover" />}
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                onClick={() => editService(service)}
                className="rounded bg-yellow-500 p-2 text-white"
              >
                Edit
              </button>
              <button
                onClick={() => deleteService(service.id)}
                className="rounded bg-red-500 p-2 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
