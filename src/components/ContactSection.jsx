import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you as soon as possible.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm currently seeking opportunities to grow and contribute as a
                    developer. If you're looking for someone passionate, adaptable,
                    and eager to learn, feel free to reach out — I'd be happy to connect
                    and discuss how I can be a good fit for your team.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
                    <div className="space-y-8 justify-center items-center">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 max-w-md mx-auto">
                            <div className="flex space-x-4 justify-center items-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="text-primary h-6 w-6" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:kristansanjuan262@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        kristansanjuan262@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex justify-center items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="text-primary h-6 w-6" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+639774528049"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +63 977 452 8049
                                    </a>
                                </div>
                            </div>

                            <div className="flex justify-center items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-medium">Location</h4>
                                    <span
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Sta. Cruz Guiguinto, Bulacan, Philippines
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/kristansanjuan262/"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://www.facebook.com/OtakuSenseiSJ001/"
                                    target="_blank"
                                >
                                    <Facebook />
                                </a>
                                <a
                                    href="https://www.instagram.com/otaku_sensei001/"
                                    target="_blank"
                                >
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="Name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your name..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your email..."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <input
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Enter your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                    isSubmitting && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};