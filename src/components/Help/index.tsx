"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('courses');

  const categories = {
    courses: [
      {
        title: 'Value Added Courses',
        duration: '15-45 hours',
        items: [
          'IOT Fundamentals and Development',
          'PCB Designing and fabrication',
          'Drone technology using image processing',
          'Blynk mobile app development',
          'Electric vehicle advancements',
          'Smart Home with sensor modules',
          'RFID & NFC communication'
        ]
      },
      {
        title: 'Additional Skills',
        duration: 'Flexible',
        items: [
          'Fault analysis in home appliances',
          'Mobile and Laptop repair from basic to chip level'
        ]
      }
    ],
    workshops: [
      {
        title: 'One Day Workshops',
        items: [
          'Basic Component testing',
          'Soldering training with circuit debugging',
          'Series and parallel connection',
          'Cable and device installation',
          'Electrical safety training',
          'Blynk Mobile app basics',
          'Cloud computing intro',
          'IOT troubleshooting',
          'Tools and measurements'
        ]
      },
      {
        title: 'Two Days Workshops',
        items: [
          'Arduino and Microcontrollers',
          'IOT sensors and Algorithm testing',
          'LED projects with sensors',
          'PIR Tracker robot',
          'DIY Smart Home modules',
          'Robotics and automation',
          'Blynk projects',
          'Cloud and IOT prototypes',
          'RFID Integration'
        ]
      }
    ],
    projects: [
      {
        title: 'Final Year Projects',
        items: [
          'Step by step prototype development',
          'Component selection guidance',
          'Quality testing and evaluation',
          'Working model development',
          'Paper/journal publication help',
          'Industry internship opportunities',
          'R&D support for selected projects'
        ]
      }
    ]
  };

  const filterItems = (items) => {
    return items.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">TechKnots Academy Help Center</h1>
        <p className="text-gray-600 mb-6">Find resources and information about our training programs</p>
        
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for topics..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <nav className="flex space-x-4 bg-gray-100 p-1 rounded-lg">
          {Object.keys(categories).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories[activeTab].map((category, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            {category.duration && (
              <p className="text-sm text-gray-500 mb-4">Duration: {category.duration}</p>
            )}
            <ul className="space-y-2">
              {filterItems(category.items).map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Need Additional Help?</h2>
        <p className="text-gray-600">
          Contact our support team for personalized assistance
          <br />
          Email: support@techknots.com
          <br />
          Or visit our training center for hands-on guidance
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;