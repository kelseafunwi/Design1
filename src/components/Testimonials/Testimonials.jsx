import { Col, Row } from 'react-bootstrap';
import './Testimonials.css';
import  { SectionHeader } from '../Reusedcomponents/SectionHeader';
import testimonialUserIcon from '../../assets/img/testimonailUserIcon.svg';

export const Testimonials = () => {
    return (
        <section className="testimonials" id='testimonials'>
            <SectionHeader header="Testimonials" paragraph='Nice things people have said about me:' />
            <Row className='mt-space-top'>
                <Col>
                    <Row className="d-flex flex-row align-items-stretch " style={{ gap: '48px'}}>
                        <Col xs={12} md={5}>
                            <div className="testimonial-item">
                                <div className="testimonial-img">
                                    <img src={testimonialUserIcon} alt="Testimonial user icon" />
                                </div>
                                <p>
                                    “Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”
                                 </p>

                                <div className='text-center'>
                                    <h3>John Doe</h3>
                                    <h5>Founder - xyz.com</h5>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={5}>
                            <div className="testimonial-item">
                                <div className="testimonial-img">
                                    <img src={testimonialUserIcon} alt="Testimonial user icon" />
                                </div>
                                <p>
                                    “Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”
                                 </p>

                                <div className='text-center'>
                                    <h3>John Doe</h3>
                                    <h5>Founder - xyz.com</h5>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="testimonial-item">
                                <div className="testimonial-img">
                                    <img src={testimonialUserIcon} alt="Testimonial user icon" />
                                </div>
                                <p>
                                    “Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”
                                 </p>

                                <div className='text-center'>
                                    <h3>John Doe</h3>
                                    <h5>Freelancer</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}