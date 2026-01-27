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
        <section className="seo-marquee">
          <div className="marquee-track">
            <span>
              Zevora is a Web Design & Development Agency • SEO Optimized Websites • Automation & AI Solutions • Digital Growth for Modern Businesses •
            </span>
            <span>
              Zevora is a Web Design & Development Agency • SEO Optimized Websites • Automation & AI Solutions • Digital Growth for Modern Businesses •
            </span>
          </div>
        </section>
        <About />
        <Services />

        {/* Placeholder for Work/Process if needed, keeping it minimal for now per "No unnecessary sections" */}
        <section className="seo-marquee">
          <div className="marquee-track">
            <span>
              Zevora is a Web Design & Development Agency • SEO Optimized Websites • Automation & AI Solutions • Digital Growth for Modern Businesses •
            </span>
            <span>
              Zevora is a Web Design & Development Agency • SEO Optimized Websites • Automation & AI Solutions • Digital Growth for Modern Businesses •
            </span>
          </div>
        </section>


        <ContactForm />
      </main>



      <Footer />
    </div >
  );
}

export default App;
