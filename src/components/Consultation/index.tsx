"use client"

import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, IdCard, Brain, Target, Mail, Phone, 
  Calendar, ArrowRight, Check, X, Star, Users, 
  Building, Clock, ChevronRight, MessageSquare 
} from 'lucide-react';

const Notification = ({ message, type, onClose }) => (
  <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg transition-all transform animate-slide-left
    ${type === 'success' ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
    <div className="flex items-center">
      {type === 'success' ? (
        <Check className="h-5 w-5 text-green-500 mr-3" />
      ) : (
        <X className="h-5 w-5 text-red-500 mr-3" />
      )}
      <p className={type === 'success' ? 'text-green-700' : 'text-red-700'}>{message}</p>
      <button onClick={onClose} className="ml-4">
        <X className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  </div>
);

const Consultation = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [notification, setNotification] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const consultingServices = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Project Development",
      description: "Expert guidance in developing ideas into working prototypes with industrial exposure and component selection.",
      features: ["Prototype Development", "Component Selection", "Industrial Standards", "Design Reviews"]
    },
    {
      icon: <IdCard className="h-8 w-8" />,
      title: "Technical Consultation",
      description: "Specialized consultation for hardware implementation, IOT integration, and system architecture design.",
      features: ["Hardware Design", "IoT Integration", "System Architecture", "Performance Optimization"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "R&D Support",
      description: "Advanced research and development support for converting prototypes into industry-grade products.",
      features: ["Market Analysis", "Product Development", "Testing & Validation", "Production Support"]
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "CTO, TechCorp",
      content: "The consultation services provided were invaluable to our project success.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "Exceptional technical expertise and professional guidance throughout the process.",
      rating: 5
    },
    {
      name: "Mike Brown",
      role: "Startup Founder",
      content: "Their R&D support helped us bring our product to market faster than expected.",
      rating: 5
    }
  ];

  const statistics = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Consultants" },
    { number: "10+", label: "Years Experience" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setNotification({
        type: 'error',
        message: 'Please fill in all required fields'
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Simulate form submission
    setTimeout(() => {
      setNotification({
        type: 'success',
        message: 'Consultation request submitted successfully!'
      });
      setIsFormOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto py-24 px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform">
              Technical Excellence
              <span className="text-green-600 block">Delivered</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Transform your ideas into reality with our expert technical consultation services
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors animate-bounce"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-105 transition-transform"
              >
                <div className="text-4xl font-bold text-green-600 mb-2 animate-number">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {consultingServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 cursor-pointer group"
              onClick={() => {
                setSelectedService(service);
                setIsFormOpen(true);
              }}
            >
              <div className="mb-4 text-green-600 transform group-hover:rotate-12 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600">A systematic approach to delivering excellence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Initial Assessment",
              "Solution Design",
              "Implementation",
              "Support & Maintenance"
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step}</h3>
                <ArrowRight className={`h-6 w-6 text-green-500 hidden md:block ${index === 3 ? 'invisible' : ''} group-hover:translate-x-2 transition-transform`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Client Testimonials</h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg italic">{testimonial.content}</p>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does a typical consultation take?",
                a: "Initial consultations typically last 1-2 hours, with project timelines varying based on scope and complexity."
              },
              {
                q: "What industries do you serve?",
                a: "We serve a wide range of industries including technology, manufacturing, healthcare, and more."
              },
              {
                q: "Do you offer remote consultations?",
                a: "Yes, we offer both remote and in-person consultations to accommodate your needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help you achieve your goals</p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Consultation Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Schedule Consultation</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
              >
                <span>Submit Request</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}

 
      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes number {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.3s ease-out;
        }

        .animate-number {
          animation: number 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Consultation;