import React from 'react';
import './MainHeader.css';
import sarwar from '../../image/sarwar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const MainHeader = () => {
    return (
        <div className="">
            <main style={{height: '400px'}} className="row" id="main-header">
                <div className="pic col-md-5 ml-5">
                    <img src={sarwar} alt=""/>
                </div>
                <div className="profile col-md-6">
                    <div>
                        <p className="profile-name">S. M. SARWAR</p>
                        <p className="work"> <span>Web Developer</span> <span className="ml-5">Programmer</span></p>
                    </div>
                    <div className="contact">
                        <dl className="row">
                            <dt className="contact-title col-md-3">AGE:</dt>
                            <dd className="col-md-6">32</dd>
                        </dl>
                        <dl className="row">
                            <dt className="contact-title col-md-3">PHONE:</dt>
                            <dd className="col-md-6"><a className="text-white" href="tel:01723231819">01723-231819</a></dd>
                        </dl>
                        <dl className="row">
                            <dt className="contact-title col-md-3">EMAIL:</dt>
                            <dd className="col-md-6"><a className="text-white" href="email">sarwarputul@gmail.com</a></dd>
                        </dl>
                        <dl className="row">
                            <dt className="contact-title col-md-3">ADDRESS:</dt>
                            <dd className="col-md-8 text-white">Tahirpur, Sunamganj, Sylhet, Bangladesh</dd>
                        </dl>
                    </div>
                    <div>
                        <a className="pl-3 icons" href="https://github.com/Sarwar-Putul"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="pl-3 icons" href="https://www.linkedin.com/in/s-m-sarwar-65082488/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="pl-3 icons" href="https://www.facebook.com/sarwar.putul/"><FontAwesomeIcon icon={faFacebook} /></a>                       
                        <a className="pl-3 icons" href="https://twitter.com/SarwarPutul"><FontAwesomeIcon icon={faTwitter} /></a>                   
                    </div>
                </div>   
            </main>
        </div>
    );
};

export default MainHeader;