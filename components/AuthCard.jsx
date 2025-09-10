"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AuthCard() {
  const [mode, setMode] = useState("signup") // 'signup' or 'login'
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignup = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const fd = new FormData(e.currentTarget)
    const userData = Object.fromEntries(fd.entries())
    
    // Store user data in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', 'demo-token-' + Date.now())
      localStorage.setItem('user', JSON.stringify({
        id: Date.now(),
        fullName: userData.fullName,
        email: userData.email,
        phone: userData.phone,
        ward: userData.ward,
        pincode: userData.pincode,
        municipality: userData.municipality,
        createdAt: new Date().toISOString(),
        isLoggedIn: true
      }))
    }
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false)
      alert(`Welcome ${userData.fullName}! Account created successfully.`)
      router.push('/') // Redirect to home page
    }, 1000)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const fd = new FormData(e.currentTarget)
    const loginData = Object.fromEntries(fd.entries())
    
    // For demo purposes, create a user profile for login
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', 'demo-token-' + Date.now())
      localStorage.setItem('user', JSON.stringify({
        id: Date.now(),
        fullName: 'Demo User', // Default name for login
        email: loginData.emailOrPhone,
        phone: loginData.emailOrPhone.includes('@') ? '' : loginData.emailOrPhone,
        ward: 'Ward 1',
        pincode: '110001',
        municipality: 'Demo City',
        lastLogin: new Date().toISOString(),
        isLoggedIn: true
      }))
    }
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false)
      alert('Welcome back! Logged in successfully.')
      router.push('/') // Redirect to home page
    }, 1000)
  }

  const SignupForm = (
    <form
      onSubmit={handleSignup}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-black text-center">Create Account</h3>
      <p className="text-sm text-gray-600 text-center">Join your community in making a difference</p>

      <div className="grid grid-cols-1 gap-3">
        <input name="fullName" required placeholder="Full name" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
        <input name="email" type="email" required placeholder="Email" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
        <input name="phone" placeholder="Phone" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
        <div className="grid grid-cols-2 gap-3">
          <input name="ward" placeholder="Ward no" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
          <input name="pincode" placeholder="Pincode" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
        </div>
        <input name="municipality" placeholder="Municipality" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
        <input name="password" type="password" required placeholder="Password" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-sky-400 to-teal-500 shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Creating Account...' : 'Create account'}
      </button>
    </form>
  )

  const LoginForm = (
    <form
      onSubmit={handleLogin}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-black text-center">Welcome back</h3>
      <p className="text-sm text-gray-600 text-center">Sign in to continue your civic journey</p>

      <div className="grid grid-cols-1 gap-3">
        <input name="emailOrPhone" placeholder="Email or phone" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
        <input name="password" type="password" placeholder="Password" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-sky-400 to-teal-500 shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  )

  return (
    <div className="w-full max-w-xl">
      <div className="rounded-2xl bg-white/95 border border-gray-100 shadow-lg p-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setMode("signup")}
            className={`px-4 py-2 rounded-full ${mode === "signup" ? "bg-sky-100 text-sky-800" : "text-gray-600"}`}
            aria-pressed={mode === "signup"}
          >
            Sign up
          </button>
          <button
            onClick={() => setMode("login")}
            className={`px-4 py-2 rounded-full ${mode === "login" ? "bg-sky-100 text-sky-800" : "text-gray-600"}`}
            aria-pressed={mode === "login"}
          >
            Log in
          </button>
        </div>

        <div>{mode === "signup" ? SignupForm : LoginForm}</div>
      </div>
    </div>
  )
}
