import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import mixins from '@mixins';
import { motion } from 'framer-motion';
import { navLinksContainerVariants,
        navLinksItemVariants } from '@styles/transitions';

const StyledNav = styled.nav`
    display: none;

    @media screen and (min-width: 768px){
        display: flex;
    
        ol {
            ${mixins.flexCenter};
            gap: 2rem;
                
            a {
                color: var(--fg-main);

                :hover {
                    color: var(--fg-highlight);
                }
            }
        }
    }
`;

type NavLink = {
    name: string,
    url: string
}

interface Props {
    navLinks: NavLink[]
}

const Nav: React.FC<Props> = ({navLinks}) => {

    return (
        <StyledNav>
            <motion.ol
                variants={navLinksContainerVariants}
                initial='initial'
                animate='animate'>
                {
                    navLinks.map(({name, url}, index) => (
                            <motion.li 
                                variants={navLinksItemVariants}
                                key={index} 
                                >
                                <Link href={url}>{name}</Link>
                            </motion.li>
                    ))
                }
            </motion.ol>
        </StyledNav>
    );
};

export default Nav;