import Sidebar from "./Sidebar"

function DashboardLayout({ children }) {

  return (
    <div className="flex bg-gray-800 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10 text-white">
        {children}
      </div>

    </div>
  )
}

export default DashboardLayout