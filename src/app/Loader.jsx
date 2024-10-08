// Loader.js
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
`;

const LoaderText = styled.p`
  color: #fff; /* White text for visibility */
  font-size: 1.5rem;
`;

const Loader = () => (
  <LoaderContainer>
    <LoaderText>Loading...</LoaderText>
  </LoaderContainer>
);

export default Loader;