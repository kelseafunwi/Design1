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
            name: 'Node.js',
            alt: 'nodejs icon',
            imgSrc: nodejsIcon
        },
        {
            name: 'Express.js',
            alt: 'express icon',
            imgSrc: expressIcon
        },
        {
            name: 'Nest.js',
            alt: 'nestjs icon',
            imgSrc: nestIcon
        },
        {
            name: 'Socket.io',
            alt: 'socket icon',
            imgSrc: socketIcon
        },
        {
            name: 'PostgreSQL',
            alt: 'postgresql icon',
            imgSrc: postgresqlIcon
        },
        {
            name: 'MongoDB',
            alt: 'Mongo icon',
            imgSrc: mongoIcon
        },
        {
            name: 'Sass/Scss',
            alt: 'sass icon',
            imgSrc: sassIcon
        },
        {
            name: 'Tailwindcss',
            alt: 'tailwind icon',
            imgSrc: tailwindIcon
        },
        {
            name: 'Figma',
            alt: 'figma icon',
            imgSrc: figmaIcon
        },
        {
            name: 'Cypress',
            alt: 'cypress icon',
            imgSrc: cypressIcon
        },
        {
            name: 'Storybook',
            alt: 'storybook icon',
            imgSrc: storybookIcon
        },
        {
            name: 'Git',
            alt: 'Git icon',
            imgSrc: gitIcon
        },
    ]

    return (
        <section className="skills" >
            <SectionHeader header='Skills' paragraph='The skills, tools and technologies I am really good at:' />
            <Row className='mt-space-top'>
                <Col>
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