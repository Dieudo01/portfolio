import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Apropos from './components/about';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Apropos />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
