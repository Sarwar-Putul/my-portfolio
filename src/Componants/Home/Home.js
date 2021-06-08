import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import MainHeader from '../MainHeader/MainHeader';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Skill from '../Skill/Skill';
import '../Blog/Blog.css';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Particles from 'react-particles-js';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: 0.2
    }
})


const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Header></Header>
                <Particles 
                    canvasClassName={classes.particlesCanva}
                    params={{
                        particles: {
                            number: {
                                value: 50,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            shape: {
                                type: "star",
                                stroke: {
                                    width: 1,
                                    color: "tomato"
                                }
                            },
                            size: {
                                value:8,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 10,
                                    size_min: 0.1,
                                    sync: true
                                }
                            }
                        }
                    }}
                />
            <MainHeader></MainHeader>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Resume></Resume>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>

            
        </>
    );
};

export default Home;