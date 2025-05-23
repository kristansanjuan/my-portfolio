import { Lightbulb } from "lucide-react";
import { User } from "lucide-react";
import { Book } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">A passionate Web Developer</h3>
                        <p className="text-muted-foreground">
                            I build responsive websites using React, HTML,
                            CSS, and Tailwind. I’m also exploring machine
                            learning and enjoy tackling both front-end and
                            technical challenges. With a background in hardware
                            and software, I adapt quickly and work well
                            independently or in teams.
                        </p>

                        <p className="text-muted-foreground">
                            I bring strong time management and collaboration
                            skills. My experience includes HTML, CSS, Java,
                            and C++, plus familiarity with Microsoft Office
                            and Photoshop to support creative and technical tasks.
                        </p>
                        <div className=" flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="/resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Lightbulb className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Projects
                                    </h4>
                                    <p className="text-muted-foreground">
                                        I love turning ideas into real things. From simple
                                        websites to small web apps, every project teaches
                                        me something new.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Soft Skills
                                    </h4>
                                    <p className="text-muted-foreground">
                                        I’m easy to work with — I listen, stay curious,
                                        and adapt fast. I enjoy solving problems with people,
                                        not just code.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Book className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Learning Journey
                                    </h4>
                                    <p className="text-muted-foreground">
                                        I’m always curious whether it’s figuring out how
                                        something works or learning from everyday experiences
                                        and the “aha” moments that come with it. Growth just
                                        doesn’t stop after school.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};