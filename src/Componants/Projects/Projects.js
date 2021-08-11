import React from 'react';
import './Projects.css';
import fitnessClub from '../../image/fitness club.png'
import chalBilash from '../../image/chal-bilash.png'
import englishLegue from '../../image/EnglishLeague.png'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Projects = () => {

    return (
        <section id="project" className="pb-5">
            <div className='pl-5 ml-5 project-title'>
                <h3>PROJECTS</h3>
            </div>
            <div className="pb-5 mt-5 Container">
                <div className="pb-5 pl-5 ml-5 mr-5 Projects row">
                    <div className="project-card">
                        <div className="project-img">
                            <img src={fitnessClub} alt="" />
                        </div>
                        <div className="project-details">
                            <div className="project-feature">
                                <h5 className="project-name text-center">Fitness Club</h5>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Responsive for mobile and desktop.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Private Route Implemented.</p> 
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Dashboard is conditionally separated for admin panel and users.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Use Stripe payment system.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Used Firebase for Google authentication.</p>
                            </div>
                            <div className="projectLink">                    
                                    <a className='icon' href="https://fitness-club-f3feb.web.app"><small>Live </small><FontAwesomeIcon icon={faLink} /></a>
                                    <a className='icon' href="https://github.com/Sarwar-Putul/Fitness-Club"><small>Client </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a className='icon' href="https://github.com/Sarwar-Putul/Fitness-Club-Server"><small>Server </small><FontAwesomeIcon icon={faGithub} /></a>                
                            </div>
                        </div>
                    </div>
                
                
                    <div className="project-card">
                        <div className="project-img">
                            <img src={chalBilash} alt="" />
                        </div>
                        <div className="project-details">
                            <div className="project-feature">
                                <h5 className="project-name text-center">Chal Bilash</h5>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Responsive for mobile and desktop.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Private Route Implemented.</p> 
                                <p><FontAwesomeIcon icon={faCheckCircle} /> ImageBB for image hosting.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Mongodb as database.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Firebase for Google authentication.</p>
                            </div>
                            <div className="projectLink">                    
                                    <a className='icon' href="https://chal-bilash.web.app"><small>Live </small><FontAwesomeIcon icon={faLink} /></a>
                                    <a className='icon' href="https://github.com/Sarwar-Putul/Chal-Bilash"><small>Client </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a className='icon' href="https://github.com/Sarwar-Putul/Chal-Bilash-Server"><small>Server </small><FontAwesomeIcon icon={faGithub} /></a>                
                            </div>
                        </div>
                    </div>
                
                    <div className="project-card">
                        <div className="project-img">
                            <img src={englishLegue} alt="" />
                        </div>
                        <div className="project-details">
                            <div className="project-feature">
                                <h5 className="project-name text-center">English League</h5>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Responsive for mobile and desktop.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Short history of selected team in description.</p> 
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Dynamic Team name and logo.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Dynamic Team Banner.</p>
                                <p><FontAwesomeIcon icon={faCheckCircle} /> Social media link to visit selected team page.</p>
                            </div>
                            <div className="projectLink">                    
                                    <a className='icon' href="https://practical-goldberg-8e4043.netlify.app"><small>Live </small><FontAwesomeIcon icon={faLink} /></a>
                                    <a className='icon' href="https://github.com/Sarwar-Putul/English-League"><small>Client </small><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-projects ">
                <Link to='/allProjects'><Button className="default-btn">More Projects  <FontAwesomeIcon icon={faShareSquare} /></Button></Link>
            </div>
        </section>
    );
};

export default Projects;