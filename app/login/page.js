export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
  <h2 className="text-xl font-bold">Sign in to CitiZen</h2>
      <div className="mt-4 space-y-3">
        <input placeholder="Email" className="w-full p-2 rounded border" />
        <input placeholder="Password" type="password" className="w-full p-2 rounded border" />
        <button className="w-full bg-primary-500 text-white p-2 rounded">Sign in</button>
      </div>
    </div>
  )
}
