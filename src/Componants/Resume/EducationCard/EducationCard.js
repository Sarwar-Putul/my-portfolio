import React from 'react';
import './EducationCard.css'

const EducationCard = ({learn}) => {
    return (
        <div className="col-md-3">
            <div className="course">
                <h4 className="course-name">{learn.course}</h4>
                <p className="institute">{learn.institution}</p>
                <p className="session">{learn.session}</p>
                <p className="year">{learn.PassingYear}</p>
            </div>

            
        </div>
    );
};

export default EducationCard;