
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // The webhook URL for n8n
  const WEBHOOK_URL = 'https://n8n.rajatkhandelwal.com/webhook/7652828f-4410-4ada-96a5-4fb1e0e6fc15';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Convert form data to URLSearchParams (query parameters)
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone_number: formData.phone, // Match the parameter name from the Python example
        requirements: formData.message, // Match the parameter name from the Python example
      });
      
      // Construct the URL with query parameters
      const url = `${WEBHOOK_URL}?${params.toString()}`;
      
      // Send the POST request with empty body, data is in URL
      const response = await fetch(url, {
        method: 'POST',
      });
      
      if (response.ok) {
        toast.success('Thank you! We will contact you soon.');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
      } else {
        console.error('Webhook submission failed:', await response.text());
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Connection error. Please check your internet and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-form space-y-4 animate-fade-in">
      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-center md:text-left">Inquire About Micronutrient Premixes</h3>
      
      <div>
        <Input
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="bg-white/50 border-2 border-blue-200/50 focus:border-[#1EAEDB]/70 outline-none"
        />
      </div>
      
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="bg-white/50 border-2 border-blue-200/50 focus:border-[#1EAEDB]/70 outline-none"
        />
      </div>
      
      <div>
        <Input
          name="company"
          placeholder="Company Name *"
          value={formData.company}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="bg-white/50 border-2 border-blue-200/50 focus:border-[#1EAEDB]/70 outline-none"
        />
      </div>
      
      <div>
        <Input
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="bg-white/50 border-2 border-blue-200/50 focus:border-[#1EAEDB]/70 outline-none"
        />
      </div>
      
      <div>
        <Textarea
          name="message"
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="bg-white/50 border-2 border-blue-200/50 focus:border-[#1EAEDB]/70 outline-none resize-none h-24"
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full btn-primary"
      >
        {isSubmitting ? 'Submitting...' : 'Discuss Your Requirements'}
      </Button>
    </form>
  );
};

export default ContactForm;
