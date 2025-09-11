export const metadata = {
  title: 'CitiZen | Engage Your City'
}

export default function LandingPage(){
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f6fbf9] text-gray-800 selection:bg-teal-200/60 selection:text-teal-900">
      {/* Soft radial backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-teal-200 via-sky-100 to-transparent blur-3xl opacity-60 animate-pulse [animation-duration:6s]" />
        <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-sky-200 via-emerald-100 to-transparent blur-3xl opacity-50 animate-pulse [animation-duration:8s]" />
        <img
          src="/images/city-skyline.svg"
          alt="City skyline outline"
          className="w-full h-full object-cover opacity-[0.05] mix-blend-multiply"/>
      </div>

      {/* Decorative subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0d948833_1px,transparent_0)] [background-size:22px_22px] opacity-[0.18]" />

      {/* Floating accent shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-8 w-28 h-28 rounded-2xl bg-gradient-to-br from-teal-400/20 to-sky-400/10 backdrop-blur-xl border border-white/40 shadow-lg shadow-teal-500/10 animate-[float_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-16 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-sky-400/25 to-teal-300/10 backdrop-blur-xl border border-white/40 shadow-lg shadow-sky-500/10 animate-[float_11s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Brand top-left using existing logo asset */}
      <div className="absolute top-5 left-6 flex items-center gap-3 z-30">
        <img
          src="/icons/icon-192x192.png"
          alt="CitiZen logo"
          className="h-12 w-12 rounded-xl shadow-md shadow-teal-600/20 ring-1 ring-teal-400/30 bg-white/70 backdrop-blur"
        />
        <span className="text-[1.65rem] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 drop-shadow-sm">CitiZen</span>
      </div>

      {/* Glass hero panel */}
      <div className="relative z-20 w-full max-w-5xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/15 bg-white/60 backdrop-blur-xl shadow-[0_8px_40px_-8px_rgba(16,185,129,0.25)]">
          {/* subtle inner gradient light */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-teal-50/40" />
          <div className="relative p-8 md:p-14 flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl">
                Empower your community.
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-600 animate-gradient-x bg-[length:200%_auto]">Report. Track. Improve.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg max-w-xl text-gray-600 leading-relaxed">
                A focused civic issue platform enabling residents to flag problems and authorities to resolve them with transparency, data, and collaboration.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 max-w-xl text-[0.85rem] font-medium text-gray-700">
                {[
                  'Fast issue submission',
                  'Live status tracking',
                  'Community prioritization',
                  'Analytics & insights'
                ].map(item => (
                  <li key={item} className="group flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-sky-500 text-white text-[11px] font-bold shadow ring-1 ring-white/40">
                      ✓
                    </span>
                    <span className="leading-snug group-hover:text-teal-700 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/auth"
                  className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl font-semibold text-white text-base overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 shadow-lg shadow-teal-600/30 active:scale-[0.97] transition-all"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600 animate-gradient-x bg-[length:250%_auto]" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]" />
                  <span className="relative flex items-center gap-2 tracking-wide">
                    Get Started
                    <span className="text-sm opacity-90 translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </a>
                <div className="flex items-center gap-3 text-xs text-teal-700/70 font-medium">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-teal-500 to-sky-500 animate-ping" />
                  <span>Join early adopters improving their streets</span>
                </div>
              </div>
            </div>
            {/* Side visual / stats */}
            <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
              <div className="relative h-full flex flex-col gap-5">
                <div className="relative p-5 rounded-2xl bg-gradient-to-br from-teal-600 to-sky-600 text-white shadow-lg shadow-teal-600/40 overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]" />
                  <p className="text-sm font-semibold tracking-wide uppercase mb-2 text-teal-100/90">Live Snapshot</p>
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
                <div className="relative p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-teal-500/20 shadow-md shadow-teal-600/10 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 text-white font-bold flex items-center justify-center text-sm shadow ring-1 ring-white/50">Cz</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800">Resident Report Flow</span>
                      <span className="text-[10px] uppercase tracking-wide text-teal-600/70">3 steps</span>
                    </div>
                  </div>
                  <ol className="mt-1 space-y-2 text-[11px] text-gray-600 font-medium">
                    {['Capture photo / location','Describe the issue','Submit & track status'].map(step => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="mt-[2px] h-4 w-4 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-sky-500 text-white text-[9px] font-bold">✓</span>
                        <span className="leading-snug">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Tailwind keyframes (extend via arbitrary values if not in config)
// Using utility-based custom animations: animate-[float_9s_ease-in-out_infinite]
