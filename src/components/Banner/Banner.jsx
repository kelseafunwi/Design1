import { Col, Row } from 'react-bootstrap';
import './banner.css';
import profileImg from '../../assets/img/profilePic.png';
import locationImg from '../../assets/img/locationImg.png';

export const Banner = () => {
    return (
        <section className="banner" id="banner">
            <Row>
                <Col>
                    <Row className='d-flex justify-content-between'>
                        <Col className='me-2' md={6}>
                            <div className='description-content'>
                                <h1>Hi, I’m Funwi Kelsea 👋</h1>
                                <p>I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>

                                <div className="other-info">
                                    <p><span><img src={locationImg} alt="Location image" /></span> Ahmedabad, India</p>
                                    <p>Available for new projects</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <img className='profileImg' src={profileImg} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}