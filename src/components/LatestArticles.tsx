import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export const LatestArticles = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('latest-articles');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="latest-articles" 
      className="py-24 bg-gray-100 text-black relative"
    >
      <div className="container mx-auto px-4">
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">LATEST ARTICLES</h2>
          <p className="text-xl text-center max-w-2xl mx-auto text-gray-600">
            Stay informed about critical environmental issues affecting Maryland and beyond
          </p>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">{article.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-emerald-600">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link 
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link 
            to="/articles"
            className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};