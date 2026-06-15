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
        <section id="skills" className="skills">
            <h2>Skills</h2>

            <div className="skills-container">
                {skills.map((skill,index) => (
                    <div className="skill-card" key={index}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;