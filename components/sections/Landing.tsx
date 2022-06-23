import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import mixins from '@mixins';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import {    landingPageContainerVariants,
            landingPageItemVariants } from '@styles/transitions';

type SectionProps = {
    id: string
}

const StyledSection = styled(Section)<SectionProps>`
    font-weight: normal;
    transition: all 1000ms ease-in-out;

    .container {
        ${mixins.sectionContentContainer};
        ${mixins.flexCol};
        justify-content: space-between;
        gap: 1.5rem;
    }

    h1 {
        color: var(--fg-highlight);
        font-family: var(--font-mono);
        font-size: clamp(var(--ft-sm), 5vw, var(--ft-lg));
        font-weight: 400;
        margin-bottom: .5rem;
    }

    h2, h3 {
        line-height: .9;
        font-weight: 600;
        font-size: clamp(2.5rem, 8vw, 4rem);
    }

    h2 {
        color: var(--fg-main);
    }

    h3  {
        color: var(--fg-main-darker);
    }

    a {
        ${mixins.bigButton}
        display: inline-block;
        margin-top: 2rem;
        width: 12.5rem;
    }

    @media screen and (min-width: 768px){
        p {
            max-width: 60%;
        }
    }
`;

interface Props {
    viewportHeight: number
}

const Landing: React.FC<Props> = ({viewportHeight}) => {

    const animation = useAnimation();
    const [pageLoadAnimationsComplete, setPageLoadAnimationsComplete] = React.useState(false);

    React.useEffect(() => {
      (async() => {
        await animation.start('animate');
        setPageLoadAnimationsComplete(true);
      })();
    }, [animation]);

    const itemProps = {
        variants: landingPageItemVariants,
        viewport: {
            margin: '0px 10px 0px 10px',
            amount: 1
        },
        animate: pageLoadAnimationsComplete ? 'fadeOut' : false,
        whileInView: pageLoadAnimationsComplete ? 'fadeIn' : false,
    }

    return (
        <StyledSection
            id='landing'
            viewportHeight={viewportHeight}>

                <motion.div
                    className='container'
                    variants={landingPageContainerVariants}
                    initial='initial'
                    animate={animation}>
                    <motion.h1 {...itemProps}>Hi, my name is</motion.h1>
                    <motion.h2 {...itemProps}>Kieran Dansey.</motion.h2>
                    <motion.h3 {...itemProps}>I build things for the web.</motion.h3>
                    <motion.p {...itemProps}>
                        I am a freelance web developer, and occasional designer, with a passion for building exceptional digital experiences.
                    </motion.p>
                    <motion.div
                        {...itemProps}>
                        <Link href='/#projects'>View My Projects</Link>
                    </motion.div>
                </motion.div>
        </StyledSection>
    );
};

export default Landing;