import AuthCard from '../../components/AuthCard'

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-6 py-16 flex items-center justify-center gap-12">
        <div className="flex-1 flex items-center justify-center">
          <AuthCard />
        </div>

        <aside className="flex-1 max-w-lg">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-teal-400">Join CitiZen</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">Report civic issues, track progress, and help improve your community. Together we can make cities cleaner, safer, and more responsive.</p>
          
          <div className="mt-8 space-y-6">
            <div className="relative">
              <img src="/images/city-modern.svg" alt="Modern city with buildings and blue sky" className="rounded-xl shadow-lg w-full h-40 object-cover border border-gray-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
            </div>
            <div className="relative">
              <img src="/images/city-skyline.svg" alt="City skyline at sunset" className="rounded-xl shadow-lg w-full h-40 object-cover border border-gray-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-sky-50 rounded-lg">
              <div className="text-2xl font-bold text-sky-600">24/7</div>
              <div className="text-xs text-gray-600">Reporting</div>
            </div>
            <div className="p-3 bg-teal-50 rounded-lg">
              <div className="text-2xl font-bold text-teal-600">Fast</div>
              <div className="text-xs text-gray-600">Response</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">Better</div>
              <div className="text-xs text-gray-600">Cities</div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
