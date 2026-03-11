import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuthStore from "../Store/authStore"

function Login() {

  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

    const userData = {
      name: "Sachin",
      email: email
    }

    login(userData)

    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-gray-800 p-8 rounded-lg w-96">

        <h2 className="text-white text-2xl mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-500"
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login