import React from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";
import { useState } from "react";


const Navbar = () => {
  const [toggle,setToggle] =useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>BT Library</Logo>
      <HamburgerIcon onClick={() => setToggle(!toggle)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={toggle}>
        <MenuLink>Home</MenuLink>
        <MenuLink>About</MenuLink>
        <MenuLink>Login</MenuLink>
        <MenuLink>Register</MenuLink>
        <MenuLink>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
