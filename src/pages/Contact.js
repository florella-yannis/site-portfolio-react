import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import CopyToClipboard from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import { projectsData } from '../data/projectsData';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';

const Contact = () => {

    const lastProjectId = projectsData.length > 0 ? projectsData[projectsData.length - 1].id : null;

    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 200,
        },
    };

    return (
        <main>
            <Mouse />
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.4 }}
                className="contact"
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="adress">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>1 rue de Paris</p>
                            <p>75001 Paris</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0644933913" className="hover">
                                <p style={{ cursor: "pointer" }} className='clipboard' onClick={() => alert("Téléphone copié !")} >064493913</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="parisagency@gmail.com" className="hover">
                                <p style={{ cursor: "pointer" }} className='clipboard' onClick={() => alert("Email copié !")} >parisagency@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Yannis Dev - 2024</p>
                    </div>
                </div>
                <Buttons left={lastProjectId ? `/projects/${lastProjectId}` : null} />
            </motion.div>
        </main>
    );
};

export default Contact;