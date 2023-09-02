import { Col, Row } from 'react-bootstrap';
import './banner.css';
import profileImg from '../../assets/img/profilePic.png';
import locationImg from '../../assets/img/locationImg.png';
import githubIcon from '../../assets/img/github.svg';
import twitterIcon from '../../assets/img/twitter.svg';
import figmaIcon from '../../assets/img/figma.svg';

export const Banner = () => {
    return (
        <section className="banner" id="banner">
            <Row className='d-flex justify-content-center align-items-center'>
                <Col md={10}>
                    <Row className='d-flex align-items-stretch justify-content-between'>
                        <Col md={8} className='order- order-1 '>
                            <div className='px-4 description-content'>
                                <h1>Hi, I’m Kelsea 👋</h1>
                                <p>I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>

                                <div className="other-info mt-space-top">
                                    <div className="item"><div><img src={locationImg} /></div><span>Bueea, Cameroon</span></div>
                                    <div className="item"><div className="point"><div className='ball'></div></div><span>Available for new projects</span></div>
                                </div>

                                <div className="social-icons mt-space-top">
                                    <div className="d-flex">
                                        <div className='icon'>
                                            <a href=""><img src={githubIcon} alt='Github Icon' /></a>
                                        </div>
                                        <div className='icon'>
                                            <a href=""><img src={twitterIcon} alt="Twitter Icon" /></a>
                                        </div>
                                        <div className='icon'>
                                            <a href=""><img src={figmaIcon} alt='Figma Icon' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='order-md-last  d-flex pb-5 pb-md-0 justify-content-center align-items-center' xs={12} md={4}>
                            <div className="profileImg">
                                <img className='img-fluid' src={profileImg} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}