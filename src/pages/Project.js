import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Project = () => {
    //random circle
    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const [size, setSize] = useState();

    useEffect(() => {
        setLeft(Math.floor(Math.random() * 200 + 700) + "px");
        setTop(Math.floor(Math.random() * 200 + 150) + "px");
        setSize("scale(" + (Math.random() + 0.7) + ")");
    }, []);

    const { projectId } = useParams();
    // console.log(projectId);
    const project = projectsData.find(
        (project) => project.id === parseInt(projectId)
    );

    if (!project) {
        return <h2>Projet non trouvé</h2>;
    }

    // mise en place du button

    const currentIndex = projectsData.findIndex(
        (p) => p.id === parseInt(projectId)
    );

    const previousProjectId =
        currentIndex > 0 ? projectsData[currentIndex - 1].id : null;
    const nextProjectId =
        currentIndex < projectsData.length - 1
            ? projectsData[currentIndex + 1].id
            : null;

    //animate
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.35 },
            x: -800,
        },
    };

    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6,
    };

    const imgAnim = {
        initial: {
            opacity: 0,
            x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
            y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <motion.div
                    className="project-main"
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    transition={transition}
                    variants={variants}
                >
                    <div className="project-content">
                        <h1>{project.title}</h1>
                        <p>{project.date}</p>
                        <ul className="languages">
                            {project.languages.map((item) => {
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                    <motion.div
                        initial="intial"
                        animate="visible"
                        variants={imgAnim}
                        transition={{ duration: 1.2 }}
                        className="img-content"
                    >
                        <div className="img-container hover">
                            <span>
                                <h3>{project.title}</h3>
                                <p>{project.infos}</p>
                            </span>
                            <img src={project.img} alt={project.title} className="img" />
                        </div>
                        <div className="button-container">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover"
                            >
                                <span className="button">Voir le site</span>
                            </a>
                        </div>
                    </motion.div>
                    <Buttons
                        left={previousProjectId ? `/projects/${previousProjectId}` : "/"}
                        right={nextProjectId ? `/projects/${nextProjectId}` : "/contact"}
                    />
                </motion.div>
                <span
                    className="random-circle"
                    style={{ left, top, transform: size }}
                ></span>
            </div>
        </main>
    );
};

export default Project;
