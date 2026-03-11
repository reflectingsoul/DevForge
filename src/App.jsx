import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"
import AIMentor from "./components/AIMentor";

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"
import Courses from "./Pages/Courses"
import Playground from "./Pages/Playground"

function App() {
  return (
    <BrowserRouter>

      {/* Global Navigation */}
      <Navbar />

      {/* Page Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/playground" element={<Playground />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* Global AI Mentor */}
      <AIMentor />

    </BrowserRouter>
  )
}

export default App