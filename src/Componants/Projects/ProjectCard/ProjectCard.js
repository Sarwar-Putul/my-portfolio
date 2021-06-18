import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fitnessClub from '../../../image/fitness club.png';
import './ProjectCard.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = () => {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src={fitnessClub} alt="" />
            </div>
            <div className="project-details">
                <div className="project-feature">
                    <p><FontAwesomeIcon icon={faCheckCircle} /> Responsive for mobile and desktop.</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> Private Route Implemented.</p> 
                    <p><FontAwesomeIcon icon={faCheckCircle} /> Dashboard is conditionally separated for admin panel and users.</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> Use Stripe payment system.</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> Used Firebase for Google authentication.</p>
                </div>
                <div className="project-link">                    
                        <a className='icon' href="https://fitness-club-f3feb.web.app"><small>Live </small><FontAwesomeIcon icon={faLink} /></a>
                        <a className='icon' href="https://github.com/Sarwar-Putul/Fitness-Club"><small>Client </small><FontAwesomeIcon icon={faGithub} /></a>
                        <a className='icon' href="https://github.com/Sarwar-Putul/Fitness-Club-Server"><small>Server </small><FontAwesomeIcon icon={faGithub} /></a>                
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;