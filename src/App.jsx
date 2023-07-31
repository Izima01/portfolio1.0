import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ScrollUp from './components/ScrollUp';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
