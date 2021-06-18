import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="description col-md-9 pl-5  pt-5 m-5">
                    <h1>Hi_</h1>
                    <h4>My name is Sarwar. I am a Front-end Developer and lives in Bangladesh.</h4>
                    <p>I am Junior Web developer. I am an energetic and imaginative young web developer who is able to work alongside other talented IT professionals in developing websites to the very highest standards. I have a high awareness of industry issues and trends. I am an ambitious type who wants to get noticed, and has the drive and massive energy needed to really make a difference to a project. Right now I am looking for an entry level position with an exciting company.
                    </p>
                    <div>
                        <a href="https://drive.google.com/u/0/uc?id=1d0MwrNN16gPjSEUv53X-lrCNKFrSi0FM&export=download"><Button className="default-btn"><FontAwesomeIcon icon={faFileDownload} />  Download CV</Button></a>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutMe;