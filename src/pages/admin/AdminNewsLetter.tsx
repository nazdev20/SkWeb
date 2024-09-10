import React, { useState, useEffect } from 'react';
import { db, storage } from '../../config/firebaseconfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, DocumentData, QuerySnapshot, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';

interface Newsletter {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const AdminNewsletter: React.FC = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Newsletter, 'id'>>({
    title: '',
    description: '',
    imageUrl: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [lastVisible, setLastVisible] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const newslettersCollectionRef = collection(db, 'newsletters');

  useEffect(() => {
    const fetchNewsletters = async () => {
      if (loading || !hasMore) return; // Prevent fetching if already loading or no more data

      setLoading(true);
      let q = query(newslettersCollectionRef, orderBy('title'), limit(10));
      if (lastVisible) {
        q = query(q, startAfter(lastVisible));
      }

      try {
        const data: QuerySnapshot<DocumentData> = await getDocs(q);
        console.log('Fetched data:', data.docs.map(doc => doc.data())); // Log fetched data
        if (data.empty) {
          setHasMore(false); // No more data to fetch
        } else {
          const fetchedNewsletters = data.docs.map(doc => ({ ...doc.data(), id: doc.id } as Newsletter));
          console.log('Fetched newsletters:', fetchedNewsletters); // Log fetched newsletters
          setNewsletters(prev => {
            // Avoid duplicating records
            const existingIds = new Set(prev.map(newsletter => newsletter.id));
            const uniqueNewsletters = fetchedNewsletters.filter(newsletter => !existingIds.has(newsletter.id));
            return [...prev, ...uniqueNewsletters];
          });
          setLastVisible(data.docs[data.docs.length - 1]); // Update lastVisible to the last document
        }
      } catch (error) {
        console.error('Error fetching newsletters:', error);
      }
      setLoading(false);
    };

    fetchNewsletters();
  }, [lastVisible, loading, hasMore]);

  const handleAddNewsletter = async () => {
    let imageUrl = formData.imageUrl;

    if (imageFile) {
      const imageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`); // Unique file name
      await uploadBytes(imageRef, imageFile);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(newslettersCollectionRef, { ...formData, imageUrl });
    setFormData({ title: '', description: '', imageUrl: '' });
    setImageFile(null);
    setLastVisible(null); // Reset pagination when adding a new newsletter
    setNewsletters([]); // Clear existing list to avoid stale data
  };

  const handleUpdateNewsletter = async (id: string) => {
    const newsletterDoc = doc(db, 'newsletters', id);
    let imageUrl = formData.imageUrl;

    if (imageFile) {
      const imageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`); // Unique file name
      await uploadBytes(imageRef, imageFile);
      imageUrl = await getDownloadURL(imageRef);
    }

    await updateDoc(newsletterDoc, { ...formData, imageUrl });
    setEditing(null);
    setImageFile(null);
    setLastVisible(null); // Reset pagination when updating a newsletter
    setNewsletters([]); // Clear existing list to avoid stale data
  };

  const handleDeleteNewsletter = async (id: string) => {
    const newsletterDoc = doc(db, 'newsletters', id);
    await deleteDoc(newsletterDoc);
    setLastVisible(null); // Reset pagination when deleting a newsletter
    setNewsletters([]); // Clear existing list to avoid stale data
  };

  const handleEdit = (newsletter: Newsletter) => {
    setEditing(newsletter.id);
    setFormData({
      title: newsletter.title,
      description: newsletter.description,
      imageUrl: newsletter.imageUrl,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setLastVisible(prev => prev); // This triggers useEffect to fetch more data
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Newsletters</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{editing ? 'Edit Newsletter' : 'Add New Newsletter'}</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          editing ? handleUpdateNewsletter(editing) : handleAddNewsletter();
        }}>
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="block w-full mb-2 p-2 border border-gray-300 rounded" />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="block w-full mb-2 p-2 border border-gray-300 rounded" />
          <input type="file" name="imageUrl" onChange={handleFileChange} className="block w-full mb-2" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">{editing ? 'Update' : 'Add'}</button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newsletters.map((newsletter) => (
          <div key={newsletter.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={newsletter.imageUrl} alt={newsletter.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{newsletter.title}</h2>
              <p className="text-gray-700 mb-4">{newsletter.description}</p>
              <button onClick={() => handleEdit(newsletter)} className="text-blue-500 hover:underline mr-4">Edit</button>
              <button onClick={() => handleDeleteNewsletter(newsletter.id)} className="text-red-500 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {loading && <p>Loading more newsletters...</p>}
      {!loading && hasMore && (
        <button onClick={handleLoadMore} className="mt-4 bg-blue-500 text-white p-2 rounded">Load More</button>
      )}
    </div>
  );
};

export default AdminNewsletter;
