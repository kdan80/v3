import React from 'react';
import styled, { css } from 'styled-components';
import mixins from '@mixins';
import Link from 'next/link';

type NavProps = {
    dropdownIsOpen: boolean,
    $componentIsMounted: boolean
}

const StyledNav = styled.nav<NavProps>`
    ${mixins.flexCenter};
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--dropmenu-fill);
    transform: translateY(-100%);
    //transition: transform 300ms ease-in-out;

    ${({$componentIsMounted}) => $componentIsMounted && css`
        transition: transform 300ms ease-in-out;
    `}

    @supports (backdrop-filter: blur()){
        background-color: var(--dropmenu-fill-alpha);
        backdrop-filter: blur(16px);
    }

    ol {
        font-size: var(--ft-lg);
        ${mixins.flexCol};
        
        li {
            transition: none;
            opacity: 0;
            margin-left: -25rem;
            text-align: center;
            font-size: var(--ft-lg);
            counter-increment: item 1;
            color: white;

            a {
                color: white;

                &:before {
                    content: '0' counter(item) '.';
                    display: block;
                    margin-right: 0;
                    margin-bottom: .3125rem;
                    font-size: var(--ft-sm);
                    color: var(--fg-highlight);
                }
            }
        }
    }

    ${({dropdownIsOpen}) => dropdownIsOpen && css`
        transform: translateY(0);

        ol {

            li {
                opacity: 1;
                margin-left: 0;
                transition: 
                    margin 250ms ease-in-out calc((var(--delay) * 75ms) + 200ms),
                    opacity 250ms ease-in-out calc((var(--delay) * 75ms) + 200ms);
            }
        }
    `}

    @media screen and (min-width: 768px){
        display: none;
    }
`;

type NavLink = {
    name: string,
    url: string
}

interface Props {
    navLinks: NavLink[],
    dropdownIsOpen: boolean,
    setDropdownIsOpen: (bool: boolean) => void
}

const DropdownNav: React.FC<Props> = ({navLinks, dropdownIsOpen, setDropdownIsOpen}) => {

    // For some reason the DropDown animation is triggering as soon as the page loads
    // I have added this flag to disable this animation until after the component has loaded 
    const [componentIsMounted, setComponentIsMounted] = React.useState(false)

    React.useEffect(() => {
        setComponentIsMounted(true);
        // innerWidth should be >= to --bp-sm which is set in src/styles/variables.js
        const onResize = (e: UIEvent) => {
            if(!e.currentTarget) return;
            if (window.innerWidth >= 768) {
                setDropdownIsOpen(false);
            }
        };

        window.addEventListener('resize', onResize);

        dropdownIsOpen 
            ? document.body.classList.add('disable-scroll')
            : document.body.classList.remove('disable-scroll')

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [dropdownIsOpen])

    return (  
        
        <StyledNav dropdownIsOpen={dropdownIsOpen} $componentIsMounted={componentIsMounted}>
            <ol>
                {
                    navLinks.map(({name, url}, index) => (
                        <li 
                            key={index} 
                            style={{'--delay': index}}
                            onClick={() => setDropdownIsOpen(false)}>
                            <Link href={url}>{name}</Link>
                        </li>
                    ))
                }
            </ol>
        </StyledNav>
    );
};

export default DropdownNav;