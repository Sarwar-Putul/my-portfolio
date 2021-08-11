import React from 'react';
import './MainHeader.css';
import sarwar from '../../image/sarwar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';

const MainHeader = () => {
    return (
        <section>
            <main  className="row" id="main-header">
                <div className="pic col-md-5 ml-5">
                    <img src={sarwar} alt=""/>
                </div>
                <div className="profile col-md-6 ml-5">
                    <div className="mb-5">
                        <p className="profile-name">S. M. SARWAR</p>
                        <Typewriter
                            options={{
                                strings: ['WEB DEVELOPER', 'PROGRAMMER', 'MERN STACK DEVELOPER'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className="contact">
                        {/* <dl className="row">
                            <dt className="contact-title col-md-3">AGE:</dt>
                            <dd className="col-md-6">32</dd>
                        </dl> */}
                        <dl className="row pt-5">
                            <dt className="contact-title col-md-3">PHONE:</dt>
                            <dd className="col-md-6"><a className="text-white" href="tel:+8801723231819">+8801723-231819</a></dd>
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
        </section>
    );
};

export default MainHeader;