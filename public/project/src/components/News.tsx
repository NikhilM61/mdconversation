import React from 'react';
import { NEWS_ITEMS } from '../data/constants';
import { Calendar, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  return (
    <section id="news" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Latest News</h2>
          <p className="section-subtitle">
            Stay updated on our conservation efforts and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-forest-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-forest-600 font-medium hover:text-forest-800 transition-colors"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary">
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;