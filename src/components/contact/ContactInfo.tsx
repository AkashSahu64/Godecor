import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          Have questions about our products or services? We're here to help!
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>support@plantify.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>123 Green Street<br />Plant City, PC 12345</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="h-64 bg-gray-200 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactInfo;