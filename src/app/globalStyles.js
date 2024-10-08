// globalStyles.js
'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Root CSS Variables */
  :root {
    --primary-color: #0070f3;  /* Link and button colors */
    --background-color: #f7f8fa;
    --text-color: #333;
    --heading-color: #222;
    --max-width: 1200px;
    --font-stack: 'Roboto', sans-serif;
    --transition-speed: 0.3s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-stack);
    scroll-behavior: smooth;  /* Smooth scrolling */
  }

  html, body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 16px;
    line-height: 1.6;
    scroll-behavior: smooth;
  }

  /* Responsive Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--heading-color);
    margin-bottom: 1rem;
    transition: color var(--transition-speed); /* Smooth color transition */
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1rem; }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--text-color);
    line-height: 1.8;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color var(--transition-speed);
    &:hover {
      text-decoration: none;
      color: darken(var(--primary-color), 10%);
    }
  }

  /* Container Class for Max Width */
  .container {
    width: 90%;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  /* Section Styles */
  section {
    padding: 4rem 0;
  }

  /* Buttons Styling */
  button {
    padding: 0.75rem 1.5rem;
    border: none;
    background-color: var(--primary-color);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color var(--transition-speed);
    &:hover {
      background-color: darken(var(--primary-color), 10%);
    }
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.5rem; }
    h4 { font-size: 1.25rem; }
    h5 { font-size: 1.1rem; }
    h6 { font-size: 1rem; }

    section {
      padding: 3rem 1rem;
    }
  }
`;

export default GlobalStyle;
