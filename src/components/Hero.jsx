import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-glow"></div>
            </div>

            <div className="container">
                <div className="hero-content">

                    {/* SEO H1 (small, subtle) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-title"
                    >
                        Zevora – Web Design & Development Agency
                    </motion.h1>

                    {/* Premium main headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        className="hero-tagline"
                    >
                        Building digital systems that <span className="muted">work for you.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="hero-subtitle"
                    >
                        We engineer premium websites and automated workflows creating silent, powerful growth for modern businesses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                        className="hero-actions"
                    >
                        <a
                            href="https://calendly.com/design-zevoratech/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Book a call
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="scroll-indicator"
            >
                Scroll to explore
            </motion.div>
        </section>
    );
};

export default Hero;
