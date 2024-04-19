import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ScrollUp from './components/ScrollUp';
import Skills from './components/Skills/Skills';
import Stars from './components/Stars';

function App() {
  const [showStars, setshowStars] = useState(true);

  return (
    <>
      <Header setshowStars={setshowStars} showStars={showStars} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Stars showStars={showStars}  />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
