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
                            
                            <p>I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>

                            <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>

                            <p>When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>

                            <p>Finally, some quick bits about me.</p>

                            <Row>
                                <Col md={6}>
                                    <div className='skill'>
                                        <div className='point'></div>B.E. in Computer Engineering
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className='skill'>
                                        <div className='point'></div>Avid learner
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className='skill'>
                                        <div className='point'></div>Full time freelancer
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className='skill'>
                                        <div className='point'></div>Aspiring indie hacker
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