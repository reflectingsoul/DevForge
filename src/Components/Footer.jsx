import { Link } from "react-router-dom"

function Footer() {

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 mt-12">

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm">
          © {new Date().getFullYear()} DevForge. Built by Sachin.
        </p>

        <div className="flex gap-6 text-sm">

          <Link className="hover:text-blue-400" to="/courses">
            Courses
          </Link>

          <Link className="hover:text-blue-400" to="/playground">
            Playground
          </Link>

          <a
            href="https://github.com/reflectingsoul/DevForge"
            target="_blank"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer