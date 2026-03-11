function ProgressBar({ progress }) {

  return (
    <div className="w-full bg-gray-700 rounded h-3">

      <div
        className="bg-blue-500 h-3 rounded"
        style={{ width: `${progress}%` }}
      />

    </div>
  )
}

export default ProgressBar