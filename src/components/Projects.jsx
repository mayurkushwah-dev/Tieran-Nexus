import agrosmart from "../assets/projects/agrosmart.png";
import scanner from "../assets/projects/scanner.png";
import checkers from "../assets/projects/checkers.png";
import gesture from "../assets/projects/gesture.png";
import houseprice from "../assets/projects/houseprice.png";
import spam from "../assets/projects/spam.png";
import dsaquest from "../assets/projects/dsaquest.png";
import { motion } from "framer-motion";

function Projects(){
    const projects = [
        {
            title:"DSA Quest",
            image: dsaquest,
            description:"A game-themed repository for learning Data Structures and Algorithms.",
            github: "https://github.com/mayurkushwah-dev/DSA-Quest"
        },
        {
            title:"House Price Prediction",
            image: houseprice,
            description:"Machine Learning model for predicting house prices.",
            github: "https://github.com/mayurkushwah-dev/House-Price-Prediction"
        },
        {
            title:"Spam Email Classifier",
            image: spam,
            description:"ML project that classifies emails as spam or not spam.",
            github: "https://github.com/mayurkushwah-dev/Spam_Email_Classifier"
        },
        {
            title:"AgroSmart",
            image: agrosmart,
            description:"Soil analysis and crop recommendation system.",
            github: "https://github.com/mayurkushwah-dev/agrosmart-ml"
        },
        {
            title:"Smart Scanner",
            image: scanner,
            description:"Android app for document scanning and PDF generation.",
            github: "https://github.com/mayurkushwah-dev/SmartScanner_v2"
        },
        {
            title: "Checkers AI Game",
            image: checkers,
            description: "AI-powered American Checkers game featuring intelligent move generation and interactive gameplay.",
            github: "https://github.com/mayurkushwah-dev/checkers-ai-game"
        },
        {
            title: "Gesture Control System",
            image: gesture,
            description: "Vision-based gesture recognition system enabling touchless human-computer interaction.",
            github: "https://github.com/mayurkushwah-dev/gesture-control-system"
        },
    ];

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

            <div className="projects-container">
                {projects.map((project,index) => (
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