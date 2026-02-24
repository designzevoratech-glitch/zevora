import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

const outcomes = [
    {
        category: "Architecture",
        achievement: "Performance First",
        detail: "We believe a digital experience is only as good as its engine. Our standard is sub-second load times and 100% responsive reliability.",
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
        category: "Precision",
        achievement: "Interaction Logic",
        detail: "Every movement on a Zevora site is intentional. We deploy advanced physics-based motion to create tactile, high-end interfaces.",
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop"
    },
    {
        category: "Growth",
        achievement: "Conversion Focus",
        detail: "For our selective client base, we prioritize ROI. Every pixel and line of code is engineered to drive leads and sustainable brand growth.",
        img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop"
    }
];

const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export default function DesignedOutcomes() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} id="vision" className="section" style={{ backgroundColor: '#050505' }}>
            <motion.div
                className="container"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.15 }}
            >
                <div style={{ marginBottom: '10vh' }}>
                    <motion.span variants={itemVariants} style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 800, display: 'block' }}>The Zevora Vision</motion.span>
                    <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', marginTop: '1.5rem' }}>Studio <br /> Philosophy</motion.h2>
                    <motion.p variants={itemVariants} style={{ maxWidth: '600px', fontSize: '1.25rem', marginTop: '2rem', opacity: 0.8, fontWeight: 300 }}>
                        We don't just build websites; we engineer digital legacies. Our philosophy is rooted in the intersection of technical precision and cinematic design.
                    </motion.p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30vh' }}>
                    {outcomes.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            style={{ position: 'relative' }}
                        >
                            <OutcomeCard item={item} index={i} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .outcome-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 8vw;
                    align-items: center;
                }
                .outcome-media {
                    position: relative;
                    height: 70vh;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .outcome-content {
                    padding: 2rem 0;
                }
                @media (max-width: 991px) {
                    .outcome-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .outcome-media {
                        height: 50vh;
                    }
                }
            `}} />
        </section>
    );
}

function OutcomeCard({ item, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className="outcome-grid">
            <div className="outcome-content" style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <motion.div style={{ opacity }}>
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        fontWeight: 900,
                        display: 'block',
                        marginBottom: '2rem'
                    }}>
                        0{index + 1} — {item.category}
                    </span>
                    <h3 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        margin: '0 0 2rem 0',
                        lineHeight: 1,
                        fontWeight: 800
                    }}>
                        {item.achievement}
                    </h3>
                    <p style={{
                        maxWidth: '480px',
                        fontSize: '1.2rem',
                        lineHeight: 1.6,
                        color: 'var(--text-dim)',
                        fontWeight: 300
                    }}>
                        {item.detail}
                    </p>
                </motion.div>
            </div>

            <div className="outcome-media" style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <motion.img
                    src={item.img}
                    alt={item.achievement}
                    style={{
                        width: '100%',
                        height: '130%',
                        objectFit: 'cover',
                        y: yImage,
                        scale: 1.1,
                        filter: 'brightness(0.8) contrast(1.1)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(5,5,5,0.4) 100%)'
                }} />
            </div>
        </div>
    );
}
