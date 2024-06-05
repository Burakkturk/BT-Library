import React from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, setUser } = useAuthContext();

  const logOut = () => {
    setUser(false);
    handleClose()
  }
  const handleClose = () => {
    setToggle(false);
  }
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">BT Library</Logo>
      <HamburgerIcon onClick={() => setToggle(!toggle)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={toggle}>
        <MenuLink to="/" onClick={handleClose}>Home</MenuLink>
        <MenuLink to="/about" onClick={handleClose}>About</MenuLink>

        {user ? (
          <MenuLink to="/login" onClick={handleClose}>Logout</MenuLink>
        ) : (
          <>
            <MenuLink to="/login" onClick={handleClose}>Login</MenuLink>
            <MenuLink to="/register" onClick={handleClose}>Register</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
