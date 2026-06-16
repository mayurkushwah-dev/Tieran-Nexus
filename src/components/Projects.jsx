import { motion } from "framer-motion";

function Projects(){
    const projects = [
        {
            title:"DSA Quest",
            description:"A game-themed repository for learning Data Structures and Algorithms.",
            github: "https://github.com/mayurkushwah-dev/DSA-Quest"
        },
        {
            title:"House Price Prediction",
            description:"Machine Learning model for predicting house prices.",
            github: "https://github.com/mayurkushwah-dev/House-Price-Prediction"
        },
        {
            title:"Spam Email Classifier",
            description:"ML project that classifies emails as spam or not spam.",
            github: "https://github.com/mayurkushwah-dev/Spam_Email_Classifier  "
        },
        {
            title:"AgroSmart",
            description:"Soil analysis and crop recommendation system.",
            github: "https://github.com/mayurkushwah-dev/agrosmart-ml"
        },
        {
            title:"Smart Scanner",
            description:"Android app for document scanning and PDF generation.",
            github: "https://github.com/mayurkushwah-dev/SmartScanner_v2"
        },
        {
            title: "Checkers AI Game",
            description: "AI-powered American Checkers game featuring intelligent move generation and interactive gameplay.",
            github: "https://github.com/mayurkushwah-dev/checkers-ai-game"
        },
        {
            title: "Gesture Control System",
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