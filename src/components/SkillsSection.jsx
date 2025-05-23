import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
    { name: "JavaScript", level: "Basic", category: "Programming" },
    { name: "Java", level: "Basic", category: "Programming" },
    { name: "C++", level: "Basic", category: "Programming" },
    { name: "Python", level: "Basic", category: "Programming" },

    { name: "React", level: "Beginner", category: "Web Development" },
    { name: "Tailwind CSS", level: "Beginner", category: "Web Development" },
    { name: "HTML", level: "Intermediate", category: "Web Development" },
    { name: "CSS", level: "Intermediate", category: "Web Development" },
    { name: "SCSS", level: "Basic", category: "Web Development" },

    { name: "Machine Learning", level: "Basic", category: "Data Science" },

    { name: "Microsoft Office", level: "Advanced", category: "Productivity" },
    { name: "Photoshop", level: "Intermediate", category: "Productivity" },
    { name: "Filmora", level: "Advanced", category: "Productivity" },
    { name: "Premiere Pro", level: "Intermediate", category: "Productivity" },
    { name: "GitHub", level: "Intermediate", category: "Productivity" },
];

const levelToWidth = {
    "Basic": "25%",
    "Beginner": "35%",
    "Intermediate": "65%",
    "Advanced": "85%"
};

const categories = ["all", "Programming", "Web Development", "Data Science", "Productivity"];

export const SkillsSection = () => {
    const [activeCategory, setactiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setactiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card rounded-lg p-6 shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounder-full origin-left animate-[grow_1.5s_east_out]" style={{ width: levelToWidth[skill.level] }} />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{levelToWidth[skill.level]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
};