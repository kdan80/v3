import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import mixins from '@mixins';
import config from '@config';
import { motion } from 'framer-motion';
import { scrollFade } from '@styles/transitions';
//import { NumberedHeading } from '@components';

type SectionProps = {
    id: string
}

const StyledSection = styled(Section)<SectionProps>`
    
    .container {
        ${mixins.sectionContentContainer};
        ${mixins.flexCol};
    }

    .skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 .625rem;
        padding: 0;
        margin: 1.25rem 0 0 0;
        overflow: hidden;
        list-style: none;

        li {
            position: relative;
            margin-bottom: .625rem;
            padding-left: 1.25rem;
            font-family: var(--font-mono);
            font-size: var(--ft-sm);

            &:before {
                content: '▹';
                position: absolute;
                left: 0;
                color: var(--fg-highlight);
                font-size: var(--ft-sm);
                line-height: .75rem;
            }
        }
    }

    @media screen and (min-width: 768px){
        .container {
            width: 70%;
        }

        .skills-list li {
            font-size: var(--ft-md);

            &:before {
                font-size: var(--ft-md);
            }
        }
    }
`;

interface Props {
    viewportHeight: number
}

const About: React.FC<Props> = ({viewportHeight}) => {

    const { skills } = config;

    return (
        <StyledSection 
            id='about'
            viewportHeight={viewportHeight}>
            <motion.div
                className='container'>

                {/* <NumberedHeading>
                    About Me
                </NumberedHeading> */}

                <motion.p {...scrollFade}>
                    Hello! My name is Kieran and I enjoy creating things that live on the internet. My
                    interest in web development started back in 2005 when I was making custom themes for
                    myspace profiles. Fast-forward to today and I enjoy building full-featured websites and apps
                    using modern design principles and tools.
                </motion.p>

                <motion.p {...scrollFade}>
                    I am a self-taught developer from Tayside, Scotland and I am currently looking to secure a position as a junior developer
                    to further my own knowledge and abilities. My ultimate career aspiration is to become a backend, or full-stack engineer,
                    and a project leader.
                </motion.p>

                <motion.p {...scrollFade}>
                    Here are some of the tools and technologies that I use; 
                </motion.p>

                <motion.ul 
                    className='skills-list'
                    {...scrollFade}>
                    {skills && skills.map((skill, index) => <motion.li key={index}>{skill}</motion.li>)}
                </motion.ul>

            </motion.div>
        </StyledSection>
    );
};

export default About;