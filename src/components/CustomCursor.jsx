import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.02,
                ease: "power2.out"
            });
            gsap.to(followerRef.current, {
                x: e.clientX - 10,
                y: e.clientY - 10,
                duration: 0.15,
                ease: "power2.out"
            });
        };

        const handleHover = () => {
            gsap.to(cursorRef.current, { scale: 3, opacity: 0.5 });
            gsap.to(followerRef.current, { scale: 1.5 });
        };

        const handleUnhover = () => {
            gsap.to(cursorRef.current, { scale: 1, opacity: 1 });
            gsap.to(followerRef.current, { scale: 1 });
        };

        window.addEventListener('mousemove', moveCursor);

        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleHover);
            link.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleHover);
                link.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={followerRef} className="custom-cursor-follower" />
        </>
    );
}
