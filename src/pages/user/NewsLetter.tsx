import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebaseconfig';
import { collection, getDocs, DocumentData, QuerySnapshot, query, orderBy, limit, startAfter } from 'firebase/firestore';
import NewsletterItems from '../../components/ui/pages/NewsletterItems';

interface Newsletter {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Newsletter: React.FC = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [lastVisible, setLastVisible] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true); // Track if more items are available

  const newslettersCollectionRef = collection(db, 'newsletters');

  const fetchNewsletters = async () => {
    setLoading(true);
    let q = query(newslettersCollectionRef, orderBy('title'), limit(10));
    if (lastVisible) {
      q = query(q, startAfter(lastVisible));
    }
    try {
      const data: QuerySnapshot<DocumentData> = await getDocs(q);
      const fetchedNewsletters = data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Newsletter));

      // Ensure unique newsletters
      setNewsletters((prev) => {
        const existingIds = new Set(prev.map(newsletter => newsletter.id));
        const uniqueNewsletters = fetchedNewsletters.filter(newsletter => !existingIds.has(newsletter.id));
        return [...prev, ...uniqueNewsletters];
      });

      setLastVisible(data.docs[data.docs.length - 1] || null);
      setHasMore(!data.empty); // Check if there are more items to load
    } catch (error) {
      console.error('Error fetching newsletters:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNewsletters();
  }, []); // Fetch initial data on component mount

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      fetchNewsletters();
    }
  };

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Us</h1>
      <p className="text-base md:text-lg mb-8">Get the latest news and updates on youth and community initiatives.</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsletters.map((newsletter) => (
          <NewsletterItems key={newsletter.id} newsletter={newsletter} />
        ))}
      </div>
      {loading && <p>Loading more newsletters...</p>}
      {!loading && hasMore && (
        <button onClick={handleLoadMore} className="mt-4 bg-blue-500 text-white p-2 rounded">Load More</button>
      )}
    </div>
  );
};

export default Newsletter;
