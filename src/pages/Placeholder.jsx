
import { Link } from "react-router-dom";

function Placeholder({ title }) {
  return (
    <main className="home-container">
      <section className="welcome-banner">
        <h1>{title}</h1>

        <p>This page is currently under development.</p>

        <p>
          Additional functionality will be added as the
          project progresses.
        </p>

        <Link className="portal-button" to="/">
          Return Home
        </Link>
      </section>
    </main>
  );
}

export default Placeholder;
