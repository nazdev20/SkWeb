import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { FirestoreEvent } from '../../../data/data';
const db = getFirestore();


export const fetchEvents = async () => {
    const eventsCollection = collection(db, 'events');
    const eventsSnapshot = await getDocs(eventsCollection);
    const eventsList = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return eventsList;
};


export const addEvent = async (event: FirestoreEvent) => {
    await addDoc(collection(db, 'events'), event);
};

export const updateEvent = async (id: string, updatedEvent: FirestoreEvent) => {
    const eventDoc = doc(db, 'events', id);
    await updateDoc(eventDoc, updatedEvent);
};


export const deleteEvent = async (id: string) => {
    const eventDoc = doc(db, 'events', id);
    await deleteDoc(eventDoc);
};
