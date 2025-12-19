import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mark TJ T. Permison | Full Stack Developer & Business Application Developer</title>
        <meta
          name="description"
          content="Portfolio of Mark TJ T. Permison - Entry-Level Full Stack Developer with 9+ months experience in software development, quality assurance, and business applications."
        />
        <meta
          name="keywords"
          content="Mark Permison, Full Stack Developer, Business Application Developer, Web Developer, QA, Software Developer, Philippines"
        />
        <meta property="og:title" content="Mark TJ T. Permison | Full Stack Developer" />
        <meta
          property="og:description"
          content="Entry-Level Full Stack Developer with experience in software development and quality assurance."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://markpermison.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
