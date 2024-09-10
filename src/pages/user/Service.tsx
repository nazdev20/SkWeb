import React from 'react';
import ServiceItems from "../../components/ui/pages/ServicesItems";

const Service: React.FC = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-100">
      {/* Top Section with Title and Description */}
      <div className="  p-8 rounded-lg  mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Services and Programs that Make a Difference
        </h1>
        <p className="text-lg text-center max-w-5xl mx-auto">
          Welcome to the Sangguniang Kabataan Website. We are dedicated to empowering the youth and creating positive change in our community. Explore our initiatives and programs to learn how you can get involved.
        </p>
      </div>

      {/* Services Section */}
      <ServiceItems />
    </div>
  );
};

export default Service;