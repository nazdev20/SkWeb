import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebaseconfig';
import { collection, getDocs, DocumentData, QuerySnapshot } from 'firebase/firestore';
import NewsletterItems from '../../components/ui/pages/NewsletterItems';

interface Newsletter {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  fullContent: string; // Ensure fullContent is included
}

const Newsletter: React.FC = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [dataFetched, setDataFetched] = useState<boolean>(false); // New state to track if data was fetched

  const newslettersCollectionRef = collection(db, 'newsletters');

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        // Check if data has already been fetched
        if (dataFetched) return;

        const data: QuerySnapshot<DocumentData> = await getDocs(newslettersCollectionRef);
        setNewsletters(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Newsletter))
        );
        setDataFetched(true); // Set dataFetched to true once data is fetched
      } catch (error) {
        console.error('Error fetching newsletters:', error);
      }
    };

    fetchNewsletters();
  }, [dataFetched, newslettersCollectionRef]);

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Us</h1>
      <p className="text-base md:text-lg mb-8">Get the latest news and updates on youth and community initiatives.</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">  {/* Increase gap */}
        {newsletters.map((newsletter) => (
          <NewsletterItems key={newsletter.id} newsletter={newsletter} />
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
