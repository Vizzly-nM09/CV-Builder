import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">📄 QuickCV</Link>
      </div>

      <div className="navbar-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
        <Link
          to="/builder"
          className={
            location.pathname === "/builder" ? "nav-link active" : "nav-link"
          }
        >
          Builder
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
