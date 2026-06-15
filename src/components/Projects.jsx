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
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="projects-container">
                {projects.map((project,index) => (
                <div className="project-card" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;