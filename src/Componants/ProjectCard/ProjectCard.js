import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectCard.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src={project.image} alt="" />
            </div>
            <div className="project-details">
                <div className="project-feature">
                    <h5 className="project-name text-center">{project.name}</h5>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {project.features1}</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {project.features2}</p> 
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {project.features3}</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {project.features4}</p>
                    <p><FontAwesomeIcon icon={faCheckCircle} /> {project.features5}</p>
                </div>
                <div className="project-link">                    
                        <a className='icon' href={project.liveLink}><small>Live </small><FontAwesomeIcon icon={faLink} /></a>
                        <a className='icon' href={project.clientGit}><small>Client </small><FontAwesomeIcon icon={faGithub} /></a>
                        <a className='icon' href={project.serverGit}><small>Server </small><FontAwesomeIcon icon={faGithub} /></a>                
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;