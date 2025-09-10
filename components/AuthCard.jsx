"use client"
import { useState } from "react"

export default function AuthCard() {
  const [mode, setMode] = useState("signup") // 'signup' or 'login'

  const SignupForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const obj = Object.fromEntries(fd.entries())
        console.log("signup", obj)
        alert("Create account clicked (demo). Check console for form values.")
      }}
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

      <button type="submit" className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-sky-400 to-teal-500 shadow">Create account</button>
    </form>
  )

  const LoginForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        console.log("login", Object.fromEntries(fd.entries()))
        alert("Sign in clicked (demo). Check console for form values.")
      }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-black text-center">Welcome back</h3>
      <p className="text-sm text-gray-600 text-center">Sign in to continue your civic journey</p>

      <div className="grid grid-cols-1 gap-3">
        <input name="emailOrPhone" placeholder="Email or phone" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
        <input name="password" type="password" placeholder="Password" className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200" />
      </div>

      <button type="submit" className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-sky-400 to-teal-500 shadow">Sign in</button>
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
