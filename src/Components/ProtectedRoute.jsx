import { Navigate } from "react-router-dom"
import useAuthStore from "../Store/authStore"

function ProtectedRoute({ children }) {

  const user = useAuthStore((state) => state.user)

  // If user is not logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" />
  }

  // If logged in → allow access
  return children
}

export default ProtectedRoute