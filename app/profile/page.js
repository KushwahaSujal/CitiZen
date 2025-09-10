"use client"
import { useState } from 'react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)

  const userStats = {
    reportsSubmitted: 27,
    issuesResolved: 19,
    communityRank: 'Gold Contributor',
    totalUpvotes: 156,
    streakDays: 12,
    badgesEarned: 8
  }

  const recentReports = [
    {
      id: 1,
      title: "Broken Streetlight on Oak Ave",
      status: "resolved",
      date: "2024-03-20",
      upvotes: 23,
      category: "Public Safety"
    },
    {
      id: 2,
      title: "Pothole on Main Street",
      status: "in-progress",
      date: "2024-03-18",
      upvotes: 15,
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "Graffiti in Central Park",
      status: "pending",
      date: "2024-03-15",
      upvotes: 8,
      category: "Parks"
    }
  ]

  const achievements = [
    { name: "First Report", icon: "🎯", earned: true, description: "Submitted your first civic issue" },
    { name: "Community Hero", icon: "🦸", earned: true, description: "Helped resolve 10+ issues" },
    { name: "Streak Master", icon: "🔥", earned: true, description: "Active for 7 days straight" },
    { name: "Photo Pro", icon: "📸", earned: true, description: "Added photos to 5+ reports" },
    { name: "Vote Champion", icon: "👑", earned: false, description: "Received 100+ upvotes" },
    { name: "Night Owl", icon: "🦉", earned: false, description: "Report submitted after midnight" }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200'
      case 'in-progress': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'pending': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      
      {/* Hero Profile Header */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/10 rounded-full blur-xl animate-pulse"></div>
        
        <div className="relative px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              
              {/* Profile Avatar & Basic Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full border-4 border-white/30 flex items-center justify-center mb-4">
                    <span className="text-6xl">👤</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                  Alex Johnson
                </h1>
                <p className="text-xl text-white/90 mb-4">
                  🏆 {userStats.communityRank}
                </p>
                
                <div className="flex items-center justify-center lg:justify-start gap-4 text-white/80">
                  <div className="flex items-center gap-1">
                    <span>📍</span>
                    <span>Downtown District</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span>Joined March 2024</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="flex-grow">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Reports', value: userStats.reportsSubmitted, icon: '📝', color: 'from-blue-400 to-blue-500' },
                    { label: 'Resolved', value: userStats.issuesResolved, icon: '✅', color: 'from-green-400 to-green-500' },
                    { label: 'Upvotes', value: userStats.totalUpvotes, icon: '👍', color: 'from-purple-400 to-purple-500' },
                    { label: 'Streak', value: `${userStats.streakDays}d`, icon: '🔥', color: 'from-orange-400 to-orange-500' },
                    { label: 'Badges', value: userStats.badgesEarned, icon: '🏆', color: 'from-yellow-400 to-yellow-500' },
                    { label: 'Impact', value: '92%', icon: '⚡', color: 'from-pink-400 to-pink-500' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-2`}>
                        <span className="text-white text-sm">{stat.icon}</span>
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'reports', label: 'My Reports', icon: '📝' },
              { id: 'achievements', label: 'Achievements', icon: '🏆' },
              { id: 'settings', label: 'Settings', icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 py-4 font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50'
                    : 'text-gray-600 border-transparent hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Activity Summary */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span>📈</span> Recent Activity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-3xl font-bold">{userStats.reportsSubmitted}</div>
                    <div className="text-white/90">Total Reports</div>
                    <div className="text-sm text-white/70 mt-1">+3 this week</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-3xl font-bold">{userStats.issuesResolved}</div>
                    <div className="text-white/90">Issues Helped Resolve</div>
                    <div className="text-sm text-white/70 mt-1">70% success rate</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-3xl font-bold">{userStats.streakDays}</div>
                    <div className="text-white/90">Day Streak</div>
                    <div className="text-sm text-white/70 mt-1">Keep it up! 🔥</div>
                  </div>
                </div>
              </div>

              {/* Recent Reports & Impact */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Recent Reports */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-400 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>📋</span> Recent Reports
                  </h3>
                  <div className="space-y-4">
                    {recentReports.slice(0, 3).map((report) => (
                      <div key={report.id} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{report.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(report.status)}`}>
                            {report.status}
                          </span>
                        </div>
                        <div className="text-sm text-white/80 flex items-center justify-between">
                          <span>{report.category} • {report.date}</span>
                          <span>👍 {report.upvotes}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-3 bg-white/20 backdrop-blur-sm rounded-2xl font-semibold hover:bg-white/30 transition-all">
                    View All Reports →
                  </button>
                </div>

                {/* Community Impact */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-400 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>🌟</span> Community Impact
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span>Neighborhood Improvement</span>
                        <span className="font-bold">92%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span>Response Rate</span>
                        <span className="font-bold">87%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">Top 5%</div>
                      <div className="text-white/90">Most Active Contributors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* My Reports Tab */}
          {activeTab === 'reports' && (
            <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>📝</span> My Reports
              </h2>
              <div className="grid gap-6">
                {recentReports.map((report) => (
                  <div key={report.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{report.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(report.status)}`}>
                        {report.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <span>🏷️</span>
                          {report.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>📅</span>
                          {report.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-blue-600 font-semibold">
                          <span>👍</span>
                          {report.upvotes}
                        </span>
                        <button className="text-gray-400 hover:text-blue-500 transition-colors">
                          <span className="text-lg">➡️</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>🏆</span> Achievements & Badges
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                    achievement.earned 
                      ? 'bg-white shadow-lg' 
                      : 'bg-white/20 backdrop-blur-sm'
                  }`}>
                    <div className={`text-4xl mb-3 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${
                      achievement.earned ? 'text-gray-900' : 'text-white/90'
                    }`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${
                      achievement.earned ? 'text-gray-600' : 'text-white/70'
                    }`}>
                      {achievement.description}
                    </p>
                    {achievement.earned && (
                      <div className="mt-3 flex items-center gap-1 text-green-600 font-semibold">
                        <span>✓</span>
                        <span className="text-sm">Earned</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>⚙️</span> Profile Settings
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Personal Information */}
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>👤</span> Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="Alex Johnson"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        defaultValue="alex.johnson@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0"
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input 
                        type="text" 
                        defaultValue="Downtown District"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0"
                        disabled={!isEditing}
                      />
                    </div>
                    <button 
                      onClick={() => setIsEditing(!isEditing)}
                      className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
                    >
                      {isEditing ? '💾 Save Changes' : '✏️ Edit Profile'}
                    </button>
                  </div>
                </div>

                {/* Notification Preferences */}
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🔔</span> Notifications
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Email notifications for report updates',
                      'Push notifications for new community issues',
                      'Weekly community impact summary',
                      'Achievement and badge notifications'
                    ].map((setting, index) => (
                      <label key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
                        <span className="text-gray-700">{setting}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Keep Making a Difference! 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Your civic engagement is making our community stronger every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/report"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              📝 Submit New Report
            </a>
            <a
              href="/issues"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              🔍 Browse Issues
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
