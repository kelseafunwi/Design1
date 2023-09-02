import { Col, Row } from 'react-bootstrap';
import './Contact.css';
import  { SectionHeader } from '../Reusedcomponents/SectionHeader';
import contactMail from '../../assets/img/contactMail.svg';
import contactCopy from '../../assets/img/contactCopy.svg';
import contactPhone from '../../assets/img/contactPhone.svg';
import githubIcon from '../../assets/img/github.svg';
import twitterIcon from '../../assets/img/twitter.svg';
import figmaIcon from '../../assets/img/figma.svg';



export const Contact = () => {
    return (
        <section className="contact" >
            <SectionHeader header="Get in touch" paragraph="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
            <Row className='mt-space-top'> 
                <Col>
                    <Row className='d-flex flex-column' style={{gap: '46px'}}>
                        <Col md={12}>
                            <div className="d-flex info justify-content-center">
                                <img src={contactMail} alt='Contact Mail Icon' />
                                <h1 className='info-text'>funwikelseandohnwi@gmail.com</h1>
                                <img src={contactCopy} alt='Contact Copy Icon' />
                            </div>
                            <div className="d-flex info justify-content-center">
                                <img  src={contactPhone} alt='Contact Mail Icon' />
                                <h1 className='info-text'>+237 653847697</h1>
                                <img  src={contactCopy} alt='Contact Copy Icon' />
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center' md={12}>
                            <div className="findmelinks">
                                <div className="d-block text">
                                    You may also find me on these platforms!
                                </div>
                                <div className="social-icons mt-space-top">
                                    <div className="d-flex justify-content-center">
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
                    </Row>
                </Col>
            </Row>
        </section>
    )
}