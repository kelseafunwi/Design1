import { Col, Row } from 'react-bootstrap';
import './Work.css';
import workImg1 from '../../assets/img/workImg1.png';

export const Work = () => {
    return (
        <section className="work" >
            <div className="section-header">
                <div id='about-me' className='section-title'>
                    Work
                </div>
            </div>

            <div className="section-paragraph">
                <div className='paragraph'>
                    Some of the noteworthy projects I have built:
                </div>
            </div>

            <Row className='mt-space-top d-flex justify-content-center'>
                <Col>
                    <Row className='d-flex images align-items-stretch justify-content-between'>
                        <Col className='padding48 leftElement' md={6}>
                            <img className='img-fluid' src={workImg1} alt='Work Image 1' />
                        </Col>

                        <Col className='padding48 rightElement' md={6}>
                            <div className='work-content'>
                                <h5>Fiskil</h5>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}