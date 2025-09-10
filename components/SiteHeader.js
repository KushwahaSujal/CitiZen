"use client"
import Link from 'next/link'
import { useTheme } from './theme'
import { useState } from 'react'

export default function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 shadow-soft-lg relative">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0 text-white" onClick={close}>
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
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 p-2 bg-white/20 text-white rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 bg-white/20 text-white rounded-md"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {/* Hamburger icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 bg-white/20 text-white rounded-md" aria-label="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-md absolute left-0 right-0 top-full z-50">
          <div className="flex flex-col p-4 gap-3">
            <Link href="/report" className="text-gray-800 dark:text-gray-100" onClick={close}>Report</Link>
            <Link href="/issues" className="text-gray-800 dark:text-gray-100" onClick={close}>Issues</Link>
            <Link href="/" className="text-gray-800 dark:text-gray-100" onClick={close}>Home</Link>
            <Link href="/profile" className="text-gray-800 dark:text-gray-100" onClick={close}>Profile</Link>
            <Link href="/admin" className="text-gray-800 dark:text-gray-100" onClick={close}>Admin</Link>
            <Link href="/faq" className="text-gray-800 dark:text-gray-100" onClick={close}>Help</Link>
          </div>
        </div>
      )}
    </header>
  )
}
