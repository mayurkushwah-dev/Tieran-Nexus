import { motion } from "framer-motion";

function Skills(){
    const skills = [
        "C++",
        "Python",
        "SQL",
        "DSA",
        "Machine Learning",
        "Android Development",
        "Git", 
        "GitHub",
        "React",
        "Problem Solving",
    ];

    return (
        <motion.section
        id="skills" 
        className="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >

            <h2>Skills</h2>

            <div className="skills-container">
                {skills.map((skill,index) => (
                    <motion.div 
                    className="skill-card" 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05,
                    }}
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Skills;