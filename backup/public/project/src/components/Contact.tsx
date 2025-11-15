import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-forest-800">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 py-2 border"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 py-2 border"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 py-2 border"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 py-2 border"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-forest-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-forest-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-forest-600 hover:text-forest-800 transition-colors">
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-forest-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-forest-600 hover:text-forest-800 transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-forest-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Office Location</h4>
                    <address className="not-italic">
                      {SITE_CONFIG.address}
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-forest-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Office Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-700 text-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
              <p className="mb-6">
                There are many ways to support our conservation efforts. Join us as a volunteer, 
                become a member, or participate in our upcoming events.
              </p>
              <div className="space-y-4">
                <a href="#" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-forest-800 block text-center">
                  Volunteer Opportunities
                </a>
                <a href="#" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-forest-800 block text-center">
                  Upcoming Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;