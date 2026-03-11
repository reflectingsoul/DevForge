function CourseCard({ course }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">

      <h2 className="text-xl font-semibold mb-2">
        {course.title}
      </h2>

      <p className="text-gray-400 mb-4">
        {course.description}
      </p>

      <span className="text-sm text-blue-400">
        Difficulty: {course.difficulty}
      </span>

    </div>
  )
}

export default CourseCard