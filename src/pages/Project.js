import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Buttons from '../components/Buttons';


const Project = () => {

    const { projectId } = useParams();
    // console.log(projectId);
    const project = projectsData.find(project => project.id === parseInt(projectId));

    if (!project) {
        return <h2>Projet non trouvé</h2>;
    }

    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <div className="project-main">
                    <div className="project-content">
                        <h1>{project.title}</h1>
                        <p>{project.date}</p>
                        <ul className="languages">
                            {project.languages.map((item) => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className="img-content">
                        <div className="img-container hover">
                            <span>
                                <h3>{project.title}</h3>
                                <p>{project.infos}</p>
                            </span>
                            <img src={project.img} alt={project.title} className="img" />
                        </div>
                        <div className="button-container">
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='hover'>
                                <span className="button">Voir le site</span>
                            </a>
                        </div>
                    </div>
                </div>
                <Buttons />
            </div>
        </main>

    );
};

export default Project;