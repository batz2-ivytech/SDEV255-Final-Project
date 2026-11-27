
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
import "./App.css";

function Portal() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  function handleLogin(selectedRole) {
    setRole(selectedRole);
    navigate("/");
  }

  function handleSignOut() {
    setRole(null);
    navigate("/login");
  }

  if (!role) {
    return (
      <main className="login-container">
        <div className="login-card">
          <h1>Course Portal</h1>
          <p>Select your role to continue.</p>

          <button
            className="portal-button"
            onClick={() => handleLogin("student")}
          >
            Student
          </button>

          <button
            className="portal-button"
            onClick={() => handleLogin("teacher")}
          >
            Teacher
          </button>

          <p>Temporary login for development testing.</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Navbar role={role} onSignOut={handleSignOut} />

      <Routes>
        <Route path="/" element={<Home role={role} />} />

        {role === "student" && (
          <>
            <Route
              path="/student/shopping"
              element={<Placeholder title="Course Shopping" />}
            />

            <Route
              path="/student/review"
              element={<Placeholder title="Course Review" />}
            />
          </>
        )}

        {role === "teacher" && (
          <>
            <Route
              path="/teacher/courses"
              element={<Placeholder title="Teacher Course List" />}
            />

            <Route
              path="/teacher/students"
              element={<Placeholder title="Student Search" />}
            />

            <Route
              path="/teacher/students/:id"
              element={<Placeholder title="Student Review" />}
            />
          </>
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="footer">
        <p>Course Management System | SDEV255 Final Project</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Portal />
    </BrowserRouter>
  );
}

export default App;
