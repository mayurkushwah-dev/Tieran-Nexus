import { motion } from "framer-motion";

function Contact(){
    return(
        <motion.section 
        id="contact" 
        className="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        >
            <h2>Contact</h2>

            <p>
                Let's Build Something Amazing Together.
            </p>

            <p>
                I'm passionate about Data Structures & Algorithms,
                Machine Learning, Android Development, and modern web technologies.
                Feel free to reach out if you'd like to collaborate,
                discuss ideas, or connect professionally.
            </p>

            <div className="contact-links">
                <a href="mailto:mayur.241b623@gmail.com">
                    Email
                </a>

                <a
                    href="https://github.com/mayurkushwah-dev"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/mayur-kushwah"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume
                </a>
            </div>
        </motion.section>
    );
}

export default Contact;