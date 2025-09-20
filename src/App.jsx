import { useRef } from 'react';
import './App.css';
import AboutSection from './components/about/about';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Navbar from './components/navbar/navbar';
import More_Info from './components/moreInfo/moreInfo';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const moreInfoRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, moreInfoRef, footerRef }}
      />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><AboutSection /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={moreInfoRef}><More_Info /></div>
      <div ref={footerRef}><Footer /></div>
    </>
  );
}

export default App;