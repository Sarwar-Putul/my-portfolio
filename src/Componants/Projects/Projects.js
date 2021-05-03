import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Projects.css';
import fitnessClub from '../../image/fitness club.png'
import chalBilash from '../../image/chal-bilash.png'
import englishLegue from '../../image/EnglishLeague.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section id="project">
            <div className='project-title ml-5 pl-5'>
                <h3>PROJECTS</h3>
            </div>
            <div className="Container mt-5">
                <div className="row pb-5 justify-content-center">
                    <Card className="card col-md-3 pl-2">
                        <Card.Img variant="top" style={{height: '300px'}} src={fitnessClub} />
                        <Card.Body>
                        <Card.Title>Fitness Club <br/>
                                <span >
                                    <a className='icon pl-2' href="https://fitness-club-f3feb.web.app"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    <a className='icon pl-2' href="https://github.com/Sarwar-Putul/Fitness-Club"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                    <a className='icon pl-2' href="https://github.com/Sarwar-Putul/Fitness-Club-Server"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                </span>
                        </Card.Title>
                        <Card.Text>
                            <p>1. Responsive for mobile and desktop.</p>
                            <p>2. Private Route Implemented.</p> 
                            <p>3. Dashboard is conditionally separated for admin panel and users.</p>
                            <p>4. Use Stripe payment system.</p>
                            <p>5. Used Firebase for Google authentication.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card col-md-3 ml-2 mr-2">
                        <Card.Img variant="top" style={{height: '300px'}} src={chalBilash} />
                        <Card.Body>
                        <Card.Title>Chal Bilash <br/>
                            <span>
                                <a className='icon pl-2' href="https://chal-bilash.web.app"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                <a className='icon pl-2' href="https://github.com/Sarwar-Putul/Chal-Bilash"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                <a className='icon pl-2' href="https://github.com/Sarwar-Putul/Chal-Bilash-Server"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                            </span>
                        
                        </Card.Title>
                        <Card.Text>
                            <p>1. Responsive for mobile and desktop.</p>
                            <p>2. Private Route Implemented.</p>
                            <p>3. ImageBB for image hosting.</p>
                            <p>4. Mongodb as database.</p>
                            <p>5. Firebase for Google authentication.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card col-md-3 pl-2">
                        <Card.Img variant="top" style={{height: '300px'}} src={englishLegue} />
                        <Card.Body>
                        <Card.Title>English League <br/>
                            <span>
                                <a className='icon pl-2' href="https://practical-goldberg-8e4043.netlify.app"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                <a className='icon pl-2' href="https://github.com/Sarwar-Putul/English-League"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                            </span>
                        
                        </Card.Title>
                        <Card.Text>
                            <p>1. Responsive for mobile and desktop.</p>
                            <p>2. Short history of selected team in description.</p>
                            <p>3. Dynamic Team name and logo.</p>
                            <p>4. Dynamic Team Banner.</p>
                            <p>5. Social media link to visit selected team page.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Projects;