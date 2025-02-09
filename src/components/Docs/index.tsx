"use client"
import React, { useState } from 'react';
import { Book, Search, ChevronRight } from 'lucide-react';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docs = {
    'Value Added Courses': {
      '1 Credit Course': [
        'Course duration: 15+ hours',
        'Mini project requirement',
        'Project validation process',
        'Certification details'
      ],
      '2 Credit Course': [
        'Course duration: 30+ hours',
        'Paper presentation requirements',
        'Competition guidelines',
        'Special recognition certificates'
      ],
      '3 Credit Course': [
        'Course duration: 45+ hours',
        'Advanced project requirements',
        'Project expo participation',
        'Competition and evaluation'
      ]
    },
    'Workshops': {
      'One Day Workshop': [
        'Component testing',
        'Soldering techniques',
        'Circuit debugging',
        'Safety protocols'
      ],
      'Two Days Workshop': [
        'Day 1: Basic training',
        'Day 2: Mini project',
        'Hands-on guidance',
        'Project evaluation'
      ]
    },
    'Project Training': {
      'Final Year Projects': [
        'Idea development process',
        'Component selection guide',
        'Testing procedures',
        'Publication assistance'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-bold text-green-800">Technical Documentation</h1>
          </div>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Documentation Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(docs).map(([category, sections]) => (
            <div key={category} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">{category}</h2>
              {Object.entries(sections).map(([section, items]) => (
                <div key={section} className="mb-6">
                  <h3 className="text-lg font-medium text-green-700 mb-2">{section}</h3>
                  <ul className="space-y-2">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer">
                        <ChevronRight className="h-4 w-4 mr-2 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#" className="p-4 border border-green-200 rounded-lg hover:bg-green-50">
              Course Guidelines
            </a>
            <a href="#" className="p-4 border border-green-200 rounded-lg hover:bg-green-50">
              Project Templates
            </a>
            <a href="#" className="p-4 border border-green-200 rounded-lg hover:bg-green-50">
              Certification Process
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;