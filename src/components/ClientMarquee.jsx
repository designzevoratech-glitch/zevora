import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const clients = [
    {
        name: "Green Falls Garden Designer",
        logo: "/clients/green-falls.png",
        url: "https://www.greenfallsgardendesigner.com/",
        invert: false
    },
    {
        name: "Silver Nest",
        logo: "/clients/silver-nest.jpg",
        url: "#",
        invert: false
    },
];

export default function ClientMarquee() {
    return (
        <section style={{
            padding: '4rem 0',
            background: 'black',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div className="container" style={{ marginBottom: '4rem' }}>
                <span style={{
                    fontSize: '0.8rem',
                    letterSpacing: '5px',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    fontWeight: 800
                }}>
                    OUR TRUSTED CLIENTS
                </span>
            </div>

            <div style={{ display: 'flex', width: '200%' }}>
                <motion.div
                    animate={{ x: [0, '-50%'] }}
                    transition={{
                        duration: 20, // Faster speed as requested
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15vw',
                        paddingRight: '15vw'
                    }}
                >
                    {clients.concat(clients).map((client, i) => (
                        <motion.a
                            key={i}
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: client.name.includes("Green Falls") ? '#fff' : 'transparent',
                                padding: client.name.includes("Green Falls") ? '2rem' : '0',
                                opacity: 0.8,
                                transition: 'var(--transition-smooth)',
                                flexShrink: 0
                            }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    height: 'clamp(140px, 18vh, 200px)',
                                    filter: 'none',
                                    objectFit: 'contain'
                                }}
                            />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
