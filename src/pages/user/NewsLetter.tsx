import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';
import NewsletterItems from '../../components/ui/pages/NewsletterItems';
import type { Newsletter as NewsletterData } from '../../data/data';
import { normalizeNewsletter } from '../../data/firestoreData';

const Newsletter: React.FC = () => {
  const [newsletters, setNewsletters] = useState<NewsletterData[]>([]);

  const newslettersCollectionRef = collection(db, 'newsletters');

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const data = await getDocs(newslettersCollectionRef);
        setNewsletters(data.docs.map(normalizeNewsletter));
      } catch (error) {
        console.error('Error fetching newsletters:', error);
      }
    };

    fetchNewsletters();
  }, []);

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Us</h1>
      <p className="text-base md:text-lg mb-8">Get the latest news and updates on youth and community initiatives.</p>
      <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {newsletters.map((newsletter) => (
          <NewsletterItems key={newsletter.id} newsletter={newsletter} />
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
