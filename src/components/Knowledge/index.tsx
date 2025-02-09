"use client"
import React, { useState } from 'react';
import { Book, Search, ArrowRight, Bookmark, ThumbsUp } from 'lucide-react';

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      title: "Getting Started with IOT Development",
      category: "IOT",
      content: "Learn the fundamentals of IOT development including sensor integration, cloud connectivity, and real-time data processing...",
      views: 234,
      helpful: 45
    },
    {
      title: "PCB Design Best Practices",
      category: "Hardware",
      content: "Essential guidelines for PCB design, component placement, and fabrication process...",
      views: 189,
      helpful: 37
    },
    {
      title: "Smart Home Project Guide",
      category: "Projects",
      content: "Step-by-step guide to building a smart home system using sensors and automation...",
      views: 156,
      helpful: 29
    }
  ];

  const categories = [
    "all",
    "IOT",
    "Hardware",
    "Projects",
    "Robotics",
    "Software"
  ];

  const filteredArticles = articles.filter(article =>
    (activeCategory === 'all' || article.category === activeCategory) &&
    (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     article.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-green-800">Knowledge Base</h1>
          </div>
          <p className="text-gray-600 mb-4">Explore our comprehensive guides and tutorials</p>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg capitalize ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="grid gap-6">
          {filteredArticles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-green-800">{article.title}</h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {article.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{article.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {article.helpful} found this helpful
                  </span>
                  <span className="flex items-center">
                    <Book className="h-4 w-4 mr-1" />
                    {article.views} views
                  </span>
                </div>
                <button className="flex items-center text-green-600 hover:text-green-700">
                  Read more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              <button className="mt-4 flex items-center text-gray-500 hover:text-green-600">
                <Bookmark className="h-4 w-4 mr-1" />
                Save for later
              </button>
            </div>
          ))}
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;