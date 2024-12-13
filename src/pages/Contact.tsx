import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;