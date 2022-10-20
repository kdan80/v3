import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { scrollFade } from '@styles/transitions';

type HeadingProps = {
    $overline?: boolean
}

const StyledHeading = styled(motion.div)<HeadingProps>`
    display: flex;
    align-items: center;
    gap: .5rem;

    h2 {
        display: flex;
        gap: .5rem;
        align-items: baseline;
        font-size: 1.5rem;
        white-space: nowrap;
        color: var(--fg-main);
        font-weight: 600;

        &:before {
            position: relative;
            counter-increment: section;
            content: '0' counter(section) '.';
            color: var(--fg-highlight);
            font-family: var(--font-mono);
            font-size: 1.1rem;
            font-weight: 400;
        }

        ${({$overline}) => $overline && css`
            color: var(--fg-highlight);
            font-family: var(--font-mono);
            font-size: var(--ft-md);
            font-weight: 400;
        `}; 
    }

    span {
        ${({$overline}) => $overline && css`
            display: none;        
        `};
        height: 1px;
        width: 300px;
        background-color: var(--fg-highlight);

        @media (max-width: 1080px) {
            width: 200px;
        }

        @media (max-width: 768px) {
            width: 100%;
        }

        @media (max-width: 600px) {
            margin-left: 10px;
        }
    }

    @media screen and (min-width: 768px){
        gap: 1.25rem;

        h2 {
            gap: .8rem;
            font-size: ${props => props.$overline ? 'var(--ft-lg)' : '1.8rem'};

            &:before {
                font-size: ${props => props.$overline ? 'var(--ft-md)' : '1.2rem'};
            }
        }
    }
`;

interface Props {
    overline?: boolean,
    children: React.ReactNode
}

const NumberedHeading: React.FC<Props> = ({overline, children}) => {

    return (
        <StyledHeading $overline={overline} {...scrollFade}>
            <h2>
                {children}
            </h2>
            <span />
        </StyledHeading>
    );
};

export default NumberedHeading;