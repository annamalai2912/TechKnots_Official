"use client"

import React, { useState } from 'react';
import { 
  BookOpen, Clock, Award, FileText, Star, Book, 
  Check, Target, Users, ArrowRight, ChevronDown,
  Zap, Brain, Trophy, Rocket
} from 'lucide-react';

const ContentDevelopment = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const courseTypes = [
    {
      title: "15 Hours - 1 Credit",
      features: [
        "Comprehensive course syllabus",
        "Guided mini project",
        "Project validation",
        "Course completion certification"
      ],
      price: "$299",
      startDate: "Flexible",
      difficulty: "Beginner"
    },
    {
      title: "30 Hours - 2 Credits",
      features: [
        "Extended course syllabus",
        "Advanced mini project",
        "Paper presentation training",
        "Competition opportunity",
        "Special recognition certificate"
      ],
      price: "$499",
      startDate: "Monthly",
      difficulty: "Intermediate"
    },
    {
      title: "45 Hours - 3 Credits",
      features: [
        "Advanced level syllabus",
        "Complex project development",
        "Project expo participation",
        "Educational competition",
        "Comprehensive certification"
      ],
      price: "$699",
      startDate: "Quarterly",
      difficulty: "Advanced"
    }
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Students Trained" },
    { icon: Trophy, value: "95%", label: "Success Rate" },
    { icon: Brain, value: "50+", label: "Expert Mentors" },
    { icon: Rocket, value: "100+", label: "Live Projects" }
  ];

  const renderCourseModal = () => {
    if (!selectedCourse) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative">
          <button 
            onClick={() => setSelectedCourse(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
          <h3 className="text-2xl font-bold mb-4">{courseTypes[selectedCourse].title}</h3>
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('curriculum')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'curriculum' ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}
            >
              Curriculum
            </button>
          </div>
          <div className="space-y-4">
            {activeTab === 'overview' ? (
              <>
                <p className="text-gray-600">Price: {courseTypes[selectedCourse].price}</p>
                <p className="text-gray-600">Start Date: {courseTypes[selectedCourse].startDate}</p>
                <p className="text-gray-600">Difficulty: {courseTypes[selectedCourse].difficulty}</p>
                <ul className="space-y-2">
                  {courseTypes[selectedCourse].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Week 1-2</h4>
                  <p className="text-gray-600">Fundamentals and Core Concepts</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Week 3-4</h4>
                  <p className="text-gray-600">Practical Applications</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Week 5-6</h4>
                  <p className="text-gray-600">Project Development</p>
                </div>
              </div>
            )}
            <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mt-6">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Master the Future of Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accelerate your career with our cutting-edge technical courses and hands-on learning experience
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Course Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {courseTypes.map((course, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedCourse(index)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
                </div>
                <ul className="space-y-3 mb-6">
                  {course.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <Star className="h-4 w-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Learning Path</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Foundation</h3>
                    <p className="text-gray-600">Master the basics</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Advanced Concepts</h3>
                    <p className="text-gray-600">Deep dive into technology</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Project Development</h3>
                    <p className="text-gray-600">Build real-world applications</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Industry Focus</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold mb-2">IoT & Automation</h3>
                  <p className="text-gray-600">Smart devices and systems</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Robotics</h3>
                  <p className="text-gray-600">Advanced control systems</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold mb-2">AI & ML</h3>
                  <p className="text-gray-600">Intelligent solutions</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Cloud Computing</h3>
                  <p className="text-gray-600">Scalable architectures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {renderCourseModal()}
    </div>
  );
};

export default ContentDevelopment;