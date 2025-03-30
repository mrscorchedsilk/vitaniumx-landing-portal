
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormField {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

interface QuoteFormInputsProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    productInterest: string;
    volume: string;
    message: string;
    consent: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const QuoteFormInputs: React.FC<QuoteFormInputsProps> = ({ formData, handleChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
            First Name*
          </label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border-2 border-blue-200/50 hover:border-vitablue focus:border-[#1EAEDB]/70 focus:glow-vitablue"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
            Last Name*
          </label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border-2 border-blue-200/50 hover:border-vitablue focus:border-[#1EAEDB]/70 focus:glow-vitablue"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email Address*
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-2 border-blue-200/50 hover:border-vitablue focus:border-[#1EAEDB]/70 focus:glow-vitablue"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Phone Number*
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-2 border-blue-200/50 hover:border-vitablue focus:border-[#1EAEDB]/70 focus:glow-vitablue"
          />
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
          Company Name*
        </label>
        <Input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="border-2 border-blue-200/50 hover:border-vitablue focus:border-[#1EAEDB]/70 focus:glow-vitablue"
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="productInterest" className="block text-sm font-medium text-neutral-700 mb-1">
          Product Interest*
        </label>
        <select
          id="productInterest"
          name="productInterest"
          value={formData.productInterest}
          onChange={handleChange}
          required
          className="flex h-10 w-full rounded-md border-2 border-blue-200/50 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus:border-[#1EAEDB]/70 focus:glow-vitablue transition-all duration-300 hover:border-vitablue disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        >
          <option value="">Select a product category</option>
          <option value="staple">Micronutrient Premixes</option>
          <option value="processed">Government Nutritional Schemes</option>
          <option value="therapeutic">Therapeutic Foods</option>
          <option value="animal">Animal Nutrition</option>
          <option value="custom">Customized Formulations</option>
          <option value="fmcg">FMCG Fortification</option>
        </select>
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="volume" className="block text-sm font-medium text-neutral-700 mb-1">
          Estimated Volume (Tonnes/Month)
        </label>
        <Input
          type="text"
          id="volume"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
          className="border-2 border-blue-200/50 hover:border-vitablue focus:border-[#1EAEDB]/70 focus:glow-vitablue"
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message & Requirements*
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="border-2 border-blue-200/50 hover:border-vitablue focus:border-[#1EAEDB]/70 focus:glow-vitablue"
          placeholder="Please describe your specific requirements, including the type of food you want to fortify, target nutrients, etc."
        />
      </div>

      <div className="mb-6 md:mb-8">
        <label className="flex items-start">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 mr-3 focus:ring-2 focus:ring-vitablue cursor-pointer"
          />
          <span className="text-xs md:text-sm text-neutral-600">
            I consent to VitaniumX collecting and processing my personal data for the purpose of providing me with a quote. 
            I understand that my information will be handled in accordance with the privacy policy.
          </span>
        </label>
      </div>
    </>
  );
};
