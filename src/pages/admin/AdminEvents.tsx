import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, deleteDoc, updateDoc, doc, getDocs, getDoc } from '../../config/firebaseconfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Event } from '../../data/data';

const AdminEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({
    id: '',
    title: '',
    date: '',
    location: '',
    description: '',
    image: [],
    category: '',
  });
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imageInputs, setImageInputs] = useState<number[]>([0]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showAttendanceForm, setShowAttendanceForm] = useState(false);

  const storage = getStorage();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const eventsCollection = collection(db, 'events');
      const eventSnapshot = await getDocs(eventsCollection);
      const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
      setEvents(eventList);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const updatedFiles = [...imageFiles];
      updatedFiles[index] = files[0];
      setImageFiles(updatedFiles);
    }
  };

  const addImageInput = () => {
    setImageInputs([...imageInputs, imageInputs.length]);
  };

  const removeImageInput = (index: number) => {
    setImageInputs(imageInputs.filter((_, i) => i !== index));
    setImageFiles(imageFiles.filter((_, i) => i !== index));
  };

  const uploadImages = async (): Promise<string[]> => {
    const filePromises = imageFiles.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const storageRef = ref(storage, `events/${file.name}`);
        
        uploadBytes(storageRef, file)
          .then(async (snapshot) => {
            const downloadURL = await getDownloadURL(snapshot.ref);
            resolve(downloadURL);
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
            reject(error);
          });
      });
    });

    try {
      const urls = await Promise.all(filePromises);
      return urls;
    } catch (error) {
      console.error('Error uploading images:', error);
      return [];
    }
  };

  const addEvent = async () => {
    try {
      const imageUrls = await uploadImages(); // Upload and get image URLs
      const eventsCollection = collection(db, 'events');
      await addDoc(eventsCollection, {
        title: newEvent.title,
        date: newEvent.date,
        location: newEvent.location,
        description: newEvent.description,
        image: imageUrls, // Store URLs in Firestore
        category: newEvent.category,
      });
      setNewEvent({
        id: '',
        title: '',
        date: '',
        location: '',
        description: '',
        image: [],
        category: '',
      });
      setImageFiles([]);
      setImageInputs([0]);
      fetchEvents();
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      const eventDoc = doc(db, 'events', id);
      await deleteDoc(eventDoc);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const editEvent = (id: string) => {
    const eventToEdit = events.find(event => event.id === id);
    if (eventToEdit) {
      setNewEvent(eventToEdit);
      setImageFiles(Array.isArray(eventToEdit.image) ? eventToEdit.image.map(img => img as unknown as File) : []);
      setImageInputs(eventToEdit.image && Array.isArray(eventToEdit.image) ? eventToEdit.image.map((_, i) => i) : [0]);
    } else {
      console.error('Event not found for ID:', id);
    }
  };

  const saveEvent = async () => {
    try {
      if (!newEvent.id) {
        console.error('No event ID specified for update.');
        return;
      }

      const eventDoc = doc(db, 'events', newEvent.id);
      const docSnapshot = await getDoc(eventDoc);

      if (!docSnapshot.exists()) {
        console.error('No such document!');
        return;
      }

      const images = imageFiles.length ? await uploadImages() : newEvent.image;

      await updateDoc(eventDoc, {
        title: newEvent.title,
        date: newEvent.date,
        location: newEvent.location,
        description: newEvent.description,
        image: images,
        category: newEvent.category,
      });

      setNewEvent({
        id: '',
        title: '',
        date: '',
        location: '',
        description: '',
        image: [],
        category: '',
      });
      setImageFiles([]);
      setImageInputs([0]);
      fetchEvents();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleEventClick = (event: Event) => {
    const today = new Date().toISOString().split('T')[0];
    if (event.date === today) {
      setSelectedEvent(event);
      setShowAttendanceForm(true);
    } else {
      alert('Attendance form is only available on the event date.');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Manage Events</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">{newEvent.id ? 'Edit Event' : 'Add New Event'}</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            placeholder="Date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {imageInputs.map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, index)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => removeImageInput(index)}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addImageInput}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Image
          </button>
          <input
            type="text"
            placeholder="Category"
            value={newEvent.category}
            onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={newEvent.id ? saveEvent : addEvent}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {newEvent.id ? 'Update Event' : 'Add Event'}
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Event List</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id} className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold">{event.title}</h4>
                <p className="text-gray-600">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-gray-600">Category: {event.category}</p>
                <div className="mt-2">
                  {event.image.map((imgUrl, index) => (
                    <img key={index} src={imgUrl} alt={`Event ${index}`} className="w-32 h-32 object-cover mb-2" />
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => editEvent(event.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEventClick(event)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Mark Attendance
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showAttendanceForm && selectedEvent && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h4 className="text-xl font-semibold mb-4">Mark Attendance for {selectedEvent.title}</h4>
            <form>
           
            </form>
            <button
              onClick={() => setShowAttendanceForm(false)}
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
