// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        💰 ExpenseTracker
      </Link>

      {user ? (
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link to="/salary-planner" className="text-gray-700 hover:text-blue-600">
            Salary Planner
          </Link>
          {/* ✅ Add Settings link here */}
          <Link to="/settings" className="text-gray-700 hover:text-blue-600">
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/signin" className="text-gray-700 hover:text-blue-600">
            Signin
          </Link>
          <Link to="/signup" className="text-gray-700 hover:text-blue-600">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
