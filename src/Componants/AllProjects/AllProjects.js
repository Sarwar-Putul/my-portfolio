import React from 'react';
import fitnessClub from '../../image/fitness club.png';
import chalBilash from '../../image/chal-bilash.png';
import englishLegue from '../../image/EnglishLeague.png';
import emaJhon from '../../image/ema-jhon.png';
import doctorsPortal from '../../image/DoctorsPortal.png';
import spChat from '../../image/SpChat.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import './AllProjects.css'





const projectList = [
    {
        name: 'Fitness Club',
        image: fitnessClub,
        features1: 'Responsive for mobile and desktop.',
        features2: 'Private Route Implemented.',
        features3: 'Dashboard is conditionally separated for admin panel and users.',
        features4: 'Use Stripe payment system.',
        features5: 'Used Firebase for Google authentication.',
        liveLink: 'https://fitness-club-f3feb.web.app',
        clientGit: 'https://github.com/Sarwar-Putul/Fitness-Club',
        serverGit: 'https://github.com/Sarwar-Putul/Fitness-Club-Server',
    },
    {
        name: 'Chal Bilash',
        image: chalBilash,
        features1: 'Responsive for mobile and desktop.',
        features2: 'Private Route Implemented.',
        features3: 'ImageBB for image hosting.',
        features4: 'Mongodb as database.',
        features5: 'Firebase for Google authentication.',
        liveLink: 'https://chal-bilash.web.app',
        clientGit: 'https://github.com/Sarwar-Putul/Chal-Bilash',
        serverGit: 'https://github.com/Sarwar-Putul/Chal-Bilash-Server',
    },
    {
        name: 'English League',
        image: englishLegue,
        features1: 'Responsive for mobile and desktop.',
        features2: 'Short history of selected team in description.',
        features3: 'Dynamic Team name and logo.',
        features4: 'Dynamic Team Banner.',
        features5: 'Social media link to visit selected team.',
        liveLink: 'https://practical-goldberg-8e4043.netlify.app',
        clientGit: 'https://github.com/Sarwar-Putul/English-League',
        serverGit: '',
    },
    {
        name: 'Ema Jhon',
        image: emaJhon,
        features1: 'Responsive for mobile and desktop.',
        features2: 'Private Route Implemented.',
        features3: 'Product Add Section Implemented.',
        features4: 'Firebase Login System Implemented.',
        features5: 'MongoDB For Database',
        liveLink: 'https://ema-john-4f7da.web.app',
        clientGit: 'https://github.com/Sarwar-Putul/ema-john',
        serverGit: 'https://github.com/Sarwar-Putul/ema-john-server',
    },
    {
        name: 'Doctor Portal',
        image: doctorsPortal,
        features1: 'Responsive For Mobile And Desktop.',
        features2: 'Conditional Dashboard Implemented.',
        features3: 'Public Review Section Implemented.',
        features4: 'Admin Can Make An Admin.',
        features5: 'Use Express JS And MongoDB For Server.',
        liveLink: 'https://doctors-portal-b3638.web.app',
        clientGit: 'https://github.com/Sarwar-Putul/doctors-portal',
        serverGit: 'https://github.com/Sarwar-Putul/doctors-portal-server',
    },
    {
        name: 'SP Chat',
        image: spChat,
        features1: 'Responsive For Mobile And Desktop.',
        features2: 'Use Chat JS',
        features3: 'Real Time Messaging.',
        features4: 'Admin Can Make An Admin.',
        features5: 'Community Base Group Chat',
        liveLink: 'https://spchat-app.netlify.app',
        clientGit: 'https://github.com/Sarwar-Putul/sp-chat',
        serverGit: 'https://spchat-app.netlify.app',
    },
]

const AllProjects = () => {

    return (
        <section className="projects-page">
            <div className="container-fluid">
                <div className="projects-title ml-5">
                    <h3>MY ALL PROJECTS</h3>
                </div>
                <div className="allProjects p-5 g-4 row justify-content-center">
                    {
                        projectList.map(project => <ProjectCard project={project}></ProjectCard>)
                    }

                </div>
                <div className="back-btn">
                    <Link to="/"><Button className="default-btn"><FontAwesomeIcon icon={faHandPointLeft} /> Back to Home</Button></Link>
                </div>
            </div>
        </section>
    );
};

export default AllProjects;