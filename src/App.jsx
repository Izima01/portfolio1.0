import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
