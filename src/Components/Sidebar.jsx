import { Link } from "react-router-dom"

function Sidebar() {

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 border-r border-gray-800 text-white p-6">

      <h2 className="text-xl font-bold text-blue-400 mb-8">
        DevForge
      </h2>

      <nav className="flex flex-col gap-4">

        <Link className="hover:text-blue-400" to="/dashboard">
          Dashboard
        </Link>

        <Link className="hover:text-blue-400" to="/courses">
          Courses
        </Link>

        <Link className="hover:text-blue-400" to="/playground">
          Playground
        </Link>

      </nav>

    </aside>
  )
}

export default Sidebar