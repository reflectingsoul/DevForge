import { useState } from "react"
import Editor from "@monaco-editor/react"
import DashboardLayout from "../Components/DashboardLayout"

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

      setOutput(logs.join("\n") || "Code executed successfully")

    } catch (error) {

      setOutput(error.message)

    }

  }

  return (
    <DashboardLayout>

      <div className="bg-gray-900 text-white p-10 min-h-screen">

        <h1 className="text-3xl mb-6">
          Coding Playground
        </h1>

        <div className="bg-gray-800 rounded-lg overflow-hidden">

          <Editor
            height="400px"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
          />

        </div>

        <button
          onClick={runCode}
          className="mt-4 bg-blue-600 px-6 py-2 rounded hover:bg-blue-500"
        >
          Run Code
        </button>

        <div className="bg-black mt-6 p-4 rounded">

          <h2 className="text-green-400 mb-2">
            Output
          </h2>

          <pre>{output}</pre>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Playground