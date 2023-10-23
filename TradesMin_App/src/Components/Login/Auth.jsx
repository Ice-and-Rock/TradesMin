import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <div className="flex items-center justify-center min-h-full m-6 p-3 rounded-xl bg-blue-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl text-black font-bold mb-4">Let's get started...</h1>
        <p className="text-gray-500 mb-4">Sign in via magic link with your email below</p>
        <form className="mb-4" onSubmit={handleLogin}>
          <div>
            <input
              className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:border-blue-500 shadow-xxl"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={`w-full bg-blue-500 text-white rounded-md p-2 ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}