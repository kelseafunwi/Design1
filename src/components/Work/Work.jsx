import { Col, Row } from 'react-bootstrap';
import './Work.css';
import workImg1 from '../../assets/img/workImg1.png';
import { SectionHeader } from '../Reusedcomponents/SectionHeader';

export const Work = () => {

    const toolsList = ['React', 'Next.js', 'Typescript', 'Nest.js', 'PostgreSQL', 'Tailwindcss', 'Figma', 'Cypress', 'Storybook', 'Git'];

    return (
        <section className="work" >
            <SectionHeader paragraph='Some of the noteworthy projects I have built:' header='Work' />
            <Row className='mt-space-top d-flex justify-content-center'>
                <Col> 
                    <Row className='d-flex images gy-5 align-items-stretch justify-content-center'>
                        <Col className="work-img left-item" md={6}>
                            <div>
                                <img className='img-fluid' src={workImg1} alt='Work Image 1' />
                            </div>
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

                        <Col className='work-content left-item' md={6}>
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

                        <Col className="work-img right-item" md={6}>
                            <div>
                                <img className='img-fluid' src={workImg1} alt='Work Image 1' />
                            </div>
                        </Col>

                        <Col className="work-img left-item" md={6}>
                            <div>
                                <img className='img-fluid' src={workImg1} alt='Work Image 1' />
                            </div>
                        </Col>

                        <Col className='work-content right-item' md={6}>
                            <div>
                                <h5>Fiskil</h5>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>

                               <div className='tools'>
                                    {toolsList.map((tool, index) => (
                                            <div key={index} className="tool">
                                                {tool}
                                            </div> 
                                        ))
                                    }
                               </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}