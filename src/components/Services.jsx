import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Infinity as InfinityIcon } from 'lucide-react';
import './Sections.css';

const Services = () => {
    const services = [
        {
            icon: <Monitor size={24} />,
            title: "Web Engineering",
            desc: "Premium, high-performance websites built on modern stacks. We focus on speed, SEO, and flawless user experience."
        },
        {
            icon: <Cpu size={24} />,
            title: "Automation & AI",
            desc: "Connect your website to your business. Automated lead capture, WhatsApp notifications, and AI-driven workflows."
        },
        {
            icon: <InfinityIcon size={24} />,
            title: "Long-Term Growth",
            desc: "We don't just launch and leave. We provide ongoing support, content updates, and system scaling as you grow."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="services" className="section relative overflow-hidden">
            {/* Abstract Background Image behind content - optional, or side by side */}
            {/* For minimal look, let's keep it clean and maybe use image as sidebar or subtle bg */}

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-subtitle">
                        We bridge the gap between stunning design and powerful business logic.
                    </p>
                </motion.div>

                <div className="services-container">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid-3"
                    >
                        {services.map((s, index) => (
                            <motion.div key={index} variants={itemVariants} className="card service-card">
                                <div className="card-icon">{s.icon}</div>
                                <h3 className="card-title">{s.title}</h3>
                                <p className="card-desc">{s.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
