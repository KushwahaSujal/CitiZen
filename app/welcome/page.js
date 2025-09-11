export const metadata = {
  title: 'CitiZen | Welcome'
}

export default function WelcomePage(){
  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 text-gray-800">
      <div className="pointer-events-none absolute inset-0">
        <img src="/images/city-skyline.svg" alt="City skyline outline" className="w-full h-full object-cover opacity-[0.05]" />
      </div>
      <div className="absolute top-5 left-6 flex items-center gap-3 z-20">
        <img src="/icons/icon-192x192.png" alt="CitiZen logo" className="h-12 w-12 rounded-xl shadow-md ring-1 ring-teal-400/30 bg-white/70 backdrop-blur" />
        <span className="text-[1.65rem] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600">CitiZen</span>
      </div>
      <section className="relative z-10 w-full max-w-5xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/15 bg-white/60 backdrop-blur-xl shadow-[0_8px_40px_-8px_rgba(16,185,129,0.25)] p-10 md:p-16 flex flex-col lg:flex-row gap-14">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-600">CitiZen</span>
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-xl text-gray-600 leading-relaxed">
              A focused civic issue platform enabling residents to flag problems and authorities to resolve them with transparency, data, and collaboration.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 max-w-xl text-[0.85rem] font-medium text-gray-700">
              {[ 'Fast reporting', 'Live status updates', 'Community prioritization', 'Analytics & insights' ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-sky-500 text-white text-[11px] font-bold shadow ring-1 ring-white/40">✓</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a href="/auth" className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl font-semibold text-white text-base overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 shadow-lg shadow-teal-600/30 active:scale-[0.97] transition-all">
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600" />
                <span className="relative flex items-center gap-2 tracking-wide">
                  Get Started
                  <span className="text-sm opacity-90 translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-teal-600 to-sky-600 text-white shadow-lg shadow-teal-600/40 overflow-hidden mb-6">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]" />
              <p className="text-sm font-semibold tracking-wide uppercase mb-4 text-teal-100/90">Platform Snapshot</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { k:'Issues', v: '1.2k' },
                  { k:'Resolved', v: '87%' },
                  { k:'Avg Time', v: '3d' }
                ].map(stat => (
                  <div key={stat.k} className="flex flex-col">
                    <span className="text-lg font-bold tracking-tight">{stat.v}</span>
                    <span className="text-[10px] uppercase tracking-wide text-teal-100/80">{stat.k}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-teal-500/20 shadow-md shadow-teal-600/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 text-white font-bold flex items-center justify-center text-sm shadow ring-1 ring-white/50">Cz</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">How It Works</span>
                  <span className="text-[10px] uppercase tracking-wide text-teal-600/70">3 simple steps</span>
                </div>
              </div>
              <ol className="mt-1 space-y-3 text-[11px] text-gray-600 font-medium">
                {['Capture photo / location','Describe the issue','Submit & track status'].map(step => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-[2px] h-5 w-5 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-sky-500 text-white text-[9px] font-bold">✓</span>
                    <span className="leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}