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
  const [loading, setLoading] = useState<boolean>(true);
  const [dataFetched, setDataFetched] = useState<boolean>(false); // New state to track if data was fetched
  const servicesCollectionRef = collection(db, 'services');
  const applicationsCollectionRef = collection(db, 'applications');

  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await getDocs(servicesCollectionRef);
      const servicesData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }) as Service);
      console.log('Fetched services:', servicesData);
      setServices(servicesData);
      setDataFetched(true);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchServices();
    }
  }, [dataFetched]);

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
    <div className="p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <p>Loading services...</p>
      ) : services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        services.map(service => (
          <div
            key={service.id}
            className="flex flex-col items-center text-center border-2 border-gray-200 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openServiceItemsModal(service)}
          >
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300 bg-gray-200"
              style={{
                backgroundImage: `url(${service.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
              <p className="text-sm md:text-base mt-2">{service.description}</p>
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
