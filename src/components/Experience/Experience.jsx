import { Col, Row } from 'react-bootstrap';
import './Experience.css';
import upworkIcon from '../../assets/img/upworkIcon.svg';

export const Experience = () => {
    return (
        <section className="experience" >
            <div className="section-header">
                <div id='about-me' className='section-title'>
                    Experience
                </div>
            </div>

            <div className="section-paragraph">
                <div className='paragraph'>
                    Here is a quick summary of my most recent experiences:
                </div>
            </div>

            <Row className='mt-space-top d-flex justify-content-center'>
                <Col className='d-flex justify-content-center' md={10}>
                    <div className="experience-container d-block">
                        <Row className='d-flex justify-content-between'> 
                            <Col md={3}>
                                <img src={upworkIcon} />
                            </Col>
                            <Col className='text-start' md={5}>
                                <h2>Sr. Frontend Developer</h2> 
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </Col>
                            <Col md={3}>
                                <h5 className='date-text'>Nov 2021 - Present</h5>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col className='d-flex mt-space-top justify-content-center' md={10}>
                    <div className="experience-container d-block">
                        <Row className='d-flex justify-content-between'> 
                            <Col md={3}>
                                <img src={upworkIcon} />
                            </Col>
                            <Col className='text-start' md={5}>
                                <h2>Team Lead</h2> 
                                <ul>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </Col>
                            <Col md={3}>
                                <h5 className='date-text'>Jul 2017 - Oct 2021</h5>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col className='d-flex mt-space-top justify-content-center' md={10}>
                    <div className="experience-container d-block">
                        <Row className='d-flex justify-content-between'> 
                            <Col md={3}>
                                <img src={upworkIcon} />
                            </Col>
                            <Col className='text-start' md={5}>
                                <h2>Full Stack Developer</h2> 
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </Col>
                            <Col md={3}>
                                <h5 className='date-text'>Jul 2017 - Oct 2021</h5>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </section>
    )
}