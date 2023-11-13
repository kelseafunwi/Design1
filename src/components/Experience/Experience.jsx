import { Col, Row } from 'react-bootstrap';
import './Experience.css';
import upworkIcon from '../../assets/img/upworkIcon.svg';
import { SectionHeader } from '../Reusedcomponents/SectionHeader';

export const Experience = () => {
    return (
        <section className="experience" style={{ backgroundColor: '#111827' }} >
            <SectionHeader header='Experience' paragraph='Here is a quick summary of my most recent experiences:' />

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
                
            </Row>
        </section>
    )
}