"use client"
import React, { useState } from 'react';
import { 
  Home, Menu, Calendar, Book, Award, BarChart2, GitBranch, 
  Search, Settings, LogOut, ChevronDown, Bell, Cpu, Database,
  Brain, Cloud, Activity, Users, Code, Radar
} from 'lucide-react';

// Mock data for a tech-focused LMS
const techCourses = [
  {
    id: 1,
    title: 'Advanced IoT Sensor Networks',
    category: 'IoT',
    progress: 75,
    instructor: 'Dr. Sarah Chen',
    duration: '8 weeks',
    modules: [
      { id: 1, title: 'Sensor Types & Architecture', completed: true },
      { id: 2, title: 'Network Protocols', completed: true },
      { id: 3, title: 'Data Collection & Processing', completed: false },
      { id: 4, title: 'Edge Computing Implementation', completed: false }
    ]
  },
  {
    id: 2,
    title: 'Machine Learning for Predictive Analytics',
    category: 'ML',
    progress: 45,
    instructor: 'Prof. James Wilson',
    duration: '10 weeks',
    modules: [
      { id: 1, title: 'Statistical Learning Foundations', completed: true },
      { id: 2, title: 'Supervised Learning Algorithms', completed: false },
      { id: 3, title: 'Model Optimization', completed: false },
      { id: 4, title: 'Production Deployment', completed: false }
    ]
  },
  {
    id: 3,
    title: 'Deep Learning with PyTorch',
    category: 'AI',
    progress: 90,
    instructor: 'Dr. Michael Chang',
    duration: '12 weeks',
    modules: [
      { id: 1, title: 'Neural Network Basics', completed: true },
      { id: 2, title: 'Convolutional Networks', completed: true },
      { id: 3, title: 'Recurrent Networks', completed: true },
      { id: 4, title: 'Advanced Architectures', completed: false }
    ]
  }
];

const achievements = [
  { id: 1, name: 'IoT Pioneer', icon: <Cpu className="w-8 h-8 text-emerald-500" />, points: 500, unlocked: true },
  { id: 2, name: 'ML Master', icon: <Brain className="w-8 h-8 text-emerald-500" />, points: 750, unlocked: true },
  { id: 3, name: 'Data Wizard', icon: <Database className="w-8 h-8 text-emerald-500" />, points: 1000, unlocked: false },
  { id: 4, name: 'AI Innovator', icon: < Radar className="w-8 h-8 text-emerald-500" />, points: 1200, unlocked: false },
];

const TechKnotsLMS = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New IoT course available', time: '2h ago', read: false },
    { id: 2, text: 'Assignment deadline approaching', time: '5h ago', read: false },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Learning Progress */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-emerald-500" />
          Learning Progress
        </h3>
        <div className="space-y-4">
          {techCourses.map(course => (
            <div key={course.id} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{course.title}</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-500 rounded-full h-2 transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-emerald-500" />
          Recent Achievements
        </h3>
        <div className="space-y-4">
          {achievements.filter(a => a.unlocked).map(achievement => (
            <div key={achievement.id} className="flex items-center space-x-3">
              {achievement.icon}
              <div>
                <div className="font-medium">{achievement.name}</div>
                <div className="text-sm text-gray-500">{achievement.points} points</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-emerald-500" />
          Upcoming Sessions
        </h3>
        <div className="space-y-4">
          <div className="p-3 border rounded-lg">
            <div className="font-medium">IoT Security Workshop</div>
            <div className="text-sm text-gray-500">Tomorrow, 2:00 PM</div>
          </div>
          <div className="p-3 border rounded-lg">
            <div className="font-medium">ML Model Deployment</div>
            <div className="text-sm text-gray-500">Friday, 11:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourseDetail = () => {
    if (!selectedCourse) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{selectedCourse.title}</h2>
            <p className="text-gray-600">Instructor: {selectedCourse.instructor}</p>
            <p className="text-gray-600">Duration: {selectedCourse.duration}</p>
          </div>
          <button 
            onClick={() => setSelectedCourse(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Progress</span>
            <span>{selectedCourse.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-500 rounded-full h-2 transition-all duration-300"
              style={{ width: `${selectedCourse.progress}%` }}
            ></div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Course Modules</h3>
          <div className="space-y-3">
            {selectedCourse.modules.map(module => (
              <div 
                key={module.id}
                className={`p-4 rounded-lg border ${
                  module.completed ? 'bg-emerald-50 border-emerald-200' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={module.completed ? 'text-emerald-700' : ''}>
                    {module.title}
                  </span>
                  {module.completed && (
                    <span className="text-emerald-500">✓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCourses.map(course => (
          <div 
            key={course.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedCourse(course)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  {course.category}
                </span>
                <span className="text-gray-500">{course.progress}%</span>
              </div>
              <h3 className="font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Instructor: {course.instructor}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-500 rounded-full h-2 transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 bg-white shadow-lg transform transition-transform duration-300 z-30
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="w-64 p-6 h-full flex flex-col">
          <div className="flex items-center mb-8">
            <Cpu className="h-8 w-8 text-emerald-500 mr-2" />
            <span className="text-xl font-bold">Welcome..</span>
          </div>

          <nav className="flex-1 space-y-2">
            <button
              onClick={() => setCurrentSection('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                ${currentSection === 'dashboard' 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'hover:bg-gray-50'
                }`}
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setCurrentSection('courses')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                ${currentSection === 'courses' 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'hover:bg-gray-50'
                }`}
            >
              <Book className="w-5 h-5" />
              <span>My Courses</span>
            </button>

            <button
              onClick={() => setCurrentSection('achievements')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                ${currentSection === 'achievements' 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'hover:bg-gray-50'
                }`}
            >
              <Award className="w-5 h-5" />
              <span>Achievements</span>
            </button>

            <button
              onClick={() => setCurrentSection('calendar')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                ${currentSection === 'calendar' 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'hover:bg-gray-50'
                }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Calendar</span>
            </button>
          </nav>

          <div className="pt-6 border-t">
            <button
              onClick={() => setCurrentSection('settings')}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-red-600">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>

              <div className="flex-1 max-w-xs ml-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                </div>

              {/* Notifications */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 rounded-lg hover:bg-gray-50"
                  >
                    <Bell className="h-6 w-6 text-gray-600" />
                    {notifications.some(n => !n.read) && (
                      <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                    )}
                  </button>

                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
                      <div className="p-4 border-b">
                        <h3 className="font-semibold">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map(notification => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                              !notification.read ? 'bg-emerald-50' : ''
                            }`}
                            onClick={() => markNotificationAsRead(notification.id)}
                          >
                            <p className="text-sm">{notification.text}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        <button className="text-sm text-emerald-600 hover:text-emerald-700">
                          Mark all as read
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* User Profile */}
                <div className="relative">
                  <button className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                      JD
                    </div>
                    <span className="hidden md:block">John Doe</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {currentSection === 'dashboard' && 'Dashboard'}
              {currentSection === 'courses' && (selectedCourse ? selectedCourse.title : 'My Courses')}
              {currentSection === 'achievements' && 'Achievements'}
              {currentSection === 'calendar' && 'Calendar'}
              {currentSection === 'settings' && 'Settings'}
            </h1>
          </div>

          {/* Dynamic Content */}
          {currentSection === 'dashboard' && renderDashboard()}
          {currentSection === 'courses' && (
            selectedCourse ? renderCourseDetail() : renderCourses()
          )}
          {currentSection === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map(achievement => (
                <div 
                  key={achievement.id}
                  className={`bg-white p-6 rounded-lg shadow-sm ${
                    !achievement.unlocked ? 'opacity-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-center font-semibold mb-2">{achievement.name}</h3>
                  <p className="text-center text-gray-600">{achievement.points} points</p>
                  {!achievement.unlocked && (
                    <div className="mt-4 text-center text-sm text-gray-500">
                      Locked
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {currentSection === 'calendar' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center text-gray-500">
                Calendar integration coming soon...
              </div>
            </div>
          )}
          {currentSection === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="max-w-2xl">
                <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Notifications
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        <span className="ml-2">Course updates</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        <span className="ml-2">Assignment reminders</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        <span className="ml-2">Achievement notifications</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language Preference
                    </label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Zone
                    </label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md">
                      <option>Pacific Time (PT)</option>
                      <option>Eastern Time (ET)</option>
                      <option>UTC</option>
                    </select>
                  </div>
                  <div className="pt-6">
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechKnotsLMS;