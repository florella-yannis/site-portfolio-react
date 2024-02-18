import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");

        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`
            });

            link.addEventListener("mouseleave", () => {
                link.style.transform = "";
            })
        })
    }

    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://www.facebook.com" target='blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" target='blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target='blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;