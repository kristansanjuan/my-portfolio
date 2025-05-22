import { useState, useEffect } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        );

        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = Math.floor(Math.random() * 7) + 5;
        const newMeteors = [];

        const minDistance = 8;

        const isTooClose = (x, y) => {
            for (const meteor of newMeteors) {
                const dx = meteor.x - x;
                const dy = meteor.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < minDistance) {
                    return true;
                }
            }
            return false;
        };

        for (let i = 0; i < numberOfMeteors; i++) {
            let x, y;
            let attempts = 0;
            do {
                x = Math.random() * 100;
                y = Math.random() * 20;
                attempts++;
                if (attempts > 5) break;
            } while (isTooClose(x, y));

            newMeteors.push({
                id: i,
                size: Math.random() * 2.5 + 1.5,
                x,
                y,
                opacity: Math.random() * 0.7 + 0.3,
                animationDuration: Math.random() * 3 + 3,
                animationDelay: `${Math.random() * 10}s`,
            });
        }
        setMeteors(newMeteors);
    };


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteors) => (
                <div
                    key={meteors.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteors.size * 36 + "px",
                        height: meteors.size * 1 + "px",
                        left: meteors.x + "%",
                        top: meteors.y + "%",
                        animationDelay: meteors.delay,
                        animationDuration: meteors.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};