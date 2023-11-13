import { Col, Row } from 'react-bootstrap';
import './Work.css';
import workImg1 from '../../assets/img/workImg1.png';
import { SectionHeader } from '../Reusedcomponents/SectionHeader';
// import workOpenIcon from '../../assets/img/workOpenIcon.svg';

export const Work = () => {

    const toolsList = ['React', 'Next.js', 'Typescript', 'Nest.js', 'Tailwindcss', 'Figma', 'Git'];

    return (
        <section  className="work" style={{ backgroundColor: '#030712' }} id='work' >
            <SectionHeader paragraph='Some of the noteworthy projects I have built:' header='Work' />
            <Row className='mt-space-top d-flex justify-content-center'>
                <Col md={11}> 
                    <Row className='d-flex align-items-stretch justify-content-center'>
                        <Col md={12} >
                            <Row>
                                <Col className="work-img left-item"  md={6}>
                                    <img src={workImg1} alt='Work Image 1' />
                                </Col>

                                <Col className='work-content right-item' md={6}>
                                    <div>
                                        <h5>Fiskil</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>

                                        <div className='tools'>
                                                {toolsList.map((tool, index) => (
                                                        <div key={index} className="tool">
                                                            {tool}
                                                        </div> )
                                                    )
                                                }
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}