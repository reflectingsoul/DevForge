import { useState } from "react"
import Editor from "@monaco-editor/react"
import DashboardLayout from "../components/DashboardLayout"

function Playground() {

  const [code, setCode] = useState("console.log('Welcome to DevForge')")
  const [output, setOutput] = useState("")

  const runCode = () => {

    try {

      let logs = []

      const originalLog = console.log

      console.log = (...args) => {
        logs.push(args.join(" "))
      }

      eval(code)

      console.log = originalLog

      setOutput(logs.join("\n") || "Code executed")

    } catch (error) {
      setOutput(error.message)
    }

  }

  return (
    <DashboardLayout>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Coding Playground
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">

        <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">

          <Editor
            height="400px"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
          />

        </div>

        <div className="lg:w-1/3 bg-black p-4 rounded">

          <h2 className="text-green-400 mb-2">
            Output
          </h2>

          <pre>{output}</pre>

          <button
            onClick={runCode}
            className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
          >
            Run Code
          </button>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Playground