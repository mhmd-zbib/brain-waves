import React from "react";
import { Link } from "react-router-dom";

function NavItem({ name, icon, route }) {
  return (
    <Link className="" to={route}>
      {name}
    </Link>
  );
}

export default NavItem;
