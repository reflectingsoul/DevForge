import { Link } from "react-router-dom"
import useAuthStore from "../store/authStore"

function Navbar() {

  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <div className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center border-b border-gray-700">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-400">
        DevForge
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6">

        <Link to="/courses" className="hover:text-blue-400">
          Courses
        </Link>

        <Link to="/playground" className="hover:text-blue-400">
          Playground
        </Link>

        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>

            <span className="text-gray-300">
              Hi, {user.name}
            </span>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-1 rounded hover:bg-red-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-400">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-500"
            >
              Register
            </Link>
          </>
        )}

      </div>

    </div>
  )
}

export default Navbar