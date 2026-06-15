import { motion } from "framer-motion";

function Projects(){
    const projects = [
        {
            title:"DSA Quest",
            description:"A game-themed repository for learning Data Structures and Algorithms.",
        },
        {
            title:"House Price Prediction",
            description:"Machine Learning model for predicting house prices.",
        },
        {
            title:"Spam Email Classifier",
            description:"ML project that classifies emails as spam or not spam.",
        },
        {
            title:"AgroSmart",
            description:"Soil analysis and crop recommendation system.",
        },
        {
            title:"Smart Scanner",
            description:"Android app for document scanning and PDF generation.",
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
                </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Projects;