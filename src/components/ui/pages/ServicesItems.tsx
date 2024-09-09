import React, { useState, useEffect } from 'react';
import { db, storage } from "../../../config/firebaseconfig";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ServiceForms from '../forms/Services-forms';
import { Service, FormData } from '../../../data/data';
import ServiceItemsModal from '../../../modals/ServiceItemsmodal';

const ServiceItems: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showServiceForm, setShowServiceForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({});
  const [fileUploads, setFileUploads] = useState<Record<string, File | null>>({});

  const servicesCollectionRef = collection(db, 'services');
  const applicationsCollectionRef = collection(db, 'applications');

  const fetchServices = async () => {
    try {
      const data = await getDocs(servicesCollectionRef);
      const servicesData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }) as Service);
      console.log('Fetched services:', servicesData); // Log fetched services
      setServices(servicesData);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleFileChange = (serviceId: string, file: File | null) => {
    setFileUploads({
      ...fileUploads,
      [serviceId]: file,
    });
  };

  const handleApply = async (serviceId: string) => {
    try {
      let applicationData: { serviceId: string; fileURL?: string } = { serviceId, ...formData[serviceId] };

      if (fileUploads[serviceId]) {
        const fileRef = ref(storage, `applications/${serviceId}/${fileUploads[serviceId]!.name}`);
        await uploadBytes(fileRef, fileUploads[serviceId]!);
        const fileURL = await getDownloadURL(fileRef);
        applicationData = { ...applicationData, fileURL };
      }

      await addDoc(applicationsCollectionRef, applicationData);
      alert('Application submitted!');
      setSelectedService(null);
      setFormData(prevFormData => ({ ...prevFormData, [serviceId]: {} }));
      setFileUploads(prevUploads => ({ ...prevUploads, [serviceId]: null }));
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  const handleInputChange = (serviceId: string, field: string, value: string) => {
    setFormData({
      ...formData,
      [serviceId]: {
        ...formData[serviceId],
        [field]: value
      }
    });
  };

  const openServiceItemsModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceItemsModal = () => {
    setSelectedService(null);
  };

  const openServiceForm = () => {
    setShowServiceForm(true);
  };

  const closeServiceForm = () => {
    setShowServiceForm(false);
  };

  return (
    <div className="p-4 grid grid-cols-3 gap-6">
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        services.map(service => (
          <div 
            key={service.id} 
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            style={{ 
              backgroundImage: `url(${service.imageUrl})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              height: '200px', // Adjust height as needed
              width: '100%'    // Ensure it takes full width of the grid item
            }}
            onClick={() => openServiceItemsModal(service)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
              <div className="text-white">
                <h3 className="text-sm md:text-lg font-bold">{service.title}</h3>
                <p className="text-xs md:text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))
      )}

      {selectedService && (
        <ServiceItemsModal 
          service={selectedService} 
          onClose={closeServiceItemsModal}
          openServiceForm={openServiceForm}
        />
      )}

      {showServiceForm && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg relative">
            <ServiceForms 
              service={selectedService} 
              formData={formData[selectedService.id] || {}} 
              handleInputChange={(field: string, value: string) => handleInputChange(selectedService.id, field, value)}
              handleFileChange={(_field: string, file: File | null) => handleFileChange(selectedService.id, file)}
              handleSubmit={() => handleApply(selectedService.id)}
              closeForm={closeServiceForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceItems;
