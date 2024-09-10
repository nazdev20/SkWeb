import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, deleteDoc, updateDoc, doc, getDocs, getDoc } from '../../config/firebaseconfig';
import { query, limit, startAfter, DocumentSnapshot } from 'firebase/firestore';
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
  const [lastVisible, setLastVisible] = useState<DocumentSnapshot | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const storage = getStorage();
  const EVENTS_LIMIT = 5;

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const eventsQuery = query(collection(db, 'events'), limit(EVENTS_LIMIT));
      const eventSnapshot = await getDocs(eventsQuery);
      const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
      
      setEvents(eventList);
      setLastVisible(eventSnapshot.docs[eventSnapshot.docs.length - 1]); // Store last visible document for pagination
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreEvents = async () => {
    try {
      setIsLoading(true);
      if (!lastVisible) return;

      const eventsQuery = query(
        collection(db, 'events'),
        startAfter(lastVisible),
        limit(EVENTS_LIMIT)
      );
      const eventSnapshot = await getDocs(eventsQuery);
      const moreEvents = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));

      setEvents(prevEvents => [...prevEvents, ...moreEvents]);
      setLastVisible(eventSnapshot.docs[eventSnapshot.docs.length - 1]); // Update last visible document
    } catch (error) {
      console.error('Error fetching more events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const selectedFile = files[0];

      if (selectedFile.size > 1048576) {
        alert('File size exceeds 1 MB. Please upload a smaller file.');
        return;
      }

      const updatedFiles = [...imageFiles];
      updatedFiles[index] = selectedFile;
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
      const imageUrls = await uploadImages();
      const eventsCollection = collection(db, 'events');
      await addDoc(eventsCollection, {
        title: newEvent.title,
        date: newEvent.date,
        location: newEvent.location,
        description: newEvent.description,
        image: imageUrls,
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
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Manage Events</h2>
      
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-4 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{newEvent.id ? 'Edit Event' : 'Add New Event'}</h3>
        <div className="space-y-4">
          {/* Inputs for event details */}
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            placeholder="Date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newEvent.category}
            onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Art">Art</option>
            <option value="Party">Party</option>
            <option value="Art">Gathering</option>
          </select>
          
          {/* Image inputs */}
          {imageInputs.map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, index)}
                className="border border-gray-300 rounded-lg p-2"
              />
              <button
                type="button"
                onClick={() => removeImageInput(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addImageInput}
            className="text-blue-500 hover:text-blue-700"
          >
            Add Image
          </button>
          
          <div className="flex justify-end space-x-2 mt-4">
            {newEvent.id ? (
              <>
                <button
                  onClick={saveEvent}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setNewEvent({ id: '', title: '', date: '', location: '', description: '', image: [], category: '' })}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={addEvent}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Add Event
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Events List</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold">{event.title}</h4>
                    <p className="text-gray-600">{event.date}</p>
                    <p className="text-gray-600">{event.location}</p>
                    <p className="text-gray-600">{event.description}</p>
                    <div className="flex flex-wrap mt-2 space-x-2">
                      {event.image.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Event ${i}`}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editEvent(event.id)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEvent(event.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEventClick(event)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Mark Attendance
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {lastVisible && (
          <button
            onClick={fetchMoreEvents}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        )}
      </div>

      {/* Attendance Form */}
      {showAttendanceForm && selectedEvent && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Mark Attendance for {selectedEvent.title}</h3>
            {/* Add your attendance form fields here */}
            <button
              onClick={() => setShowAttendanceForm(false)}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
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
