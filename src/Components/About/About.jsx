import "./About.css";
import { skillsData } from "./skillsData.js";

const About = () => {

    return <>

        <section className="about-section" id="about">
            <div className="header_wrapper">
                <h1 className="heading1">About <span>Me</span></h1>
            </div>
            <p>
               I’m Pawanpreet Kaur, a passionate Web Developer experienced in React, Django, and MySQL. I enjoy developing clean, responsive, and efficient web applications while focusing on performance, usability, and scalable architecture. I’m always eager to learn new technologies and build impactful digital solutions.
            </p>


            <div className="header_wrapper">
                <h1 className="heading1"><span>Tech </span>Stack</h1>
            </div>


            <div className="skills-grid">

                {skillsData.map((item, index) => (

                    <div className="skill-card" key={index}>
                        <img src={item.icon} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                ))}

            </div>


        </section >


    </>;
}


export default About;


