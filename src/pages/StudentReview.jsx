import { Link, useParams } from "react-router-dom";

function StudentReview() {
  const { id } = useParams();

  return (
    <main className="home-container">
      <section className="welcome-banner">
        <h1>Student Review</h1>
        <p>Viewing student ID: {id}</p>
        <p>Tomy: Teacher view to add or drop classes for this student goes here.</p>
        <Link className="portal-button" to="/teacher/students">
          Back to Student List
        </Link>
      </section>
    </main>
  );
}

export default StudentReview;