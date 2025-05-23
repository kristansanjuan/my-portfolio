import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Black Bean Company",
        description: "A hotel reservation system with both user and admin sides. Users can reserve rooms, order additional necessities like pillows and toiletries, and receive a detailed receipt for each booking.",
        image: "/projects/project_1.png",
        tags: ["Java"],
        demoUrl: "https://www.youtube.com/watch?v=0v1X2g3j8aA",
        githubUrl: "https://github.com/kristansanjuan/Hotel-Reservation.git",
    },

    {
        id: 2,
        title: "EcoSort",
        description: "A Mobile application using Image Recognition Technology to classify common household waste into biodegradable, non-biodegradable, recyclable, and e-waste.",
        image: "/projects/project_2.png",
        tags: ["Java", "TensorFlow lite,", "Android"],
        demoUrl: "https://drive.google.com/file/d/1wPKKrFPyllY7Rjg_uw9ZjL05aac8uWGZ/view?usp=sharing",
        githubUrl: "https://github.com/kristansanjuan/Trash-App.git",
    },

    {
        id: 3,
        title: "Ellavill Baking Supplies Inventory System",
        description: "A web application for managing inventory and sales for a local baking supply shop.",
        image: "/projects/project_3.png",
        tags: ["Javascript", "Html", "Css", "Php"],
        githubUrl: "https://github.com/kristansanjuan/IMS.git",
    },

    {
        id: 4,
        title: "Glass Portfolio",
        description: "A responsive personal portfolio web application featuring a modern glassmorphism design, created for showcasing my OJT projects and skills.",
        image: "/projects/project_4.png",
        tags: ["Javascript", "Html", "Css"],
        githubUrl: "https://github.com/kristansanjuan/Portfolio.git",
    },

    {
        id: 5,
        title: "GV-Live Landing Page",
        description: "A landing page web application for my OJT company, built with React, SCSS, and Framer Motion to create smooth parallax scrolling effects.",
        image: "/projects/project_5.png",
        tags: ["React", "scss"],
        githubUrl: "https://github.com/kristansanjuan/GV-Live.git",
    },

    {
        id: 6,
        title: "Machine Learning Classification",
        description: "A machine learning model trained to classify political bias into left, right, or center categories, optimized using hyperparameter grid search.",
        image: "/projects/project_6.png",
        tags: ["Python"],
        githubUrl: "https://github.com/kristansanjuan/Machine_Learning_Classification.git",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. I love to build things that make a difference.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card shadow-xs rounded-lg overflow-hidden card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="border rounded-full px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/kristansanjuan"
                        target="_blank"
                        className="cosmic-button w-fit items-center flex mx-auto gap-2"
                    >
                        Check my GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>);
};