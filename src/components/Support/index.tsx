"use client"
import React, { useState } from 'react';
import { Clock, Book, Users, Laptop, Mail, CheckCircle } from 'lucide-react';

const TechnicalSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    courseType: '',
    issue: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('form');

  const supportCategories = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Course Support",
      description: "Get help with course materials and assignments"
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Workshop Assistance",
      description: "Technical support for workshop activities"
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Project Help",
      description: "Guidance for final year and mini projects"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "General Inquiries",
      description: "Questions about programs and registration"
    }
  ];

  const departments = [
    'EEE', 'ECE', 'EIE', 'IOT', 'CSE', 'IT', 'AI/DS', 'Robotics', 
    'Mechanical', 'Mechatronics'
  ];

  const courseTypes = [
    'Value Added Course',
    'One Day Workshop',
    'Two Days Workshop',
    'Final Year Project',
    'Additional Skill Development'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        department: '',
        courseType: '',
        issue: '',
        description: ''
      });
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Technical Support</h1>
        <p className="text-gray-600">Get assistance with your courses and technical issues</p>
      </div>

      {/* Support Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {supportCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow text-center"
          >
            <div className="flex justify-center mb-4 text-blue-500">
              {category.icon}
            </div>
            <h3 className="font-semibold mb-2">{category.title}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Support Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border p-6">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support Request Submitted!</h3>
            <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                name="department"
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.department}
                onChange={handleInputChange}
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Type
              </label>
              <select
                name="courseType"
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.courseType}
                onChange={handleInputChange}
              >
                <option value="">Select Course Type</option>
                {courseTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issue Title
              </label>
              <input
                type="text"
                name="issue"
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.issue}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                required
                rows={4}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit Support Request
            </button>
          </form>
        )}
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <Mail className="h-5 w-5" />
          <span>For urgent inquiries: support@techknots.com</span>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupport;