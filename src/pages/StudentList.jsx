import { Link } from "react-router-dom";

function StudentList() {
  return (
    <main className="home-container">
      <section className="welcome-banner">
        <h1>Student List</h1>
        <p>Kay: Short list of students with a Select button goes here.</p>
        <Link className="portal-button" to="/">
          Return Home
        </Link>
      </section>
    </main>
  );
}

export default StudentList;