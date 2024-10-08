'use client';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f8fa;
  text-align: center;
  width: 100%;
`;

const ProjectsHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin: 2rem 0;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  height:fit-content;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #0070f3;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export default function ProjectsPage() {
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsWrapper>
        {/* Repeat this ProjectCard for multiple projects */}
        <ProjectCard>
          <ProjectTitle>Next Word Prediction for Email using LSTM</ProjectTitle>
          <ProjectDescription>
            This project leverages an LSTM-based next-word prediction model to enhance email composition efficiency. It features personalized word suggestions, context-aware predictions, and cross-lingual support. Built with deep learning techniques, it improves productivity and accuracy in real-time email drafting.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Expense Tracker</ProjectTitle>
          <ProjectDescription>
            A financial management web application that enables users to effortlessly track expenses and manage budgets. It utilizes local storage for persistent data access and offers features like expense editing and deletion for streamlined financial management.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Sorting Visualizer</ProjectTitle>
          <ProjectDescription>
            A Sorting Visualizer web application built with JavaScript, featuring an interactive interface for exploring various sorting algorithms. Users can select algorithms, adjust speed, and view real-time visualizations with smooth CSS animations. This project demonstrates my skills in HTML, CSS, and JavaScript, ensuring cross-browser compatibility and optimal performance.
          </ProjectDescription>
        </ProjectCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}
