import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import Buttons from '../components/Buttons';
import { projectsData } from '../data/projectsData';

const Home = () => {

    const firstProjectId = projectsData.length > 0 ? projectsData[0].id : null;

    return (
        <div>
            <Mouse />
            <div className="home">
                <Navigation />
                < SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>PARIS AGENCY</h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
                <Buttons right={firstProjectId ? `/projects/${firstProjectId}` : "/contact"} />
            </div>
        </div>

    );
};

export default Home;