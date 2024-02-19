import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import CopyToClipboard from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
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
                        <p>Yannis Dev & From Scratch- 2024</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;