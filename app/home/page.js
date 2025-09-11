export const metadata = { title: 'CitiZen | Home' }
export const dynamic = 'force-dynamic'

function HomeHeroClient(){
  "use client"
  import('react')
  const { useEffect, useState } = require('react')
  const [firstName, setFirstName] = useState('Citizen')
  useEffect(()=>{
    const raw = typeof window !== 'undefined' && localStorage.getItem('user')
    if (raw) { try { const parsed = JSON.parse(raw); if (parsed.fullName) setFirstName(parsed.fullName.split(' ')[0]) } catch {} }
  },[])
  return (
    <section className="relative overflow-hidden pt-20 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-20 w-[520px] h-[520px] bg-gradient-to-br from-teal-200 via-sky-100 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute top-40 -right-32 w-[560px] h-[560px] bg-gradient-to-br from-sky-200 via-emerald-100 to-transparent rounded-full blur-3xl opacity-50" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Hi {firstName},
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-600">Let’s improve your city today.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">Report issues, track resolutions and collaborate—everything you need to make local impact is here.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/report" className="group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 shadow-lg shadow-teal-600/30 active:scale-[0.97] transition">
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600" />
                <span className="relative flex items-center gap-2">Report an Issue <span className="opacity-80 group-hover:translate-x-1 transition">→</span></span>
              </a>
              <a href="/issues" className="px-8 py-4 rounded-2xl font-semibold bg-white border border-teal-500/30 text-teal-700 shadow-sm hover:shadow-md hover:bg-teal-50 transition">Browse Issues</a>
              <a href="/profile" className="px-8 py-4 rounded-2xl font-semibold bg-white border border-sky-500/30 text-sky-700 shadow-sm hover:shadow-md hover:bg-sky-50 transition">Your Profile</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-teal-700/70">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-500 animate-ping" /> Live Platform</span>
              <span>Transparent • Fast • Community-driven</span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default function HomeAppPage(){
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-emerald-50 to-white">
      <HomeHeroClient />
      {/* Hero */}
      {/* (Hero client component inserted above) */}

      {/* Quick Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label:'Active Issues', value:'1,247', color:'from-teal-500 to-sky-500' },
            { label:'Resolved', value:'87%', color:'from-emerald-500 to-teal-500' },
            { label:'Avg Resolve Time', value:'3d', color:'from-cyan-500 to-sky-500' },
            { label:'Communities', value:'56', color:'from-sky-500 to-indigo-500' },
          ].map(card => (
            <div key={card.label} className="relative overflow-hidden rounded-2xl border border-teal-500/15 bg-white/70 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition">
              <div className={`absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br ${card.color} opacity-20 blur-2xl`} />
              <div className="relative">
                <p className="text-xs uppercase tracking-wide text-teal-600/70 font-semibold">{card.label}</p>
                <p className="mt-3 text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-600">{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
            <p className="mt-4 text-gray-600">Three simple steps to make your surroundings better.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { step:'1', title:'Capture & Report', copy:'Snap a photo, mark location, add a short description.' },
              { step:'2', title:'Track & Engage', copy:'Follow progress, add updates and upvote priorities.' },
              { step:'3', title:'See Impact', copy:'Get notified when it’s fixed – transparent and fast.' }
            ].map(item => (
              <div key={item.step} className="relative p-8 rounded-2xl border border-teal-500/15 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-md transition flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 text-white font-bold shadow ring-1 ring-white/40">{item.step}</span>
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-600 text-white shadow-[0_8px_40px_-8px_rgba(16,185,129,0.35)]">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]" />
            <h2 className="relative text-3xl md:text-4xl font-extrabold tracking-tight">Ready to make a difference?</h2>
            <p className="relative mt-4 text-base md:text-lg max-w-2xl mx-auto text-white/90">Start reporting issues now and help your community move forward with transparency and speed.</p>
            <div className="relative mt-8 flex flex-wrap gap-4 justify-center">
              <a href="/report" className="px-8 py-4 rounded-2xl font-semibold bg-white text-teal-700 shadow-lg hover:shadow-xl hover:scale-105 transition">Report Now</a>
              <a href="/issues" className="px-8 py-4 rounded-2xl font-semibold bg-white/10 border border-white/40 text-white backdrop-blur-xl hover:bg-white/20 hover:scale-105 transition">Explore Issues</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
