import React from 'react';
import Card from '../../components/ui/pages/Involvementcard';
import YouthLeader from "../../assets/Hero section/CAll for mebeerrs.jpg";
import LeadWithPassion from "../../assets/Hero section/PROFILINGGGGGG.jpg";
import NetworkWithYOuth from "../../assets/Hero section/KK ASSEMBLY.jpg";

const InvolvementPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <header className="text-center">
        <h2 className="text-gray-500 uppercase mb-4">Discover</h2>
        <h1 className="text-4xl font-bold mb-2">Get Involved Today</h1>
        <p className="text-gray-600">Learn how you can make a difference in your community</p>
      </header>

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card
          title="Become a Youth Leader"
          description="Join Sangguniang Kabataan and contribute to positive change in your area"
          actions={[
            { label: 'Learn More', href: '#learn-more' },
            { label: 'Sign Up', href: '#sign-up' },
          ]}
          image={YouthLeader} // Image passed here
        />

        <Card
          title="Lead with Passion"
          description="Motivate others to create positive change in their communities"
          actions={[
            { label: 'Join Us', href: '#join-us' },
          ]}
          image={LeadWithPassion} // Image passed here
        />

        <Card
          title="Network with Other Youth Leaders"
          description="Build relationships and collaborate with like-minded individuals"
          actions={[
            { label: 'Learn More', href: '#learn-more' },
            { label: 'Sign Up', href: '#sign-up' },
          ]}
          image={NetworkWithYOuth} // Image passed here
        />

        <div className="flex flex-col space-y-4">
          <Card
            title="Attend Events"
            description="Participate in community activities and connect with other youth"
            actions={[
              { label: 'Join Now', href: '#join-now' },
            ]}
            imagePlaceholder={false} // No image, no placeholder
          />

          <Card
            title="Volunteer Opportunities"
            description="Make a difference by giving back to your community"
            actions={[
              { label: 'Get Involved', href: '#get-involved' },
            ]}
            imagePlaceholder={false} // No image, no placeholder
          />
        </div>
      </section>
    </div>
  );
};

export default InvolvementPage;
