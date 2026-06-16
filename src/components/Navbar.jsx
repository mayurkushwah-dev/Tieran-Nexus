import { useEffect, useState } from "react";

function Navbar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    },
    {
        threshold: 0.1,
    }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    return () => observer.disconnect();
    }, []);

    return (
    <nav className="navbar">
        <div className="logo">TIERAN<span>.NEXUS</span></div>

        <ul className="nav-links">
        <li>
            <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            >
            About
            </a>
        </li>

        <li>
            <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            >
            Skills
            </a>
        </li>

        <li>
            <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            >
            Projects
            </a>
        </li>

        <li>
            <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            >
            Contact
            </a>
        </li>
        </ul>
    </nav>
    );
}

export default Navbar;