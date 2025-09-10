"use client"
import Link from 'next/link'
import { useTheme } from './theme'

export default function SiteHeader() {
  const { theme, setTheme } = useTheme()
  return (
    <header className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 shadow-soft-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0 text-white">
          <img src="/icons/icon-192x192.png" alt="CitiZen logo" className="h-16 w-16 rounded -mr-1" />
          <div className="flex flex-col">
            <span className="font-bold text-2xl">CitiZen</span>
            <span className="text-xs text-white/80 -mt-1">Your Voice, Your City, Your Impact</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/report" className="text-white hover:text-warning-200">Report</Link>
          <Link href="/issues" className="text-white hover:text-warning-200">Issues</Link>
          <Link href="/" className="text-white hover:text-warning-200">Home</Link>
          <Link href="/profile" className="text-white hover:text-warning-200">Profile</Link>
          <Link href="/admin" className="text-white hover:text-warning-200">Admin</Link>
          <Link href="/faq" className="text-white hover:text-warning-200">Help</Link>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="ml-4 p-2 bg-white/20 text-white rounded-full">{theme === 'dark' ? '☀️' : '🌙'}</button>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <button className="p-2 bg-white/20 text-white rounded-md">☰</button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 bg-white/20 text-white rounded-md">{theme === 'dark' ? '☀️' : '🌙'}</button>
        </div>
      </div>
    </header>
  )
}
