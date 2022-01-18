import React, {useState} from 'react';
import {NavLink, Nav, Bars, NavMenu, Close} from './NavbarComps';
// import Logo from'../../images/logo.svg';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {setDropdown(!dropdown);}

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Tony Yuan</h1>
          {/* <img src={Logo} alt='logo' /> */}
        </NavLink>
        <NavMenu isOpen={dropdown} onClick={() => {setDropdown(false);}}>
          <NavLink to="/">
            <h1>Home</h1>
          </NavLink>
          <NavLink to="/Projects" onClick={() => {setDropdown(false);}}>
           <h1>Projects</h1>
          </NavLink>
          <NavLink to="/contact" onClick={() => {setDropdown(false);}}>
            <h1>Contact</h1>
          </NavLink>
        </NavMenu>
        <Bars isOpen={dropdown} onClick={showDropdown}/>
        <Close isOpen={dropdown} onClick={showDropdown}/>
      </Nav>
    </div>
  )
};

export default Navbar;