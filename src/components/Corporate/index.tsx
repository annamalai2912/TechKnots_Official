"use client"

import React, { useState } from 'react';
import { 
  ArrowRight, BookOpen, Users, CircleEqualIcon, 
  Calendar, Clock, Award, CheckCircle, Target,
  Building, Briefcase, GraduationCap, Star, Phone
} from 'lucide-react';

const CorporateTraining = () => {
  const [activeTab, setActiveTab] = useState('programs');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const trainingPrograms = [
    {
      title: "Value Added Courses",
      icon: BookOpen,
      details: [
        "IOT Fundamentals and Development",
        "PCB Designing and fabrication",
        "Drone technology with image processing",
        "Electric vehicle advancements",
        "Smart Home technologies"
      ],
      duration: "3-6 months",
      format: "Hybrid (Online + Hands-on)",
      nextBatch: "Flexible start dates",
      pricing: "Custom quote based on group size"
    },
    {
      title: "Workshop Programs",
      icon: Users,
      details: [
        "Component testing and debugging",
        "Arduino and Microcontrollers",
        "IOT sensors and Algorithm testing",
        "Robotics and automation projects",
        "Cloud computing integration"
      ],
      duration: "1-2 weeks",
      format: "In-person intensive",
      nextBatch: "Monthly enrollment",
      pricing: "Group discounts available"
    }
  ];

  const stats = [
    { value: "500+", label: "Corporate Partners", icon: Building },
    { value: "10k+", label: "Trained Professionals", icon: Users },
    { value: "95%", label: "Success Rate", icon: Target },
    { value: "50+", label: "Industry Experts", icon: Briefcase }
  ];

  const renderProgramModal = () => {
    if (!selectedProgram) return null;
    const program = trainingPrograms[selectedProgram];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative">
          <button 
            onClick={() => setSelectedProgram(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
          <div className="flex items-center gap-3 mb-6">
            <program.icon className="h-8 w-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-gray-600">{program.duration}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-green-600" />
                <span className="font-semibold">Next Batch</span>
              </div>
              <p className="text-gray-600">{program.nextBatch}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Course Content</h3>
            <ul className="space-y-2">
              {program.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Corporate Training Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empower your workforce with cutting-edge technical skills and practical implementation expertise
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          <button 
            onClick={() => setActiveTab('programs')}
            className={`px-4 py-2 font-medium ${activeTab === 'programs' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`}
          >
            Training Programs
          </button>
          <button 
            onClick={() => setActiveTab('benefits')}
            className={`px-4 py-2 font-medium ${activeTab === 'benefits' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`}
          >
            Benefits
          </button>
        </div>

        {activeTab === 'programs' ? (
          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer"
                onClick={() => setSelectedProgram(index)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <program.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{program.title}</h2>
                </div>
                <ul className="space-y-3 mb-6">
                  {program.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <ArrowRight className="h-4 w-4 text-green-600" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {program.format}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customized Learning</h3>
              <p className="text-gray-600">Tailored programs designed to meet your organization&apos;s specific needs and objectives.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
              <p className="text-gray-600">Certified programs with hands-on experience and real-world project implementation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Learn from industry professionals with extensive practical experience.</p>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to upskill your team?</h2>
          <p className="text-gray-600 mb-6">Get in touch with our training consultants for a customized solution.</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Phone className="h-4 w-4" />
            Contact Us
          </button>
        </div>
      </div>

      {renderProgramModal()}
    </div>
  );
};

export default CorporateTraining;