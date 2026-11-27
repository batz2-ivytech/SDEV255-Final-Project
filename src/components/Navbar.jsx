
import { NavLink } from "react-router-dom";

function Navbar({ role, onSignOut }) {
  const isTeacher = role === "teacher";

  return (
    <header className="navbar">
      <div className="nav-brand">
        <NavLink to="/">Course Portal</NavLink>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        {isTeacher ? (
          <>
            <NavLink to="/teacher/courses">
              Course List
            </NavLink>

            <NavLink to="/teacher/students">
              Student Search
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/student/shopping">
              Course Shopping
            </NavLink>

            <NavLink to="/student/review">
              Course Review
            </NavLink>
          </>
        )}

        <button
          className="signout-button"
          onClick={onSignOut}
        >
          Sign Out
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
