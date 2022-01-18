import styled, {keyframes} from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'

const underlineAnimation = keyframes`
  from {
    text-underline-offset: 0.1rem;
  }

  to {
    text-decoration-color: rgba(223, 239, 202, 1);
    text-underline-offset: 0.3rem;
  }
`
const underlineAnimationActive = keyframes`
  from {
    text-underline-offset: 0.1rem;
  }

  to {
    text-decoration-color: rgba(255, 249, 165, 1);
    text-underline-offset: 0.3rem;
  }
`

export const Nav = styled.nav`
  background: #0a1128;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  
  z-index: 10;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #DFEFCA;

  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-75%, 120%);
    font-size: 1.5rem;
    cursor: pointer;
    opacity: ${props => props.isOpen ? "0%" : "100%"};
    transition: opacity 0.1s ease-in;
  }
`

export const Close = styled(CloseIcon)`
  display: none;
  color: #DFEFCA;
  

  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-75%, 120%);
    font-size: 1.5rem;
    cursor: pointer;
    opacity: ${props => props.isOpen ? "100%" : "0%"};
    transition: opacity 0.1s ease-in;
  }
`

export const NavLink = styled(Link)`

  color: #DFEFCA;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;
  
  text-decoration: underline 0.2rem rgba(255, 249, 165, 0);

  &.active {
    color: #FFF9A5;
  }

  &.active:hover {
    animation: ${underlineAnimationActive} 0.2s linear forwards;
  }

  &:hover {
    animation: ${underlineAnimation} 0.2s linear forwards;
  }
`

export const NavMenu = styled.div`
  background: #0a1128;
  display: flex;
  justify-content: space-between;
  align-items: left;
  position: relative;
  z-index: 10;
  
  @media screen and (max-width: 500px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${props => props.isOpen ? "300px" : "0px"};
    transition: max-height 0.3s ease-in;
  }
  /* 
  @media screen and (max-width: 500px) {
    display: none;
  } */
`