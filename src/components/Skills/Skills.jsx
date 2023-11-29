import { Col, Row } from 'react-bootstrap';
import './Skills.css';
import javascriptIcon from '../../assets/img/javascriptIcon.svg';
import typescriptIcon from '../../assets/img/typescriptIcon.svg';
import reactIcon from '../../assets/img/reactIcon.svg';
import nextjsIcon from '../../assets/img/nextjsIcon.svg';
import laravelLogo from '../../assets/img/laravelLogo.png';

import tailwindIcon from '../../assets/img/tailwindIcon.svg';

import gitIcon from '../../assets/img/gitIcon.svg';
import { SectionHeader } from '../Reusedcomponents/SectionHeader';

export const Skills = () => {
    const skills = [
        {
            name: 'Javascript',
            alt: 'Javascript icon',
            imgSrc: javascriptIcon
        },
        {
            name: 'Typescript',
            alt: 'typescript icon',
            imgSrc: typescriptIcon
        },
        {
            name: 'React',
            alt: 'react icon',
            imgSrc: reactIcon
        },
        {
            name: 'Next.js',
            alt: 'nextjs icon',
            imgSrc: nextjsIcon
        },
        {
            name: 'Laravel',
            alt: 'Laravel icon',
            imgSrc: laravelLogo
        },
        {
            name: 'Tailwindcss',
            alt: 'tailwind icon',
            imgSrc: tailwindIcon
        },
        {
            name: 'Git',
            alt: 'Git icon',
            imgSrc: gitIcon
        },
    ]

    return (
        <section className="skills" style={{ backgroundColor: '#030712' }} >
            <SectionHeader header='Skills' paragraph='The skills, tools and technologies I am really good at:' />
            <Row className='mt-space-top d-flex justify-content-center align-items-center'>
                <Col md={11}> 
                    <Row className='d-flex gy-5  justify-content-between'>
                        {
                            skills.map((skill, index) => 
                                <div key={index} className="tool">
                                    <img src={skill.imgSrc} alt={skill.alt} />
                                    <div className="language">
                                        {skill.name}
                                    </div>
                                </div>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </section>
    )
}