import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import EducationCard from './EducationCard/EducationCard';
import './Resume.css'


const education = [
    { 
        course: 'Masters of Social Science',
        institution: 'National University',
        session: "2010 – 11" ,
        PassingYear: '2014'
    },
    { 
        course: 'Bachelor of Social Science',
        institution: 'National University',
        session: "2006 – 07" ,
        PassingYear: '2010'
    },
    { 
        course: 'Complete Web Development',
        institution: 'Programming Hero',
        session: "With Jhankar Mahbub" ,
        PassingYear: '2021'
    },
    
]

const Resume = () => {
    return (
        <section id="resume">
            <div className="section-title ml-5 pl-5">
                <h3>RESUME</h3>
            </div>
            <div className="resume-title text-center pb-5 pt-5">
                <h3>EDUCATION</h3>
            </div>
            <div className="row justify-content-center">
                {
                    education.map(learn=> <EducationCard learn={learn}></EducationCard>)
                }

            </div>
            <div>
                <a href="https://drive.google.com/u/0/uc?id=1d0MwrNN16gPjSEUv53X-lrCNKFrSi0FM&export=download"><Button className="cv"><FontAwesomeIcon icon={faFileDownload} />  Download CV</Button></a>
            </div>
            
        </section>
    );
};

export default Resume;