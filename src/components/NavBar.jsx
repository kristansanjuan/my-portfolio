import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf" },
    { name: "GitHub", href: "https://github.com/kristansanjuan" }
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            {/* NAVBAR */}
            <nav
                className={cn(
                    "fixed top-0 w-full z-40 transition-all duration-300",
                    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
                )}
            >
                <div className="container mx-auto flex items-center justify-between">
                    <a href="#hero" className="text-xl font-bold text-primary">
                        Kristan's <span className="text-foreground">Portfolio</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 p-2"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE OVERLAY MENU */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-7 right-9 text-white"
                    >
                        <X size={28} />
                    </button>

                    {/* Navigation Links */}
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-xl text-white py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
};