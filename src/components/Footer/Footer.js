import React from 'react';
import {FooterContainer, CopyrightMessage} from './FooterComps';

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightMessage>{"\u00A9"} ShapeLAB 2021</CopyrightMessage>
    </FooterContainer>
  );
}

export default Footer
