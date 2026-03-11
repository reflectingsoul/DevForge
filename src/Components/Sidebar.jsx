import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-60 bg-gray-900 text-white h-screen p-6">

      <h2 className="text-xl font-bold mb-8 text-blue-400">
        DevForge
      </h2>

      <div className="flex flex-col gap-4">

        <Link to="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/courses" className="hover:text-blue-400">
          Courses
        </Link>

        <Link to="/playground" className="hover:text-blue-400">
          Playground
        </Link>

      </div>

    </div>
  )
}

export default Sidebar