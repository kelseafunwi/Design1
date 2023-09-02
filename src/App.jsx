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
            <div style={{backgroundColor: '#030712'}}>
                <NavBar />
            </div>
            
            <div style={{backgroundColor: '#030712'}}>
                <Banner />
            </div>

            <div style={{ backgroundColor: '#111827' }}>
                <AboutMe />
            </div>

            <div style={{ backgroundColor: '#030712' }}>
                <Skills />
            </div>

            <div style={{ backgroundColor: '#111827' }}>
                <Experience />
            </div>

            <div style={{ backgroundColor: '#030712' }}>
                <Work />
            </div>

            <div style={{ backgroundColor: '#111827' }}>
                <Testimonials />
            </div>

            <div style={{ backgroundColor: '#030712' }}>
                <Contact />
            </div>

            <div style={{ backgroundColor: '#111827' }}>
                <Footer />
            </div>
        </>
    )
} 

export default App
