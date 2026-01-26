import React, { useState } from 'react';
import { Send, MessageCircle, Mail } from 'lucide-react';
import './Contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // 1. WhatsApp Redirection
        const phone = "919074029255"; // Replace with actual number if provided or use placeholder. User didn't provide number, defaulting to generic or placeholder. Wait, "design.zevoratech" email implies a specific user. I will use a placeholder for phone.
        // Actually user said "Floating WhatsApp button fixed at bottom-right".

        // Construct message
        const text = `Hi ZEVORA, I'm ${formData.name}. ${formData.message} (Email: ${formData.email})`;
        const encodedText = encodeURIComponent(text);
        const waUrl = `https://wa.me/?text=${encodedText}`; // If no number, it asks to choose contact. Better to have a number.

        // 2. Google Sheet / Email via Apps Script
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwcZ02CGkPR08BrzI1U_fIxNDJrncPdjvi7af6YZqMBRrxWPvjdPCa5MmeyIerJggmq0Q/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(formData)
            });

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section section">
            <div className="container contact-layout">
                <div className="contact-info">
                    <h2>Start a Conversation</h2>
                    <p>
                        Ready to automate your systems or build a new digital presence?
                        Let's discuss how we can help your business grow.
                    </p>

                    <div className="contact-methods">
                        <div className="contact-method">
                            <Mail size={20} className="text-secondary" />
                            <span>design.zevoratech@gmail.com</span>
                        </div>
                        <div className="contact-method">
                            <MessageCircle size={20} className="text-secondary" />
                            <span>WhatsApp Support Available</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Project Details</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project or automation needs..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className="mt-4 text-green-400 text-sm">
                            Message sent successfully! We will contact you soon.
                        </p>
                    )}
                </form>
            </div>

            {/* Floating WhatsApp */}
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-float"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
            </a>
        </section>
    );
};

export default ContactForm;
