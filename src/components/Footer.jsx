import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                {/* Brand Column */}
                <div className="footer-brand">
                    <a href="#" className="footer-logo">zevora</a>
                    <p className="footer-tagline">
                        HELPING BUSINESSES AUTOMATE THEIR OPERATIONS WITH PREMIUM DIGITAL SOLUTIONS.
                    </p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/zevora.globe?igsh=eDB4anl3cXo5M29k" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                        <a href="#" className="social-icon"><Youtube size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#services">Services</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-column">
                    <h3 className="footer-heading">Services</h3>
                    <ul className="footer-links">
                        <li><a href="#services">Web Engineering</a></li>
                        <li><a href="#services">Automation & AI</a></li>
                        <li><a href="#services">Long-Term Growth</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="footer-column">
                    <h3 className="footer-heading">Contact Us</h3>
                    <ul className="footer-contact">
                        <li>
                            <Mail size={16} className="contact-icon" />
                            <a href="mailto:hello@zevora.com">design.zevoratech@gmail.com</a>
                        </li>
                        <li>
                            <Phone size={16} className="contact-icon" />
                            <a href="tel:+15550000000">+91 9489386476</a>
                        </li>
                    </ul>
                    <a href="#contact" className="footer-cta">
                        Book a Free Call
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Zevora. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
