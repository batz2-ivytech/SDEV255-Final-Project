import { Link } from "react-router-dom";

function TeacherCourseList() {
  return (
    <main className="home-container">
      <section className="welcome-banner">
        <h1>Teacher Course List</h1>
        <p>Kay: Add, edit, and delete courses here.</p>
        <Link className="portal-button" to="/">
          Return Home
        </Link>
      </section>
    </main>
  );
}

export default TeacherCourseList;