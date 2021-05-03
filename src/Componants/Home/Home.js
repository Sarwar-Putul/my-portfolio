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

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MainHeader></MainHeader>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Resume></Resume>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>

            
        </div>
    );
};

export default Home;