
import { Link } from "react-router-dom";

function Home({ role }) {
  const isTeacher = role === "teacher";

  return (
    <main className="home-container">
      <section className="welcome-banner">
        <p className="subtitle">Course Management System</p>

        <h1>Welcome to the Course Portal</h1>

        <p>
          Manage your courses and access your academic
          resources in one convenient location.
        </p>

        <span className="role-label">
          {isTeacher ? "Teacher Portal" : "Student Portal"}
        </span>
      </section>

      <section className="quick-access">
        <h2>Quick Access</h2>

        <div className="card-grid">
          <article className="portal-card">
            <h3>
              {isTeacher ? "Manage Courses" : "Browse Courses"}
            </h3>

            <p>
              {isTeacher
                ? "Add, edit, and delete available courses."
                : "Explore available courses and select your classes."}
            </p>

            <Link
              className="portal-button"
              to={isTeacher
                ? "/teacher/courses"
                : "/student/shopping"}
            >
              View Courses
            </Link>
          </article>

          <article className="portal-card">
            <h3>
              {isTeacher ? "Find Students" : "Review Courses"}
            </h3>

            <p>
              {isTeacher
                ? "View students and manage their enrollment."
                : "Review your selected courses and enrollment status."}
            </p>

            <Link
              className="portal-button"
              to={isTeacher
                ? "/teacher/students"
                : "/student/review"}
            >
              {isTeacher ? "View Students" : "My Courses"}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
