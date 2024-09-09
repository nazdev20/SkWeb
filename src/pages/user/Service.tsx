import ServicesItems from "../../components/ui/pages/ServicesItems";

const Service: React.FC = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Services and Programs that Make a Difference
      </h1>
      <ServicesItems />
    </div>
  );
};

export default Service;
