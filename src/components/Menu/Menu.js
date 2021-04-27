import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { menuList } from "../../utils/data";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  // toggle menu button
  const toggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* mobile menu */}
      <div className="mobile-menu">
        <button className="menu-btn btn btn-warning" onClick={toggle}>
          {showMenu ? (
            <span className="mr-1 open">×</span>
          ) : (
            <span className="mr-1 open">☰</span>
          )}
          Menu
        </button>
      </div>

      {/* menu */}
      <Nav variant="pills" activeKey="1" justify="true">
        {/* menu item component */}
        {menuList.map((menu) => (
          <MenuItem showMenu={showMenu} menu={menu} key={menu.id} />
        ))}
      </Nav>
    </>
  );
};

export default Menu;
