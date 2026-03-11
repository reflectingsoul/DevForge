import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Home() {

  const codeLines = [
    "const developer = 'Sachin';",
    "const platform = 'DevForge';",
    "function buildFuture() {",
    "  return developer + ' masters advanced programming';",
    "}",
    "console.log(buildFuture());"
  ]

  const [displayedCode, setDisplayedCode] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {

    if (lineIndex >= codeLines.length) return

    const timeout = setTimeout(() => {

      setDisplayedCode((prev) =>
        prev + codeLines[lineIndex][charIndex]
      )

      setCharIndex((prev) => prev + 1)

      if (charIndex + 1 === codeLines[lineIndex].length) {
        setDisplayedCode((prev) => prev + "\n")
        setLineIndex((prev) => prev + 1)
        setCharIndex(0)
      }

    }, 40)

    return () => clearTimeout(timeout)

  }, [charIndex, lineIndex])

  return (

    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">

      {/* Glow Background */}

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full glow-animation"></div>

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full glow-animation"></div>


      {/* HERO */}

      <section className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Forge Elite Developers
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            Master system design, advanced JavaScript,
            and real-world coding challenges with DevForge.
          </p>

          <div className="flex gap-4 flex-wrap">

            <Link
              to="/courses"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Start Learning
            </Link>

            <Link
              to="/playground"
              className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Open Playground
            </Link>

          </div>

        </div>


        {/* Animated Code Block */}

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">

          <p className="text-green-400 mb-4">DevForge Terminal</p>

          <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
            {displayedCode}
          </pre>

        </div>

      </section>


      {/* FEATURES */}

      <section className="relative max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-3">

        <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">

          <h3 className="text-xl font-semibold mb-3">
            Advanced Courses
          </h3>

          <p className="text-gray-400">
            Learn system design, distributed systems,
            and advanced backend architecture.
          </p>

        </div>

        <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">

          <h3 className="text-xl font-semibold mb-3">
            Coding Playground
          </h3>

          <p className="text-gray-400">
            Write and execute JavaScript code using
            the Monaco editor environment.
          </p>

        </div>

        <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">

          <h3 className="text-xl font-semibold mb-3">
            Track Progress
          </h3>

          <p className="text-gray-400">
            Follow your journey from beginner
            to elite developer.
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="relative text-center py-20">

        <h2 className="text-3xl font-bold mb-6">
          Ready to level up your coding skills?
        </h2>

        <Link
          to="/courses"
          className="bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-500 transition"
        >
          Explore Courses
        </Link>

      </section>

    </div>
  )
}

export default Home