import styled, {keyframes} from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'

const underlineAnimation = keyframes`
  from {
    text-underline-offset: 0.1rem;
  }

  to {
    text-decoration-color: rgba(55, 212, 251, 1);
    text-underline-offset: 0.3rem;
  }
`;
const underlineAnimationActive = keyframes`
  from {
    text-underline-offset: 0.1rem;
  }

  to {
    
    text-decoration-color: rgba(5, 193, 240, 1);
    text-underline-offset: 0.3rem;
  }
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #1a5e75;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  z-index: 10;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #37d4fb;

  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-75%, 120%);
    font-size: 1.5rem;
    cursor: pointer;
    opacity: ${(props) => (props.isOpen ? "0%" : "100%")};
    transition: opacity 0.1s ease-in;
  }
`;

export const Close = styled(CloseIcon)`
  display: none;
  color: #37d4fb;

  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-75%, 120%);
    font-size: 1.5rem;
    cursor: pointer;
    opacity: ${(props) => (props.isOpen ? "100%" : "0%")};
    transition: opacity 0.1s ease-in;
  }
`;

export const Logo = styled(Link)`
  color: #05c1f0;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;

  text-decoration: underline 0.2rem rgba(5, 193, 240, 0);

  &:hover {
    animation: ${underlineAnimationActive} 0.2s linear forwards;
  }
`;

export const NavLink = styled(Link)`
  color: #37d4fb;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;

  text-decoration: underline 0.2rem rgba(5, 193, 240, 0);

  &.active {
    color: #05c1f0;
  }

  &.active:hover {
    animation: ${underlineAnimationActive} 0.2s linear forwards;
  }

  &:hover {
    animation: ${underlineAnimation} 0.2s linear forwards;
  }
`;

export const NavMenu = styled.div`
  background: #1a5e75;
  display: flex;
  justify-content: space-between;
  align-items: left;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? "300px" : "0px")};
    transition: max-height 0.3s ease-in;
  }
  /* 
  @media screen and (max-width: 500px) {
    display: none;
  } */
`;