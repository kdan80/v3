import React from 'react'
import GlobalStyle from '@styles/GlobalStyle'
import styled from 'styled-components';
import mixins from '@mixins';

const App = styled.div`
    ${mixins.flexCenter};
    min-height: 100%;

    .background {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        background: url("/background.webp");
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

const MainContent = styled.main`
    font-family: var(--font-sans);
    font-weight: bold;
    counter-reset: section;
`;

interface Props {
    location?: string,
    children?: React.ReactNode | React.ReactElement[]
}

const Layout: React.FC<Props> = ({location, children}) => {
  return (
    <>
        <GlobalStyle />
        <App id='root' className='root'>
            {children}
        </App>
    </>
  )
}

export default Layout