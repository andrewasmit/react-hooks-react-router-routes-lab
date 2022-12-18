import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div>
      <NavLink
        to="/"
        exact
        activeStyle={{
          background: "lightgrey",
        }}>
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        activeStyle={{
          background: "lightgrey",
        }}>
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        activeStyle={{
          background: "lightgrey",
        }}>
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        activeStyle={{
          background: "lightgrey",
        }}>
        Actors
      </NavLink>
    </div>
    )
}

export default NavBar;
