'use client';
import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;
  background: #fff;
  min-height: 100vh;
  text-align: center;
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  color: #666;
  line-height: 1.8;
`;

export default function AboutPage() {
  return (
    <AboutContainer id="about">
      <AboutHeading>About Me</AboutHeading>
      <AboutText>
        I'm a Full Stack Developer with a passion for creating modern and efficient web applications. With a strong foundation in both front-end and back-end technologies, I love building seamless user experiences and scalable solutions.
      </AboutText>
      <AboutText>
        I hold a B.Tech degree in Computer Science and Business Systems and have over 2 years of experience in web development. I completed a 1-year internship at Pamprazzi, where I gained hands-on experience, and I am currently working as a System Engineer at TCS.
      </AboutText>
    </AboutContainer>
  );
}
