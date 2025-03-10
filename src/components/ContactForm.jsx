import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For this example, we'll simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {formStatus.submitted && (
        <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;