import DashboardLayout from "../Components/DashboardLayout"
import ProgressBar from "../Components/ProgressBar"

function Dashboard() {

  return (
    <DashboardLayout>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-400 text-sm">XP</p>
          <h3 className="text-3xl text-blue-400 font-bold">450</h3>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-400 text-sm">Courses</p>
          <h3 className="text-3xl text-green-400 font-bold">3</h3>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-400 text-sm">Rank</p>
          <h3 className="text-3xl text-purple-400 font-bold">
            Advanced
          </h3>
        </div>

      </div>

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

    </DashboardLayout>
  )
}

export default Dashboard