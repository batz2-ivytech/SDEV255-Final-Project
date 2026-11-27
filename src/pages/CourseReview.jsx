import { Link } from "react-router-dom";

function CourseReview() {
  return (
    <main className="home-container">
      <section className="welcome-banner">
        <h1>Course Review</h1>
        <p>Tomy: Selected courses, drop button, and course status go here.</p>
        <Link className="portal-button" to="/">
          Return Home
        </Link>
      </section>
    </main>
  );
}

export default CourseReview;