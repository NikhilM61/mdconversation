import React from 'react';
import { SITE_CONFIG, NAVIGATION } from '../data/constants';
import { Facebook, Twitter, Instagram, Linkedin, Heart, ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a 
              href="#" 
              className="flex items-center gap-2 text-white font-bold text-xl mb-4"
            >
              <span className="text-forest-400">
                <ChevronDown className="h-6 w-6" />
              </span>
              <span>MKCA</span>
            </a>
            <p className="text-gray-300 mb-6">
              Preserving Maryland's natural heritage for future generations through conservation, 
              education, and advocacy.
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.socialLinks.facebook} className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.socialLinks.twitter} className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.socialLinks.instagram} className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE_CONFIG.socialLinks.linkedin} className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Annual Reports</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Conservation Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Research Publications</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Educational Materials</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Press Releases</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay informed about our conservation efforts and upcoming events.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-forest-500 w-full text-forest-900"
                />
                <button
                  type="submit"
                  className="bg-forest-600 hover:bg-forest-500 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
        
        <div className="border-t border-forest-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {year} Maryland Keystone Conservation Alliance. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-gray-500 flex items-center justify-center">
            <p>Made with</p>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <p>for the environment</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;