import { Col, Row } from 'react-bootstrap';
import './Skills.css';
import javascriptIcon from '../../assets/img/javascriptIcon.svg';
import typescriptIcon from '../../assets/img/typescriptIcon.svg';
import reactIcon from '../../assets/img/reactIcon.svg';
import nextjsIcon from '../../assets/img/nextjsIcon.svg';
import nodejsIcon from '../../assets/img/nodejsIcon.svg';
import expressIcon from '../../assets/img/expressIcon.svg';
import nestIcon from '../../assets/img/nestIcon.svg';
import socketIcon from '../../assets/img/socketIcon.svg';
import postgresqlIcon from '../../assets/img/postgresqlIcon.svg';
import mongoIcon from '../../assets/img/mongoIcon.svg';
import sassIcon from '../../assets/img/sassIcon.svg';
import tailwindIcon from '../../assets/img/tailwindIcon.svg';
import figmaIcon from '../../assets/img/figmaIcon.svg';
import cypressIcon from '../../assets/img/cypressIcon.svg';
import storybookIcon from '../../assets/img/storybookIcon.svg';
import gitIcon from '../../assets/img/gitIcon.svg';

export const Skills = () => {
    return (
        <section className="skills" >
            <div className="section-header">
                <div id='about-me' className='section-title'>
                    Skills
                </div>
            </div>

            <div className="section-paragraph">
                <div className='paragraph'>
                    The skills, tools and technologies I am really good at:
                </div>
            </div>

            <Row className='mt-space-top'>
                <Col>
                    <Row className='d-flex gy-5  justify-content-between'>
                        <div className="tool">
                            <img src={javascriptIcon} alt='javascript icon' />
                            <div className="language">
                                Javascript
                            </div>
                        </div>

                        <div className="tool">
                            <img src={typescriptIcon} alt='typescript icon' />
                            <div className="language">
                            Typescript
                            </div>
                        </div>
                        
                        <div className="tool">
                            <img src={reactIcon} alt='react icon' />
                            <div className="language">
                                React
                            </div>
                        </div>

                        <div className="tool">
                            <img src={nextjsIcon} alt='nextjs icon' />
                            <div className="language">
                                Next.js
                            </div>
                        </div>

                        <div className="tool">
                            <img src={nodejsIcon} alt='nodejs icon' />
                            <div className="language">
                                Node.js
                            </div>
                        </div>

                        <div className="tool">
                            <img src={expressIcon} alt='express icon' />
                            <div className="language">
                                Express.js
                            </div>
                        </div>

                        <div className="tool">
                            <img src={nestIcon} alt='nestjs icon' />
                            <div className="language">
                                Nest.js
                            </div>
                        </div>

                        <div className="tool">
                            <img src={socketIcon} alt='socket icon' />
                            <div className="language">
                                Socket.io
                            </div>
                        </div>

                        {/* Second row */}
                        <div className="tool">
                            <img src={postgresqlIcon} alt='postgresql icon' />
                            <div className="language">
                                PostgreSQL
                            </div>
                        </div>

                        <div className="tool">
                            <img src={mongoIcon} alt='Mongo icon' />
                            <div className="language">
                                MongoDB
                            </div>
                        </div>

                        <div className="tool">
                            <img src={sassIcon} alt='sass icon' />
                            <div className="language">
                                Sass/Scss
                            </div>
                        </div>

                        <div className="tool">
                            <img src={tailwindIcon} alt='tailwind icon' />
                            <div className="language">
                                Tailwindcss
                            </div>
                        </div>

                        <div className="tool">
                            <img src={figmaIcon} alt='figma icon' />
                            <div className="language">
                                Figma
                            </div>
                        </div>

                        <div className="tool">
                            <img src={cypressIcon} alt='cypress icon' />
                            <div className="language">
                                Cypress
                            </div>
                        </div>

                        <div className="tool">
                            <img src={storybookIcon} alt='express icon' />
                            <div className="language">
                                Storybook
                            </div>
                        </div>

                        <div className="tool">
                            <img src={gitIcon} alt='Git icon' />
                            <div className="language">
                                Git
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}