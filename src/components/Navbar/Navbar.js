import React, {useState} from 'react';
import { NavLink, Nav, Bars, NavMenu, Close, Logo } from "./NavbarComps";
// import Logo from'../../images/logo.svg';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <Nav>
        <Logo to="/">
          <h1>ShapeLAB</h1>
          {/* <img src={Logo} alt='logo' /> */}
        </Logo>
        <NavMenu isOpen={dropdown}>
          <NavLink
            to="/"
            onClick={() => {
              setDropdown(false);
            }}
          >
            <h3>Home</h3>
          </NavLink>
          <NavLink
            to="/publications"
            onClick={() => {
              setDropdown(false);
            }}
          >
            <h3>Publications</h3>
          </NavLink>
          <NavLink
            to="/members"
            onClick={() => {
              setDropdown(false);
            }}
          >
            <h3>Members</h3>
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => {
              setDropdown(false);
            }}
          >
            <h3>Projects</h3>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => {
              setDropdown(false);
            }}
          >
            <h3>Contact</h3>
          </NavLink>
        </NavMenu>
        <Bars isOpen={dropdown} onClick={showDropdown} />
        <Close isOpen={dropdown} onClick={showDropdown} />
      </Nav>
    </div>
  );
};

export default Navbar;