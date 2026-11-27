
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
import CourseShopping from "./pages/CourseShopping";
import CourseReview from "./pages/CourseReview";
import TeacherCourseList from "./pages/TeacherCourseList";
import StudentList from "./pages/StudentList";
import StudentReview from "./pages/StudentReview";
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
              element={<CourseShopping title="Course Shopping" />}
            />

            <Route
              path="/student/review"
              element={<CourseReview title="Course Review" />}
            />
          </>
        )}

        {role === "teacher" && (
          <>
            <Route
              path="/teacher/courses"
              element={<TeacherCourseList title="Teacher Course List" />}
            />

            <Route
              path="/teacher/students"
              element={<StudentList title="Student Search" />}
            />

            <Route
              path="/teacher/students/:id"
              element={<StudentReview title="Student Review" />}
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
