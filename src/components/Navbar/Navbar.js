import React from 'react';
import {NavLink, Nav, Bars, NavMenu} from './NavbarComps';
// import Logo from'../../images/logo.svg';

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Tony Yuan</h1>
          {/* <img src={Logo} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">
            <h1>Home</h1>
          </NavLink>
          <NavLink to="/Projects">
           <h1>Projects</h1>
          </NavLink>
          <NavLink to="/contact">
            <h1>Contact</h1>
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  )
};

export default Navbar;