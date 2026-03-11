import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold mb-4">
        DevForge
      </h1>

      <p className="text-gray-400 mb-6">
        Forge Your Path to Elite Programming
      </p>

      <div className="flex gap-4">

        <Link
          to="/courses"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500"
        >
          Explore Courses
        </Link>

        <Link
          to="/playground"
          className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Coding Playground
        </Link>

      </div>

    </div>
  )
}

export default Home