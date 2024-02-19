import React from 'react';
import { NavLink } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                    <li>acceuil</li>
                </NavLink>
                <li className="nav-portfolio">
                    portfolio
                    <ul className="nav-projects">
                        {projectsData.map((project) => (
                            <NavLink key={project.id} to={`/projects/${project.id}`} className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                                <li>Project-{project.id}</li>
                            </NavLink>
                        ))}
                    </ul>
                </li>

                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                    <li>contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;