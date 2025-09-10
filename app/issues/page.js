"use client"
import { useState } from 'react'

export default function IssuesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAnalytics, setShowAnalytics] = useState(false)

  const filters = [
    { id: 'all', label: 'All Issues', count: 247, bgColor: 'bg-blue-50', textColor: 'text-blue-600', borderColor: 'border-blue-200' },
    { id: 'urgent', label: 'Urgent', count: 12, bgColor: 'bg-red-50', textColor: 'text-red-600', borderColor: 'border-red-200' },
    { id: 'in-progress', label: 'In Progress', count: 45, bgColor: 'bg-orange-50', textColor: 'text-orange-600', borderColor: 'border-orange-200' },
    { id: 'resolved', label: 'Resolved', count: 156, bgColor: 'bg-green-50', textColor: 'text-green-600', borderColor: 'border-green-200' },
    { id: 'pending', label: 'Pending', count: 34, bgColor: 'bg-purple-50', textColor: 'text-purple-600', borderColor: 'border-purple-200' }
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

  const handleUpvote = (issueId) => {
    alert(`Upvoted issue #${issueId}! Thank you for your support.`)
  }

  const handleViewAnalytics = () => {
    setShowAnalytics(!showAnalytics)
  }

  const filteredIssues = sampleIssues.filter(issue => {
    const matchesFilter = activeFilter === 'all' || issue.status === activeFilter
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Mobile-first responsive layout */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
          
          {/* Main Content - Full width on mobile, main content on desktop */}
          <div className="w-full lg:flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-teal-400 mb-4">
                Community Issues
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Track progress, discover patterns, and see real change happening in your neighborhood. Your voice matters in building a better community.
              </p>
            </div>

            {/* Search and Filters Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8 mb-8">
              {/* Search Bar */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Search Issues</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by location, category, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent text-sm pr-10"
                  />
                  <span className="absolute right-3 top-3 text-gray-400">🔍</span>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Filter by Status</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`p-3 rounded-xl border-2 transition-all text-center ${
                        activeFilter === filter.id 
                          ? `${filter.bgColor} ${filter.borderColor} ${filter.textColor} shadow-md` 
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="font-semibold text-xs sm:text-sm">{filter.label}</div>
                      <div className={`text-lg font-bold ${activeFilter === filter.id ? filter.textColor : 'text-gray-600'}`}>
                        {filter.count}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-between items-center">
                <div className="flex bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    🔳 Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      viewMode === 'list' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    📝 List
                  </button>
                </div>
                
                <button 
                  onClick={handleViewAnalytics}
                  className="px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl text-sky-700 font-medium text-sm hover:shadow-md transition-all"
                >
                  📊 {showAnalytics ? 'Hide' : 'View'} Analytics
                </button>
              </div>
            </div>

            {/* Analytics Panel */}
            {showAnalytics && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">📊 Community Analytics</h3>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl border border-blue-200 text-center">
                    <div className="text-2xl font-bold text-blue-600">247</div>
                    <div className="text-xs text-blue-700">Total Issues</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 text-center">
                    <div className="text-2xl font-bold text-green-600">63%</div>
                    <div className="text-xs text-green-700">Resolution Rate</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 text-center">
                    <div className="text-2xl font-bold text-orange-600">2.3</div>
                    <div className="text-xs text-orange-700">Avg Response (Days)</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 text-center">
                    <div className="text-2xl font-bold text-purple-600">1.2K</div>
                    <div className="text-xs text-purple-700">Community Votes</div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">Want detailed analytics? Export your community data.</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-sky-400 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm">
                    📊 Export Full Report
                  </button>
                </div>
              </div>
            )}

            {/* Issues Display */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8">
              {/* Enhanced Header with Stats */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-teal-400">
                      {filteredIssues.length} Issues Found
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Showing results for "{activeFilter === 'all' ? 'all categories' : activeFilter.replace('-', ' ')}"
                      {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="flex gap-3">
                    <div className="text-center p-2 bg-red-50 rounded-lg border border-red-200">
                      <div className="text-sm font-bold text-red-600">
                        {filteredIssues.filter(i => i.status === 'urgent').length}
                      </div>
                      <div className="text-xs text-red-700">Urgent</div>
                    </div>
                    <div className="text-center p-2 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-sm font-bold text-orange-600">
                        {filteredIssues.filter(i => i.status === 'in-progress').length}
                      </div>
                      <div className="text-xs text-orange-700">Active</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-sm font-bold text-green-600">
                        {filteredIssues.filter(i => i.status === 'resolved').length}
                      </div>
                      <div className="text-xs text-green-700">Resolved</div>
                    </div>
                  </div>
                </div>
                
                {/* Sorting Options */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-gray-600">Sort by:</span>
                  <button className="px-3 py-1 bg-sky-50 text-sky-600 rounded-lg text-sm font-medium border border-sky-200 hover:bg-sky-100 transition-colors">
                    📅 Newest First
                  </button>
                  <button className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
                    👍 Most Voted
                  </button>
                  <button className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
                    🚨 Priority
                  </button>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredIssues.map((issue, index) => (
                    <div
                      key={issue.id}
                      className="group relative bg-gradient-to-br from-white via-gray-50/30 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:border-sky-200 transition-all duration-500 transform hover:-translate-y-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Priority Indicator */}
                      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                        issue.priority === 'high' ? 'bg-red-400' :
                        issue.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                      } shadow-lg`}></div>
                      
                      {/* Issue Number Badge */}
                      <div className="absolute top-4 left-4 px-2 py-1 bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg">
                        <span className="text-xs font-bold text-sky-700">#{issue.id}</span>
                      </div>

                      {/* Header Section */}
                      <div className="mt-8 mb-4">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors leading-tight line-clamp-2">
                          {issue.title}
                        </h4>
                        
                        {/* Status and Priority Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                            issue.statusColor === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                            issue.statusColor === 'orange' ? 'bg-gradient-to-r from-orange-500 to-amber-500' :
                            issue.statusColor === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                            issue.statusColor === 'purple' ? 'bg-gradient-to-r from-purple-500 to-violet-500' : 
                            'bg-gradient-to-r from-blue-500 to-sky-500'
                          }`}>
                            <span>{getStatusIcon(issue.status)}</span>
                            <span>{issue.status.replace('-', ' ').toUpperCase()}</span>
                          </span>
                          
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getPriorityColor(issue.priority)}`}>
                            {issue.priority.toUpperCase()} PRIORITY
                          </span>
                        </div>

                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full border border-gray-200 mb-4">
                          <span className="text-xs">🏷️</span>
                          <span className="text-xs font-medium text-gray-700">{issue.category}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {issue.description}
                      </p>

                      {/* Location and Reporter Info */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center justify-center w-6 h-6 bg-sky-100 rounded-full">📍</span>
                          <span className="font-medium">{issue.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full">👤</span>
                          <span>Reported by <strong>{issue.reporter}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full">�</span>
                          <span>{new Date(issue.reportedDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        {/* Upvote Button */}
                        <button 
                          onClick={() => handleUpvote(issue.id)}
                          className="group/btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-50 text-sky-600 border border-sky-200 rounded-xl hover:from-sky-100 hover:to-blue-100 hover:shadow-md transition-all duration-300 font-medium text-sm"
                        >
                          <span className="text-lg group-hover/btn:scale-110 transition-transform">👍</span>
                          <span className="font-bold">{issue.upvotes}</span>
                          <span className="text-xs">votes</span>
                        </button>
                        
                        {/* Action Icons */}
                        <div className="flex gap-2">
                          <button 
                            title="Add Comment"
                            className="group/icon p-2 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-xl transition-all duration-300"
                          >
                            <span className="text-lg group-hover/icon:scale-110 transition-transform">💬</span>
                          </button>
                          <button 
                            title="Share Issue"
                            className="group/icon p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-all duration-300"
                          >
                            <span className="text-lg group-hover/icon:scale-110 transition-transform">📤</span>
                          </button>
                          <button 
                            title="Bookmark"
                            className="group/icon p-2 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-xl transition-all duration-300"
                          >
                            <span className="text-lg group-hover/icon:scale-110 transition-transform">⭐</span>
                          </button>
                        </div>
                      </div>

                      {/* Progress Bar for In-Progress Issues */}
                      {issue.status === 'in-progress' && (
                        <div className="mt-4 pt-4 border-t border-orange-200">
                          <div className="flex items-center justify-between text-xs text-orange-600 mb-2">
                            <span>Progress</span>
                            <span>65%</span>
                          </div>
                          <div className="w-full bg-orange-100 rounded-full h-2">
                            <div className="bg-gradient-to-r from-orange-400 to-amber-400 h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                        </div>
                      )}

                      {/* Resolved Badge */}
                      {issue.status === 'resolved' && (
                        <div className="mt-4 pt-4 border-t border-green-200">
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">✅</span>
                            <span className="font-medium">Issue Resolved - Thank you for reporting!</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredIssues.map((issue, index) => (
                    <div
                      key={issue.id}
                      className="group relative bg-gradient-to-r from-white via-gray-50/50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-xl hover:border-sky-200 transition-all duration-300 hover:-translate-y-1"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Priority Indicator Line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${
                        issue.priority === 'high' ? 'bg-gradient-to-b from-red-400 to-red-600' :
                        issue.priority === 'medium' ? 'bg-gradient-to-b from-yellow-400 to-orange-500' : 
                        'bg-gradient-to-b from-green-400 to-emerald-500'
                      }`}></div>

                      <div className="flex items-center justify-between ml-4">
                        <div className="flex-1 flex items-center gap-4">
                          {/* Issue Number */}
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center border border-sky-200">
                            <span className="text-sm font-bold text-sky-700">#{issue.id}</span>
                          </div>
                          
                          {/* Main Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-bold text-gray-900 text-lg group-hover:text-sky-600 transition-colors pr-4 line-clamp-1">
                                {issue.title}
                              </h4>
                              
                              {/* Status and Priority Badges */}
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold text-white ${
                                  issue.statusColor === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                                  issue.statusColor === 'orange' ? 'bg-gradient-to-r from-orange-500 to-amber-500' :
                                  issue.statusColor === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                  issue.statusColor === 'purple' ? 'bg-gradient-to-r from-purple-500 to-violet-500' : 
                                  'bg-gradient-to-r from-blue-500 to-sky-500'
                                }`}>
                                  <span>{getStatusIcon(issue.status)}</span>
                                  <span className="hidden sm:inline">{issue.status.replace('-', ' ').toUpperCase()}</span>
                                </span>
                                
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(issue.priority)}`}>
                                  {issue.priority.toUpperCase()}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">{issue.description}</p>
                            
                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                              <span className="flex items-center gap-1">
                                <span className="w-4 h-4 bg-sky-100 rounded-full flex items-center justify-center">📍</span>
                                <span className="font-medium">{issue.location}</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center">🏷️</span>
                                <span>{issue.category}</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center">👤</span>
                                <span>By <strong>{issue.reporter}</strong></span>
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center">📅</span>
                                <span>{new Date(issue.reportedDate).toLocaleDateString()}</span>
                              </span>
                            </div>

                            {/* Progress Bar for In-Progress Issues */}
                            {issue.status === 'in-progress' && (
                              <div className="mb-3">
                                <div className="flex items-center justify-between text-xs text-orange-600 mb-1">
                                  <span>Progress</span>
                                  <span>65%</span>
                                </div>
                                <div className="w-full bg-orange-100 rounded-full h-1.5">
                                  <div className="bg-gradient-to-r from-orange-400 to-amber-400 h-1.5 rounded-full" style={{width: '65%'}}></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                          {/* Upvote Button */}
                          <button 
                            onClick={() => handleUpvote(issue.id)}
                            className="group/btn flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-sky-50 to-blue-50 text-sky-600 border border-sky-200 rounded-lg hover:from-sky-100 hover:to-blue-100 hover:shadow-md transition-all duration-300 font-medium text-sm"
                          >
                            <span className="text-base group-hover/btn:scale-110 transition-transform">👍</span>
                            <span className="font-bold">{issue.upvotes}</span>
                          </button>
                          
                          {/* Quick Actions */}
                          <div className="flex gap-1">
                            <button 
                              title="Add Comment"
                              className="group/icon p-2 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-lg transition-all duration-300"
                            >
                              <span className="group-hover/icon:scale-110 transition-transform">💬</span>
                            </button>
                            <button 
                              title="Share Issue"
                              className="group/icon p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-all duration-300"
                            >
                              <span className="group-hover/icon:scale-110 transition-transform">📤</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Resolved Success Message */}
                      {issue.status === 'resolved' && (
                        <div className="mt-3 pt-3 border-t border-green-200 ml-4">
                          <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                            <span>✅</span>
                            <span className="font-medium">Issue Resolved - Thank you for your report!</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {filteredIssues.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <p className="text-gray-500">No issues found matching your criteria.</p>
                  <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter settings.</p>
                </div>
              )}
            </div>
          </div>

          {/* Side content - Hidden on mobile, visible on desktop */}
          <aside className="hidden lg:block lg:flex-1 max-w-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <p className="text-gray-600 text-sm mb-6">Stay engaged with your community and help make a difference.</p>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-sky-50 rounded-xl border border-sky-200">
                <h3 className="font-semibold text-sky-800 text-sm mb-2">📝 Report New Issue</h3>
                <p className="text-xs text-sky-600 mb-3">See something that needs attention? Report it to get it fixed.</p>
                <a 
                  href="/report"
                  className="inline-block px-4 py-2 bg-sky-500 text-white text-sm font-medium rounded-lg hover:bg-sky-600 transition-colors"
                >
                  Create Report
                </a>
              </div>
              
              <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                <h3 className="font-semibold text-teal-800 text-sm mb-2">👥 Join Discussion</h3>
                <p className="text-xs text-teal-600 mb-3">Engage with fellow community members about local issues.</p>
                <button className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-lg hover:bg-teal-600 transition-colors">
                  View Forums
                </button>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <h3 className="font-semibold text-purple-800 text-sm mb-2">📊 Track Progress</h3>
                <p className="text-xs text-purple-600 mb-3">Monitor the status of issues you care about most.</p>
                <button className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-lg hover:bg-purple-600 transition-colors">
                  My Issues
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 text-center">
                <div className="text-2xl font-bold text-orange-600">12</div>
                <div className="text-xs text-orange-700">Issues Resolved This Week</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 text-center">
                <div className="text-2xl font-bold text-green-600">2.3h</div>
                <div className="text-xs text-green-700">Average Response Time</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-4 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">Need Help?</h3>
              <p className="text-xs text-gray-600 mb-2">Contact our community support team:</p>
              <div className="text-sm font-semibold text-gray-800">📞 +1 (555) 123-4567</div>
              <div className="text-xs text-gray-500 mt-1">Available 24/7</div>
            </div>
          </aside>
        </div>

        {/* Mobile footer with key actions */}
        <div className="lg:hidden mt-8">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a 
              href="/report"
              className="p-3 bg-sky-50 rounded-lg text-center border border-sky-200 text-sky-700 font-medium text-sm hover:bg-sky-100 transition-colors"
            >
              📝 Report Issue
            </a>
            <button 
              onClick={handleViewAnalytics}
              className="p-3 bg-teal-50 rounded-lg text-center border border-teal-200 text-teal-700 font-medium text-sm hover:bg-teal-100 transition-colors"
            >
              📊 View Stats
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
