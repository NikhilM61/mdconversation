import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-river-600">
      <div className="container-custom">
        <div className="bg-river-700 rounded-lg p-8 md:p-12 text-white text-center md:text-left shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-12">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Mail className="h-8 w-8 mr-3 text-river-300" />
                <h2 className="text-2xl font-bold">Join Our Newsletter</h2>
              </div>
              <p className="text-river-100 max-w-xl">
                Stay informed about our conservation initiatives, success stories, and upcoming events
                by subscribing to our monthly newsletter.
              </p>
            </div>
            <div className="w-full md:w-2/5">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-forest-500 w-full text-forest-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-md transition-colors flex-shrink-0 font-medium"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-river-200 mt-2">
                By subscribing, you agree to receive emails from us. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;