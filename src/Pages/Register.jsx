function Register() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-gray-800 p-8 rounded-lg w-96">

        <h2 className="text-white text-2xl mb-6">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded"
        />

        <button className="w-full bg-green-600 py-2 rounded hover:bg-green-500">
          Register
        </button>

      </div>

    </div>
  )
}

export default Register