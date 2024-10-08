'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

// Navbar Container Styles
const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

// Logo Style
const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

// Navigation Links Container
const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); /* Dark background overlay */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    overflow-y: auto; /* Enable scrolling for long content */
    z-index: 999;
    position: fixed; /* Keep the background fixed */
  }
`;

// Navigation Link Style
const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0070f3;
  }

  &.active {
    color: #0070f3;
    font-weight: bold;
    border-bottom: 2px solid #0070f3;
  }

  @media (max-width: 768px) {
    color: #fff; /* White text color on dark background */
    font-size: 1.5rem; /* Larger text for mobile view */
    &.active {
      border-bottom: none; /* Remove border for mobile active link */
    }
  }
`;

// Hamburger Menu Icon Style
const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')}; /* Hide hamburger when menu is open */
    color: #333; /* Color of the icon */
    z-index: 1001; /* Ensure hamburger is above other content */
  }
`;

// Close Icon for Mobile Menu
const CloseIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: #fff; /* White color for close icon on dark background */
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1002; /* Ensure close icon is above everything else in mobile menu */

  @media (min-width: 769px) {
    display: none; /* Hide close icon on larger screens */
  }
`;

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Detection for Active Link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop;
          const offsetHeight = sectionElement.offsetHeight;

          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling on body
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling on body
    }
  }, [menuOpen]);

  // Handle Link Click
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu on link click
  };

  return (
    <NavbarContainer>
      {/* Logo Section */}
      <Logo>
        <img src="/assets/icon.svg" alt="Logo" />
      </Logo>

      {/* Navbar Links */}
      <NavLinks isOpen={menuOpen}>
        <NavLink
          href="#home"
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </NavLink>
        <NavLink
          href="#about"
          className={activeLink === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}
        >
          About
        </NavLink>
        <NavLink
          href="#projects"
          className={activeLink === 'projects' ? 'active' : ''}
          onClick={() => handleLinkClick('projects')}
        >
          Projects
        </NavLink>
        <NavLink
          href="#skills"
          className={activeLink === 'skills' ? 'active' : ''}
          onClick={() => handleLinkClick('skills')}
        >
          Skills
        </NavLink>
        <NavLink
          href="#contact"
          className={activeLink === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}
        >
          Contact
        </NavLink>
      </NavLinks>

      {/* Hamburger Menu Icon */}
      <HamburgerMenu isOpen={menuOpen} onClick={() => setMenuOpen(true)}>
        <FaBars size={24} />
      </HamburgerMenu>

      {/* Close Icon for Mobile Menu */}
      <CloseIcon isOpen={menuOpen} onClick={() => setMenuOpen(false)}>
        <FaTimes size={30} />
      </CloseIcon>
    </NavbarContainer>
  );
};

export default Navbar;
