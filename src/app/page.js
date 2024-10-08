'use client';
import Link from 'next/link';
import styled from 'styled-components';
import HomePage from './home/page';
import AboutPage from './about/page';
import ProjectsPage from './projects/page';
import SkillsPage from './skills/page';
import ContactPage from './contact/page';

const Page = () => {
  return (
    <>
      <main>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <SkillsPage/>
        <ContactPage />
      </main>
    </>
  );
};

export default Page;
