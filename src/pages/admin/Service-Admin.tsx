import React, { useState, useEffect, useCallback } from 'react';
import { db, storage } from '../../config/firebaseconfig';
import { collection, addDoc, deleteDoc, doc, getDocs, DocumentData } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Service, FormField } from '../../data/data';

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

  const servicesCollectionRef = collection(db, 'services');

  const fetchServices = useCallback(async () => {
    try {
      const data = await getDocs(servicesCollectionRef);
      setServices(data.docs.map((doc: DocumentData) => ({ ...doc.data(), id: doc.id } as Service)));
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }, [servicesCollectionRef]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const uploadImage = async (image: File | null): Promise<string | undefined> => {
    if (!image) return;
    try {
      const imageRef = ref(storage, `services/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const addService = async () => {
    try {
      const imageUrl = await uploadImage(imageUpload);
      if (!imageUrl) return;

      const serviceData: Omit<Service, 'id'> = { 
        title: newService.title,
        description: newService.description,
        imageUrl,
        formFields
      };

      await addDoc(servicesCollectionRef, serviceData);
      fetchServices();

      setNewService({ title: '', description: '', imageUrl: '', formFields: [] });
      setFormFields([{ label: '', type: 'text' }]);
      setImageUpload(null); 
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const deleteService = async (id: string) => {
    try {
      const serviceDoc = doc(db, 'services', id);
      await deleteDoc(serviceDoc);
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Services Management</h1>

      {/* Service Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
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
                className="block w-1/4 p-2 border border-gray-300 rounded"
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="textarea">Textarea</option>
                <option value="date">Date</option>
                <option value="file">File</option> {/* Added file type */}
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
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Add Another Field
          </button>
        </div>

        <button
          onClick={addService}
          className="mt-6 bg-green-500 text-white p-3 rounded w-full"
        >
          Add Service
        </button>
      </div>

      {/* Services List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Available Services</h2>
        <ul className="space-y-4">
          {services.map(service => (
            <li key={service.id} className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex items-center">
                <img src={service.imageUrl} alt={service.title} className="w-16 h-16 rounded mr-4" />
                <div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <button
                onClick={() => deleteService(service.id!)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminServices;
