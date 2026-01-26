import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />

        {/* Placeholder for Work/Process if needed, keeping it minimal for now per "No unnecessary sections" */}

        <ContactForm />
      </main>



      <Footer />
    </div >
  );
}

export default App;
