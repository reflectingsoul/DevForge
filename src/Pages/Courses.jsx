import DashboardLayout from "../components/DashboardLayout"
import CourseCard from "../components/CourseCard"

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
    description: "Deep dive into closures and event loop.",
    difficulty: "Expert"
  },
  {
    id: 3,
    title: "React Architecture",
    description: "Understand virtual DOM and performance optimization.",
    difficulty: "Advanced"
  }
]

function Courses() {

  return (
    <DashboardLayout>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

      </div>

    </DashboardLayout>
  )
}

export default Courses