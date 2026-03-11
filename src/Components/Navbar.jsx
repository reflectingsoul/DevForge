import { useState } from "react"
import { Link } from "react-router-dom"
import useAuthStore from "../store/authStore"

function Navbar() {

  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-white">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <Link to="/" className="text-xl font-bold text-blue-400">
          DevForge
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex items-center gap-6">

          <Link className="hover:text-blue-400" to="/courses">
            Courses
          </Link>

          <Link className="hover:text-blue-400" to="/playground">
            Playground
          </Link>

          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link
                to="/register"
                className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 gap-3">

          <Link to="/courses">Courses</Link>

          <Link to="/playground">Playground</Link>

          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}

        </div>
      )}

    </nav>
  )
}

export default Navbar