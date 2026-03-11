import CourseCard from "../Components/CourseCard"

const courses = [
  {
    id: 1,
    title: "System Design",
    description: "Learn load balancing, caching, and distributed systems.",
    difficulty: "Advanced"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into closures, event loop, and V8 engine.",
    difficulty: "Expert"
  },
  {
    id: 3,
    title: "React Architecture",
    description: "Understand Virtual DOM, reconciliation, and performance.",
    difficulty: "Advanced"
  },
  {
    id: 4,
    title: "Backend Scalability",
    description: "Learn how large systems scale to millions of users.",
    difficulty: "Elite"
  }
]

function Courses() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

      </div>

    </div>
  )
}

export default Courses