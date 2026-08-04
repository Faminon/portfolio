import React, { useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Experiences from './pages/Experiences';
import { gsap, prefersReducedMotion } from './lib/motion';

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (prefersReducedMotion() || !containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
    );
  }, [pathname]);

  return (
    <main ref={containerRef} style={{ position: 'relative', zIndex: 10 }}>
      {children}
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </PageTransition>
      <Footer />
    </Router>
  );
}
