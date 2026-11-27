import { Link } from "react-router-dom";

function CourseShopping() {
  return (
    <main className="home-container">
      <section className="welcome-banner">
        <h1>Course Shopping</h1>
        <p>Tomy: Course list, search bar (name, #, teacher), and add/remove buttons go here.</p>
        <Link className="portal-button" to="/">
          Return Home
        </Link>
      </section>
    </main>
  );
}

export default CourseShopping;