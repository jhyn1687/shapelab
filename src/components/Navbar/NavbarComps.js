import styled, {keyframes} from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

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
    transform: translate(-100%, 90%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavLink = styled(Link)`

  color: #DFEFCA;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  text-decoration: underline 0.1rem rgba(255, 249, 165, 0);

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
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`