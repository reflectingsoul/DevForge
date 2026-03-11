import DashboardLayout from "../Components/DashboardLayout"
import ProgressBar from "../Components/ProgressBar"

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="min-h-screen bg-gray-900 text-white p-10">

        <h1 className="text-4xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">

          <h2 className="text-xl mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-400">
            Continue learning and track your progress.
          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg mb-2">XP</h3>
            <p className="text-blue-400 text-2xl">450</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg mb-2">Courses</h3>
            <p className="text-green-400 text-2xl">3</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg mb-2">Rank</h3>
            <p className="text-purple-400 text-2xl">Advanced</p>
          </div>

        </div>

        {/* Progress Section */}
        <div className="bg-gray-800 p-6 rounded-lg">

          <h2 className="text-xl mb-6">
            Your Progress
          </h2>

          <div className="space-y-5">

            <div>
              <p className="mb-2">System Design</p>
              <ProgressBar progress={45} />
            </div>

            <div>
              <p className="mb-2">Advanced JavaScript</p>
              <ProgressBar progress={70} />
            </div>

            <div>
              <p className="mb-2">React Architecture</p>
              <ProgressBar progress={30} />
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default Dashboard