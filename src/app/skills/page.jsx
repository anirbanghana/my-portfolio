'use client';
import styled from 'styled-components';
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGit,
  FaDatabase,
  FaJava,
} from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiCplusplus, SiMysql, SiPython, SiStyledcomponents, SiSpring, SiApachemaven } from 'react-icons/si';

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;
  background: #fff;
  min-height: 100vh;
  text-align: center;
`;

const SkillsHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin: 2rem 0;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content:center;
  background: #f7f8fa;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  // cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.span`
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #0070f3;
`;

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export default function SkillsPage() {
  return (
    <SkillsContainer id="skills">
      <SkillsHeading>Skills</SkillsHeading>
      <SkillsList>
        {/* Adding skill icons and names */}
        <SkillItem>
          <SkillIcon><FaJsSquare /></SkillIcon>
          <SkillName>JavaScript</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><SiNextdotjs /></SkillIcon>
          <SkillName>Next.js</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><FaReact /></SkillIcon>
          <SkillName>React</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><FaHtml5 /></SkillIcon>
          <SkillName>HTML</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><FaCss3Alt /></SkillIcon>
          <SkillName>CSS</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><FaNodeJs /></SkillIcon>
          <SkillName>Node.js</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><SiMongodb /></SkillIcon>
          <SkillName>MongoDB</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><SiCplusplus /></SkillIcon>
          <SkillName>C++</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><FaJava /></SkillIcon>
          <SkillName>Java</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><SiPython /></SkillIcon>
          <SkillName>Python</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><SiMysql /></SkillIcon>
          <SkillName>MySQL</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><FaGit /></SkillIcon>
          <SkillName>Git</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><SiStyledcomponents /></SkillIcon>
          <SkillName>Styled Components</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><FaDatabase /></SkillIcon>
          <SkillName>OOPs</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><SiSpring /></SkillIcon>
          <SkillName>SpringBoot</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon><SiApachemaven /></SkillIcon>
          <SkillName>Maven</SkillName>
        </SkillItem>
      </SkillsList>
    </SkillsContainer>
  );
}
