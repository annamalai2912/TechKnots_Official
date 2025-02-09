"use client"

import React, { useState } from 'react';
import { 
  Settings, Cpu, Cloud, Radar, Home, Car, 
  ArrowRight, Check, ChevronRight, Phone,
  Shield, Zap, Target, Users, BarChart,
  Clock,Table2Icon, Download
} from 'lucide-react';

const CustomSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      icon: Cpu,
      title: "IoT Solutions",
      features: [
        "Smart sensor integration",
        "Real-time monitoring systems",
        "Custom IoT architecture design",
        "Data analytics and visualization",
        "Predictive maintenance systems"
      ],
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN"],
      timeframe: "2-4 months",
      benefits: ["Reduced operational costs", "Improved efficiency", "Real-time insights"]
    },
    {
      icon: Radar,
      title: "Robotics & Automation",
      features: [
        "Custom robotics development",
        "Automation solutions",
        "Process optimization",
        "Industrial robotics integration",
        "Quality control automation"
      ],
      technologies: ["ROS", "PLC", "Computer Vision", "AI/ML"],
      timeframe: "3-6 months",
      benefits: ["Increased productivity", "Enhanced precision", "24/7 operation"]
    },
    {
      icon: Home,
      title: "Smart Home Systems",
      features: [
        "Home automation integration",
        "Security systems",
        "Energy management",
        "Climate control optimization",
        "Voice-controlled systems"
      ],
      technologies: ["Z-Wave", "Zigbee", "Matter", "HomeKit"],
      timeframe: "1-3 months",
      benefits: ["Energy savings", "Enhanced comfort", "Remote control"]
    },
    {
      icon: Car,
      title: "Electric Vehicle Solutions",
      features: [
        "EV system design",
        "Charging infrastructure",
        "Performance optimization",
        "Battery management systems",
        "Charging station networks"
      ],
      technologies: ["CCS", "CHAdeMO", "OCPP", "Smart Grid"],
      timeframe: "4-8 months",
      benefits: ["Sustainable transport", "Cost efficiency", "Future-ready"]
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: Target },
    { value: "98%", label: "Client Satisfaction", icon: Users },
    { value: "40%", label: "Cost Reduction", icon: BarChart },
    { value: "24/7", label: "Support Available", icon: Clock }
  ];

  const renderSolutionModal = () => {
    if (!selectedSolution) return null;
    const solution = solutions[selectedSolution];
    const SolutionIcon = solution.icon;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative">
          <button 
            onClick={() => setSelectedSolution(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <SolutionIcon className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{solution.title}</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {solution.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="h-4 w-4 text-green-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                Typical timeframe: {solution.timeframe}
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Request Consultation
              </button>
            </div>
          </div>
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
              Custom Technical Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative, scalable, and tailored solutions to drive your business forward
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
        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const SolutionIcon = solution.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer"
                onClick={() => setSelectedSolution(index)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <SolutionIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{solution.title}</h2>
                </div>
                <ul className="space-y-3 mb-6">
                  {solution.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <ChevronRight className="h-4 w-4 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{solution.technologies.length} Technologies</span>
                  <span className="text-green-600">Learn More →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Settings className="h-8 w-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Development Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Discovery", description: "Requirements gathering and analysis" },
              { icon: Table2Icon, title: "Design", description: "Solution architecture and planning" },
              { icon: Cpu, title: "Development", description: "Agile implementation with feedback" },
              { icon: Download, title: "Deployment", description: "Testing and production rollout" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-green-100" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable & Secure</h3>
            <p className="text-gray-600">Enterprise-grade solutions with robust security measures.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Development</h3>
            <p className="text-gray-600">Rapid prototyping and agile development methodology.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
            <p className="text-gray-600">Skilled professionals with diverse technical expertise.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to discuss your project?</h2>
          <p className="text-gray-600 mb-6">Get in touch with our technical team for a consultation.</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Phone className="h-4 w-4" />
            Schedule Consultation
          </button>
        </div>
      </div>

      {renderSolutionModal()}
    </div>
  );
};

export default CustomSolutions;