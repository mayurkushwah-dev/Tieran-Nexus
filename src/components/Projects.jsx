import agrosmart from "../assets/projects/agrosmart.png";
import scanner from "../assets/projects/scanner.png";
import checkers from "../assets/projects/checkers.png";
import gesture from "../assets/projects/gesture.png";
import houseprice from "../assets/projects/houseprice.png";
import spam from "../assets/projects/spam.png";
import dsaquest from "../assets/projects/dsaquest.png";
import { useState } from "react";
import { motion } from "framer-motion";

function Projects(){
    const projects = [
        {
            title:"DSA Quest",
            category: "Games",
            image: dsaquest,
            description:"A game-themed repository for learning Data Structures and Algorithms.",
            github: "https://github.com/mayurkushwah-dev/DSA-Quest",
            tech: ["C++", "Algorithms", "Problem Solving"]
        },
        {
            title:"House Price Prediction",
            category: "ML",
            image: houseprice,
            description:"Machine Learning model for predicting house prices.",
            github: "https://github.com/mayurkushwah-dev/House-Price-Prediction",
            tech: ["Python", "Machine Learning", "Data Analysis"]
        },
        {
            title:"Spam Email Classifier",
            category: "ML",
            image: spam,
            description:"ML project that classifies emails as spam or not spam.",
            github: "https://github.com/mayurkushwah-dev/Spam_Email_Classifier",
            tech: ["Python", "NLP", "Machine Learning"]
        },
        {
            title:"AgroSmart",
            category: "ML",
            image: agrosmart,
            description:"Soil analysis and crop recommendation system.",
            github: "https://github.com/mayurkushwah-dev/agrosmart-ml",
            tech: ["Machine Learning", "Computer Vision", "Agriculture"]
        },
        {
            title:"Smart Scanner",
            category: "Android",
            image: scanner,
            description:"Android app for document scanning and PDF generation.",
            github: "https://github.com/mayurkushwah-dev/SmartScanner_v2",
            tech: ["Android", "Java", "PDF Processing"]
        },
        {
            title: "Checkers AI Game",
            category: "Games",
            image: checkers,
            description: "AI-powered American Checkers game featuring intelligent move generation and interactive gameplay.",
            github: "https://github.com/mayurkushwah-dev/checkers-ai-game",
            tech: ["JavaScript", "Game Development", "Web"]
        },
        {
            title: "Gesture Control System",
            category: "ML",
            image: gesture,
            description: "Vision-based gesture recognition system enabling touchless human-computer interaction.",
            github: "https://github.com/mayurkushwah-dev/gesture-control-system",
            tech: ["Computer Vision", "OpenCV", "MediaPipe"]
        },
    ];

    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter(
                project => project.category === filter
            );

    return(
        <motion.section 
        id="projects" 
        className="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
            <h2>Projects</h2>
            <div className="filter-buttons">
                <button
                    className={filter === "All" ? "active-filter" : ""}
                    onClick={() => setFilter("All")}
                >
                    All
                </button>

                <button
                    className={filter === "ML" ? "active-filter" : ""}
                    onClick={() => setFilter("ML")}
                >
                    ML
                </button>

                <button
                    className={filter === "Android" ? "active-filter" : ""}
                    onClick={() => setFilter("Android")}
                >
                    Android
                </button>

                <button
                    className={filter === "Games" ? "active-filter" : ""}
                    onClick={() => setFilter("Games")}
                >
                    Games
                </button>
            </div>
            <div className="projects-container">
                {filteredProjects.map((project,index) => (
                <motion.div 
                className="project-card" 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                    />
                    <h3>{project.title}</h3>
                    <div className="tech-stack">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p>{project.description}</p>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn"
                    >
                        GitHub
                    </a>
                </motion.div>
                ))}
            </div>
        </motion.section>
    );
}   

export default Projects;