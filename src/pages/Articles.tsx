import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { articles } from '../data/articles';

export const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conservation Articles</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive collection of articles on environmental conservation, 
              climate change, and sustainable practices in Maryland and beyond.
            </p>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-8">
            <p className="text-gray-400">
              Showing {filteredArticles.length} of {articles.length} articles
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <article 
                  key={article.id}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-400 mb-3">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm">{article.date}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-emerald-400 font-medium">{article.category}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-white hover:text-emerald-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link 
                      to={`/articles/${article.id}`}
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium group"
                    >
                      Read Full Article
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No Articles Found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Featured Categories */}
          <div className="mt-16 pt-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.slice(1).map(category => {
                const categoryArticles = articles.filter(article => article.category === category);
                const featuredArticle = categoryArticles[0];
                
                return (
                  <div 
                    key={category}
                    className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {featuredArticle && (
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={featuredArticle.image} 
                          alt={category}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-emerald-400">{category}</h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''}
                      </p>
                      <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
                        View All →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};