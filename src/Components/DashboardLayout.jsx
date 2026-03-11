import Sidebar from "./Sidebar"
import Footer from "./Footer"

function DashboardLayout({ children }) {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-4 md:p-8 lg:p-10">
          {children}
        </main>

      </div>

      <Footer />

    </div>
  )
}

export default DashboardLayout