import React from "react";
import aboutCSS from './../About/About.module.css';

import aboutImg from '/src/assets/about-bg.png';

function About() {
    return(
        <div className={`${aboutCSS.about_wrapper} section`} id="about">
            <div className={aboutCSS.about_image}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={aboutCSS.about_content}>
                <h2>Discover Organized <br /> Advantures the , <br /> Ultimate Travel Hack </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum ipsa expedita praesentium aspernatur obcaecati cumque esse animi atque provident.</p>

                <div className={aboutCSS.about}>
                    <p><i className="ri-building-4-line"></i> Accomodation</p>
                    <p><i className="ri-car-line"></i> Transpotation allowance</p>
                    <p><i className="ri-magic-line"></i> Exclusive Experiences</p>
                    <p><i className="ri-instance-line"></i> local recommendation</p>
                    <p><i className="ri-pin-distance-line"></i> Personalized trip crafting</p>
                    <p><i className="ri-phone-line"></i> 27/7 Support</p>
                </div>
            </div>
        </div>
    )
}

export default About;