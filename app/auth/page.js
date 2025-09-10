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
          <p className="mt-4 text-gray-600">Report civic issues, track progress, and help improve your community. Together we can make cities cleaner, safer, and more responsive.</p>
          <div className="mt-6 grid grid-cols-1 gap-4">
            <img src="/images/city-1.jpg" alt="City" className="rounded-lg shadow-md" />
            <img src="/images/city-2.jpg" alt="City skyline" className="rounded-lg shadow-md" />
          </div>
        </aside>
      </div>
    </main>
  )
}
