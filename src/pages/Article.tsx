import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Article = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/" className="text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/articles" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Articles
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden mb-2">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-500 text-right mb-8">
            Image via <a href="https://www.pexels.com/photo/5447285/" target="_blank" rel="noopener noreferrer" className="underline">Pexels</a>
          </p>
          
          <div className="flex items-center text-gray-400 mb-4">
            <Calendar size={20} className="mr-2" />
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span className="text-emerald-400">{article.category}</span>
            {article.author && 
              <>
                <span className="mx-2">•</span>
                <span>{article.author}</span>
              </>
            }
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
          
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 md:p-12">
            <div className="article-content">
              {article.content}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};