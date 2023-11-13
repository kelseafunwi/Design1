import { Col, Row } from 'react-bootstrap';
import './AboutMe.css';
import aboutProfile from '../../assets/img/aboutProfile.jpg';
import  { SectionHeader } from '../Reusedcomponents/SectionHeader';

export const AboutMe = () => {
    return (
        <section className="about-me" style={{ backgroundColor: '#111827' }}>
            <SectionHeader header="About Me" />
            <Row className=' ps-md-5 mt-space-top'>
                <Col md={11}>
                    <Row className='d-flex align-items-stretch justify-content-between'>
                        <Col md={6} className='d-flex pb-5 pb-md-0 align-items-center justify-content-center'>
                            <div className="about-profile">
                                <img className='img-fluid' src={aboutProfile} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <h1>Curious about me? Here you have it:</h1>
                            <p>I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                            
                            <p>Highly motivated and eager learner seeking internship opportunities. Open to working under a mentor and gaining hands-on experience to enhance my skills and knowledge in the field. Committed to bringing enthusiasm, dedication, and a strong work ethic. Level 200 student with 5 months of experience in building web applications with ReactJS, Laravel, NextJs. Seeking to leverage my technical skills and passion for coding to contribute to a dynamic software development team.</p>
                            <Row>
                                <Col md={6}>
                                    <div className='skill'>
                                        <div className='point'></div>Avid learner
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className='skill'>
                                        <div className='point'></div>Part time freelancer
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className='skill'>
                                        <div className='point'></div>Aspiring Software Engineer
                                    </div>
                                </Col>
                            </Row>

                            <p>One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite 😉</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}