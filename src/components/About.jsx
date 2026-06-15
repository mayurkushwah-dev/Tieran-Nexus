import { motion } from "framer-motion";

function About(){
    return(
        <motion.section
        id="about" 
        className="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >

            <h2>About Me</h2>

            <p>
                I'm Mayur Kushwah, a Computer Science undergraduate at JUET Guna.
                I enjoy solving DSA problems, building Machine Learning projects,
                developing Android applications, and exploring modern web technologies.
            </p>

        </motion.section>
    );
}

export default About;