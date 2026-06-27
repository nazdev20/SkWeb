import { useEffect, useState } from 'react';
import { collection, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../config/firebaseconfig';
import { useModal } from '../../../context/ModalContext';

interface ApplicationData {
  [key: string]: string | number | string[] | number[] | boolean;
}

interface Application {
  id: string;
  data: ApplicationData;
}

const ServiceResult = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [services, setServices] = useState<Record<string, string>>({});
  const [, setUserInput] = useState<{ [id: string]: ApplicationData }>({});
  const [servicesLoaded, setServicesLoaded] = useState(false);
  const { showModal } = useModal();

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
        setServicesLoaded(true);
      }, (error) => {
        console.error('Error fetching services:', error);
        showModal('Error', 'Failed to fetch services.');
      });

      return unsubscribe;
    };

    const unsubscribeServices = fetchServices();
    return () => unsubscribeServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          await deleteDoc(doc.ref);
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
      showModal('Error', 'Failed to fetch applications.');
    });

    return () => unsubscribeApplications();
  }, [servicesLoaded, services, showModal]);

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
      showModal('Success', 'Application marked as qualified.');
    } catch (error) {
      console.error('Error marking as qualified:', error);
      showModal('Error', 'Failed to mark as qualified.');
    }
  };

  const handleUnqualify = async (applicationId: string) => {
    try {
      const applicationRef = doc(db, 'applications', applicationId);
      await deleteDoc(applicationRef);
      setApplications((prevApps) => prevApps.filter((app) => app.id !== applicationId));
      showModal('Success', 'Application unqualified and removed.');
    } catch (error) {
      console.error('Error marking as unqualified:', error);
      showModal('Error', 'Failed to unqualify application.');
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
                    .filter(([key]) => key !== 'qualified')
                    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
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
