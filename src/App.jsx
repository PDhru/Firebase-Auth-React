import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">
              Firebase Auth
            </Link>
            <div className="d-flex">
              <Link className="btn btn-outline-dark me-2" to="/">
                Home
              </Link>
              <Link className="btn btn-outline-dark me-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-dark" to="/signup">
                Signup
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
