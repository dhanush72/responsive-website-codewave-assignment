import React from "react";
import { Nav } from "react-bootstrap";

const MenuItem = ({ menu, showMenu }) => {
  return (
    <Nav.Item className={showMenu ? "mr-3 menu-item active" : "mr-3 menu-item"}>
      <Nav.Link
        eventKey={menu.id}
        active
        className="h5 text-dark bg-warning font-weight-bold text-uppercase "
      >
        {menu.title}
      </Nav.Link>
    </Nav.Item>
  );
};

export default MenuItem;
