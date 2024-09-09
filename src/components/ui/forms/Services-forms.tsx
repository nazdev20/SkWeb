import React from 'react';
import { FormField } from '../../../data/data';

interface Service {
  formFields: FormField[];
}

interface ServiceFormsProps {
  service: Service;
  formData: Record<string, string>;
  handleInputChange: (label: string, value: string) => void;
  handleFileChange: (label: string, file: File | null) => void;
  handleSubmit: () => void;
  closeForm: () => void;
}

const ServiceForms: React.FC<ServiceFormsProps> = ({
  service,
  formData,
  handleInputChange,
  handleFileChange,
  handleSubmit,
  closeForm
}) => {

  const getFieldValue = (label: string) => {
    return formData && formData[label] !== undefined ? formData[label] : '';
  };

  const renderFormFields = () => {
    return service.formFields.map((field, index) => {
      const inputValue = getFieldValue(field.label);

      switch (field.type) {
        case 'textarea':
          return (
            <textarea
              key={index}
              placeholder={field.label}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
              value={inputValue}
              onChange={(e) => handleInputChange(field.label, e.target.value)}
            />
          );
        case 'file':
          return (
            <input
              key={index}
              type="file"
              className="block w-full mb-2"
              onChange={(e) => handleFileChange(field.label, e.target.files ? e.target.files[0] : null)}
            />
          );
        default:
          return (
            <input
              key={index}
              type={field.type}
              placeholder={field.label}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
              value={inputValue}
              onChange={(e) => handleInputChange(field.label, e.target.value)}
            />
          );
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Service Form</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {renderFormFields()}
        <button
          type="submit"
          className="bg-green-500 text-white p-3 rounded w-full"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={closeForm}
          className="mt-2 bg-gray-500 text-white p-3 rounded w-full"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ServiceForms;
