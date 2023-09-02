import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Work } from './components/Work/Work';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        document.title = "Kelsea Portfolio";
    }, []);

    return (
        <>
            <NavBar />
            <Banner />
            <AboutMe />
            <Skills />
            <Experience />
            <Work />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
} 

export default App
