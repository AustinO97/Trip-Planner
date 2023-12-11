import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/mytrips"
        className="nav-link"
      >
        My Trips
      </NavLink>
      <NavLink
        to='/add trip'
        className="nav-link"
      >
        Add Trip
      </NavLink>
    </nav>
  );
};

export default NavBar;