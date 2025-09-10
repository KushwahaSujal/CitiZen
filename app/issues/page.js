"use client"
import { useState } from 'react'

export default function IssuesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const filters = [
    { id: 'all', label: 'All Issues', count: 247, color: 'from-blue-500 to-blue-600' },
    { id: 'urgent', label: 'Urgent', count: 12, color: 'from-red-500 to-red-600' },
    { id: 'in-progress', label: 'In Progress', count: 45, color: 'from-orange-500 to-orange-600' },
    { id: 'resolved', label: 'Resolved', count: 156, color: 'from-green-500 to-green-600' },
    { id: 'pending', label: 'Pending', count: 34, color: 'from-purple-500 to-purple-600' }
  ]

  const sampleIssues = [
    {
      id: 1,
      title: "Pothole on Main Street",
      description: "Large pothole causing traffic issues near the intersection",
      category: "Roads & Infrastructure",
      status: "in-progress",
      priority: "high",
      location: "Main St & 5th Ave",
      reportedDate: "2024-03-15",
      upvotes: 23,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      reporter: "Sarah M.",
      statusColor: "orange"
    },
    {
      id: 2,
      title: "Broken Streetlight",
      description: "Streetlight has been out for weeks, creating safety concerns",
      category: "Public Safety",
      status: "urgent",
      priority: "high",
      location: "Oak Street",
      reportedDate: "2024-03-20",
      upvotes: 18,
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400",
      reporter: "Mike R.",
      statusColor: "red"
    },
    {
      id: 3,
      title: "Park Bench Vandalism",
      description: "Multiple benches have been damaged with graffiti",
      category: "Parks & Recreation",
      status: "resolved",
      priority: "medium",
      location: "Central Park",
      reportedDate: "2024-03-10",
      upvotes: 31,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
      reporter: "Lisa K.",
      statusColor: "green"
    },
    {
      id: 4,
      title: "Overflowing Trash Bins",
      description: "Garbage bins in downtown area are consistently overflowing",
      category: "Waste Management",
      status: "pending",
      priority: "medium",
      location: "Downtown District",
      reportedDate: "2024-03-22",
      upvotes: 15,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      reporter: "John D.",
      statusColor: "purple"
    },
    {
      id: 5,
      title: "Damaged Sidewalk",
      description: "Cracked and uneven sidewalk posing tripping hazard",
      category: "Pedestrian Safety",
      status: "in-progress",
      priority: "medium",
      location: "Elm Street",
      reportedDate: "2024-03-18",
      upvotes: 8,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
      reporter: "Emma W.",
      statusColor: "orange"
    },
    {
      id: 6,
      title: "Noise Complaint",
      description: "Construction noise exceeding permitted hours",
      category: "Noise Control",
      status: "resolved",
      priority: "low",
      location: "Residential Area",
      reportedDate: "2024-03-12",
      upvotes: 42,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400",
      reporter: "Robert L.",
      statusColor: "green"
    }
  ]

  const getStatusIcon = (status) => {
    switch(status) {
      case 'urgent': return '🚨'
      case 'in-progress': return '⚡'
      case 'resolved': return '✅'
      case 'pending': return '⏳'
      default: return '📋'
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-pink-300/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-purple-300/30 rounded-full blur-md animate-pulse"></div>
        
        <div className="relative px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🗺️</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white">
                Community Issues
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Track progress, discover patterns, and see real change happening in your neighborhood
            </p>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Active Issues', value: '91', icon: '🔥' },
                { label: 'Resolved Today', value: '12', icon: '✨' },
                { label: 'Community Votes', value: '1.2K', icon: '👥' },
                { label: 'Response Time', value: '2.3h', icon: '⚡' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-400 text-xl">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search issues by location, category, or description..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? `bg-gradient-to-r ${filter.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                }`}
              >
                <span className="relative z-10">{filter.label}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                  activeFilter === filter.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white text-gray-600'
                }`}>
                  {filter.count}
                </span>
                {activeFilter === filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                )}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-2xl p-1 flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🔳 Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  viewMode === 'list' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                📝 List View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Grid/List */}
      <section className="px-6 py-12 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {sampleIssues.map((issue, index) => (
                <div
                  key={issue.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold text-white bg-${issue.statusColor}-500 backdrop-blur-sm`}>
                      {getStatusIcon(issue.status)} {issue.status.replace('-', ' ').toUpperCase()}
                    </div>

                    {/* Priority Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(issue.priority)}`}>
                      {issue.priority.toUpperCase()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {issue.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {issue.description}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>📍</span>
                        <span>{issue.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>🏷️</span>
                        <span className="font-medium">{issue.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>👤</span>
                        <span>Reported by {issue.reporter}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors font-medium">
                        <span>👍</span>
                        <span>{issue.upvotes}</span>
                      </button>
                      
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all">
                          <span className="text-lg">💬</span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-all">
                          <span className="text-lg">📤</span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-xl transition-all">
                          <span className="text-lg">⭐</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {sampleIssues.map((issue, index) => (
                <div
                  key={issue.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-center p-6">
                    {/* Image */}
                    <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden mr-6">
                      <img
                        src={issue.image}
                        alt={issue.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {issue.title}
                        </h3>
                        <div className="flex gap-2 ml-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(issue.priority)}`}>
                            {issue.priority}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-${issue.statusColor}-500`}>
                            {getStatusIcon(issue.status)} {issue.status.replace('-', ' ')}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {issue.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>📍 {issue.location}</span>
                          <span>🏷️ {issue.category}</span>
                          <span>👤 {issue.reporter}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                            <span>👍</span>
                            <span className="font-medium">{issue.upvotes}</span>
                          </button>
                          <button className="text-gray-400 hover:text-blue-500 transition-colors">
                            <span className="text-lg">➡️</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="group-hover:animate-bounce inline-block mr-2">🔄</span>
              Load More Issues
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See an Issue? Report It Now! 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of citizens making their communities better, one report at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/report"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              📝 Report New Issue
            </a>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300">
              📊 View Analytics
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
