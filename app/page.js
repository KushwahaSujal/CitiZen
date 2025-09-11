export const metadata = {
  title: 'CitiZen | Engage Your City'
}

export default function LandingPage(){
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 text-gray-800">
      {/* Subtle background illustration */}
      <div className="pointer-events-none absolute inset-0">
        <img 
          src="/images/city-skyline.svg" 
          alt="City skyline outline" 
          className="w-full h-full object-cover opacity-[0.07]" 
        />
      </div>

      {/* Brand top-left using existing logo asset */}
      <div className="absolute top-5 left-6 flex items-center gap-3">
        <img
          src="/icons/icon-192x192.png"
          alt="CitiZen logo"
          className="h-12 w-12 rounded shadow-md"
        />
        <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-600">CitiZen</span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-20 md:py-10 flex flex-col items-start md:items-start">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl">
          Empower your community.
          <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-teal-500">Report. Track. Improve.</span>
        </h1>
        <p className="mt-6 text-base md:text-lg max-w-2xl text-gray-600 leading-relaxed">
          A simple civic issue reporting platform helping citizens surface problems and authorities resolve them faster—with full transparency.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2 w-full max-w-xl text-sm text-gray-600">
          {['Fast issue submission','Live status tracking','Community upvotes','Data-driven insights'].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 w-4 h-4 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 text-white text-[10px] flex items-center justify-center font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href="/auth"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white text-base overflow-hidden focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
            <span className="relative flex items-center gap-2">
              Get Started
              <span className="text-sm opacity-80 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </div>
      </div>
    </main>
  )
}
