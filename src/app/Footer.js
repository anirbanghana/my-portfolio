'use client';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: black;
  text-align: center;
  position: relative;
  z-index: 1000;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 1rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Anirban Ghana. All rights reserved.</FooterText>
      <FooterText>For any query contact the owner via contact form or email provide.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
