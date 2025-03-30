
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
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
          className="bg-white/50 border-2 border-blue-200/50 focus:border-[#1EAEDB]/70 outline-none"
        />
      </div>
      
      <div>
        <Textarea
          name="message"
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={handleChange}
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
