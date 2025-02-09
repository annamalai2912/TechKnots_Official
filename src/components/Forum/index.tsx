"use client"
import React, { useState } from 'react';
import { MessageSquare, Users, Star, TrendingUp } from 'lucide-react';

const CommunityForum = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const categories = {
    popular: [
      {
        title: "Tips for IOT Project Development",
        author: "TechStudent",
        replies: 24,
        views: 156,
        category: "IOT",
        lastActive: "2 hours ago"
      },
      {
        title: "Troubleshooting Arduino Connections",
        author: "CircuitPro",
        replies: 18,
        views: 132,
        category: "Hardware",
        lastActive: "4 hours ago"
      }
    ],
    recent: [
      {
        title: "Smart Home Project Help Needed",
        author: "HomeLab",
        replies: 5,
        views: 45,
        category: "Projects",
        lastActive: "30 mins ago"
      },
      {
        title: "PCB Design Best Practices",
        author: "BoardMaster",
        replies: 8,
        views: 67,
        category: "Hardware",
        lastActive: "1 hour ago"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-4">TechKnots Community Forum</h1>
          <p className="text-gray-600">Connect with fellow students and share your technical knowledge</p>
        </div>

        {/* Categories */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveCategory('popular')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeCategory === 'popular'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-600 hover:bg-green-50'
            }`}
          >
            <Star className="h-4 w-4 mr-2" />
            Popular
          </button>
          <button
            onClick={() => setActiveCategory('recent')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeCategory === 'recent'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-600 hover:bg-green-50'
            }`}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Recent
          </button>
        </div>

        {/* Forum Posts */}
        <div className="space-y-4">
          {categories[activeCategory].map((post, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-green-800 hover:text-green-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.lastActive}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center space-x-6 mt-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {post.replies} replies
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {post.views} views
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Post Form */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Start a New Discussion</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Discussion title"
                className="w-full p-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              />
            </div>
            <div>
              <textarea
                placeholder="What's on your mind?"
                rows={4}
                className="w-full p-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Post Discussion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;