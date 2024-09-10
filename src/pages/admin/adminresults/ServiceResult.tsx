import { useEffect, useState } from 'react';
import { collection, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../config/firebaseconfig';

interface ApplicationData {
  [key: string]: string | number | string[] | number[] | boolean; // Adjust types based on your data structure
}

interface Application {
  id: string;
  data: ApplicationData;
}

const ServiceResult = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [services, setServices] = useState<Record<string, string>>({}); // Maps serviceId to serviceTitle
  const [, setUserInput] = useState<{ [id: string]: ApplicationData }>({});
  const [servicesLoaded, setServicesLoaded] = useState(false);

  useEffect(() => {
    const fetchServices = () => {
      const servicesRef = collection(db, 'services');
      const unsubscribe = onSnapshot(servicesRef, (querySnapshot) => {
        const servicesData = querySnapshot.docs.reduce<Record<string, string>>((acc, doc) => {
          const data = doc.data();
          acc[doc.id] = data.title;
          return acc;
        }, {});
        setServices(servicesData);
        setServicesLoaded(true); // Mark services as fully loaded
      }, (error) => {
        console.error('Error fetching services:', error);
      });

      return unsubscribe; // Cleanup function for unsubscribing from snapshot listener
    };

    const unsubscribeServices = fetchServices();
    return () => unsubscribeServices(); // Unsubscribe on component unmount
  }, []);

  useEffect(() => {
    if (!servicesLoaded) return;

    const applicationsRef = collection(db, 'applications');
    const unsubscribeApplications = onSnapshot(applicationsRef, (querySnapshot) => {
      const filteredAppsData: Application[] = [];
      querySnapshot.forEach(async (doc) => {
        const appData = doc.data() as ApplicationData;
        const serviceId = appData.serviceId as string;
        const serviceTitle = services[serviceId] || 'Unknown Service';

        if (serviceTitle === 'Unknown Service') {
          await deleteDoc(doc.ref); // Delete the record from Firestore only if the service is unknown
        } else {
          filteredAppsData.push({
            id: doc.id,
            data: appData,
          });
        }
      });

      setApplications(filteredAppsData);
    }, (error) => {
      console.error('Error fetching applications:', error);
    });

    return () => unsubscribeApplications(); // Unsubscribe on component unmount
  }, [servicesLoaded, services]);

  const handleInputChange = (serviceId: string, key: string, value: string | number | boolean) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [serviceId]: {
        ...prevInput[serviceId],
        [key]: value,
      },
    }));
  };

  const handleQualify = async (applicationId: string) => {
    try {
      const applicationRef = doc(db, 'applications', applicationId);
      await updateDoc(applicationRef, { qualified: true });
      setApplications((prevApps) =>
        prevApps.map((app) =>
          app.id === applicationId ? { ...app, data: { ...app.data, qualified: true } } : app
        )
      );
    } catch (error) {
      console.error('Error marking as qualified:', error);
    }
  };

  const handleUnqualify = async (applicationId: string) => {
    try {
      const applicationRef = doc(db, 'applications', applicationId);
      await deleteDoc(applicationRef);
      setApplications((prevApps) => prevApps.filter((app) => app.id !== applicationId));
    } catch (error) {
      console.error('Error marking as unqualified:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-4 sm:mx-8 lg:mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Service Results</h1>
      {applications.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {applications.map((application, index) => {
            const serviceId = application.data.serviceId as string;
            const serviceTitle = services[serviceId] || 'Unknown Service';
            const isQualified = application.data.qualified as boolean || false;

            return (
              <div key={application.id} className={`bg-white shadow-md rounded-lg p-6 ${index < 4 ? 'w-full' : ''}`}>
                <h2 className="text-xl font-semibold mb-4">Service Title: {serviceTitle}</h2>
                <div className="space-y-4">
                  {Object.entries(application.data)
                    .filter(([key]) => key !== 'qualified') // Exclude the qualified field from rendering
                    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)) // Sort fields alphabetically
                    .map(([key, value], index) => (
                      <div key={index} className="mb-4">
                        <label className="block font-medium text-gray-600">{key}</label>
                        <div className="mt-1 text-gray-800">
                          {renderFieldContent(key, value, serviceId, handleInputChange)}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-4">
                  {isQualified ? (
                    <div className="bg-green-500 text-white px-4 py-2 rounded-md text-center">
                      Qualified
                    </div>
                  ) : (
                    <div>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                        onClick={() => handleQualify(application.id)}
                      >
                        Qualify
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleUnqualify(application.id)}
                      >
                        Unqualify
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-600">No applications found.</p>
      )}
    </div>
  );
};

const renderFieldContent = (
  key: string,
  value: string | number | string[] | number[] | boolean,
  serviceId: string,
  handleInputChange: (serviceId: string, key: string, value: string | number | boolean) => void
) => {
  if (typeof value === 'string') {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(serviceId, key, e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      />
    );
  } else if (typeof value === 'number') {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => handleInputChange(serviceId, key, parseFloat(e.target.value))}
        className="border border-gray-300 rounded px-3 py-2"
      />
    );
  } else if (Array.isArray(value)) {
    return (
      <ul className="list-disc list-inside">
        {value.map((item, index) => (
          <li key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => handleInputChange(serviceId, key, e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </li>
        ))}
      </ul>
    );
  } else {
    return <span>Unsupported type</span>;
  }
};

export default ServiceResult;
