import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to='/trips'
        className="nav-link"
      >
        Trips
      </NavLink>
      <NavLink
        to="/trips/new"
        className="nav-link"
      >
        New
      </NavLink>
    </nav>
  );
};

export default NavBar;