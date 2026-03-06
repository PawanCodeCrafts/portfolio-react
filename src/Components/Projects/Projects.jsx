import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import newsapp from "../../assets/newsapp.png";
import portfolio from "../../assets/portfolio.png";
import desirasoi from "../../assets/desirasoi.png";

const projects = [
    {
        title: "Namaste News",
        desc: "News App is a modern and user-friendly application that delivers real-time news from various sources. Get breaking news, trending topics, and category-wise articles in a clean and minimalistic UI.",
        tech: ["Bootstrap", "React.js"],
        image: newsapp,
        github: "https://github.com/PawanCodeCrafts/NamasteNews",
        live: "https://pawancodecrafts.github.io/NamasteNews/",
    },
    {
        title: "Restaurant webpage",
        desc: " Desi Rasoi - A simple restaurant landing page built with HTML, CSS, and smooth AOS animations.",
        tech: ["html", "CSS", "Javascript", "aos-animation"],
        image: desirasoi,
        github: "https://github.com/PawanCodeCrafts/desirasoi",
        live: "https://pawancodecrafts.github.io/DesiRasoi/",
    },
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="header_wrapper">
                <h1 className="heading1">
                    Proj<span>ects</span>
                </h1>
                <p style={{ "padding-top": "23px", "letter-spacing": "1px", "font-size": "25px", }}>Some Things That I've Built !</p>
            </div>

            <div className="projects-wrapper">
                {projects.map((project, index) => (
                    <div
                        className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
                        key={index}
                    >
                        {/* Content */}
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>

                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <FaGithub /> Code
                                </a>
                                <a href={project.live} target="_blank" rel="noreferrer">
                                    <FaExternalLinkAlt /> Live
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

