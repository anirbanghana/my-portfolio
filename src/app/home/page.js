'use client';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/fa';

const HomeContainer = styled.section`
  display: flex;
  flex-direction: row; /* Row layout for larger screens */
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0 2rem;
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
  color: #333;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column; /* Column layout for smaller screens */
    text-align: center;
    padding: 1rem;
    margin-top:4rem;
  }
`;

const TextContainer = styled.div`
flex: 1;
max-width: 600px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700; /* Increased font weight for better visibility */
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem; /* Add some space below the title */
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.8;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* Space between items */
    
  @media (max-width: 768px) {
    justify-content:center;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1.5rem; /* Space between icons */
  margin-top: 1rem;

   @media (max-width: 768px) {
    justify-content:center;
  }
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 2rem; /* Slightly larger icons */
  transition: color 0.3s ease;

  &:hover {
    color: #0070f3; /* Color change on hover */
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin: 1rem 0;
  padding: 0.75rem 2rem;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem; /* Slightly larger button text */
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #005bb5;
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

   @media (max-width: 768px) {
    display: block;
  }

  img {
    border-radius: 50%; /* Circular image */
    width: 300px; /* Adjust size as needed */
    height: 300px; /* Adjust size as needed */
    object-fit: cover; /* Maintain aspect ratio */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
    transition: transform 0.3s; /* Add a hover effect */
  }

  img:hover {
    transform: scale(1.05); /* Slight zoom on hover */
  }

  @media (max-width: 768px) {
    img {
      width: 200px; /* Smaller size for mobile */
      height: 200px; /* Smaller size for mobile */
    }
  }
`;

export default function HomePage() {
  return (
    <HomeContainer id="home">
      <TextContainer>
        <Title>Hello, I'm Anirban Ghana</Title>
        <Subtitle>
          <span>Full Stack Developer</span> | 
          <span>MySQL</span> | 
          <span>Java</span> |
          <span>Software Developer</span>
        </Subtitle>
        
        {/* Social Icons Container */}
        <SocialIconsContainer>
          <SocialIcon href="https://github.com/anirbanghana" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://x.com/digitalanirbang" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/digitalanirbanghana/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://medium.com/@anirbanghana" target="_blank" rel="noopener noreferrer">
            <FaMedium />
          </SocialIcon>
        </SocialIconsContainer>

        <CTAButton href="/path/to/your/cv.pdf" download>
          Download CV
        </CTAButton>
      </TextContainer>
      <ImageContainer>
        <img src="/assets/profile-photo.jpeg" alt="Anirban Ghana" />
      </ImageContainer>
    </HomeContainer>
  );
}
