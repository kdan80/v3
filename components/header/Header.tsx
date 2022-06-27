import React from 'react';
import config from '@config';
import styled, { css } from 'styled-components';
import Nav from './Nav';
import DropdownNav from './DropdownNav';
import Hamburger from './Hamburger';
import mixins from '@mixins';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { homeLinkVariants } from '@styles/transitions';

type HeaderProps = {
    $scrollDirection: string,
    $scrolledToTop: boolean,
    $dropdownIsOpen: boolean
}

const StyledHeader = styled(motion.header)<HeaderProps>`
    ${mixins.flexCenter};
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 var(--pd-win-sm);
    font-size: var(--ft-lg);
    color: var(--fg-main);
    z-index: var(--layer-3); 
    height: var(--header-height);
    transition: all 300ms ease-in-out;

    ${({$scrolledToTop, $scrollDirection}) => 
            !$scrolledToTop && 
            ($scrollDirection === 'down') && 
            css`
                transform: translateY(-100%);
    `}

    ${({$scrolledToTop, $scrollDirection}) => 
            !$scrolledToTop && 
            ($scrollDirection === 'up') && 
            css`
                transform: translateY(0);
                background-color: rgba(28,29,34, .95);
                backdrop-filter: blur(8px);
                box-shadow: 0 2px 16px rgba(0,0,0,.4);

                @supports (backdrop-filter: blur()){
                    background-color: transparent;
                }
    `}

    ${({$dropdownIsOpen}) => $dropdownIsOpen && css`
            background-color: transparent;
            backdrop-filter: none;
    `}

    .container {
        ${mixins.flexBetween};
        width: 100%;
    }

    .home-link {
        cursor: pointer;

        a, .logo {
            color: var(--fg-highlight);
        }
        
        .name {
            transition: all 300ms ease-in-out;
            color: var(--fg-main);

            :hover {
                color: var(--fg-highlight);
            }
        }
    }

    @media screen and (min-width: 768px){
        padding: 0 var(--pd-win-lg);
        width: 100%;
    }
`;

interface Props {
    scrollDirection: string,
    scrolledToTop: boolean
}

const Header: React.FC<Props> = ({scrollDirection, scrolledToTop}) => {

    const { navLinks } = config;
    const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false);

    return (
        <StyledHeader
            $dropdownIsOpen={dropdownIsOpen}
            $scrollDirection={scrollDirection}
            $scrolledToTop={scrolledToTop}>
            <div className='container'>
                    <motion.div 
                        className='home-link'
                        variants={homeLinkVariants}
                        initial='initial'
                        animate='animate'
                        >
                        <Link href='#landing'><span className='logo'>&lt;/&gt; <span className='name'>kieran dansey</span></span></Link>
                    </motion.div>

                        <Hamburger 
                            dropdownIsOpen={dropdownIsOpen} 
                            setDropdownIsOpen={setDropdownIsOpen}
                            />
                <DropdownNav navLinks={navLinks} dropdownIsOpen={dropdownIsOpen} setDropdownIsOpen={setDropdownIsOpen} />
                <Nav navLinks={navLinks} />
            </div>
        </StyledHeader>
    );
};

export default Header;