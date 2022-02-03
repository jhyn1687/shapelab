import styled from 'styled-components';

export const FooterContainer = styled.nav`
  background: #1a5e75;
  height: 80px;
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 5;
  position: relative;
  bottom: 0;
`;

export const CopyrightMessage = styled.p`
  color: #aab4bd;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;