import React from 'react'
import GlobalStyle from '@styles/GlobalStyle'
import styled from 'styled-components';
import mixins from '@mixins';
import { useScrolledToTop, useScrollDirection } from '@hooks';
import { Section } from '@sections';
import { Footer, Header, Loader, SocialsList } from '@components'

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
        background: url('images/background.webp');
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
    viewportHeight: number,
    children?: React.ReactElement[]
}

const Layout: React.FC<Props> = ({location, viewportHeight, children}) => {

  const scrollDirection = useScrollDirection();
  const scrolledToTop = useScrolledToTop();
  const isHome = location === '/';
  const is404 = location === '404';
  const [isLoading, setIsLoading] = React.useState(isHome);

    return (
        <>
            <GlobalStyle />
            <App id='root' className='root'>
                <div className='background'/>
                {
                    isLoading && isHome
                        && false
                        ?   <Loader
                                finishLoading={() => setIsLoading(false)}
                                viewportHeight={viewportHeight} />
                        :   is404
                                ?   <MainContent>
                                        <Section viewportHeight={viewportHeight}>
                                            {children}
                                        </Section>
                                    </MainContent>
                                :
                                    <>
                                        <Header
                                            scrollDirection={scrollDirection}
                                            scrolledToTop={scrolledToTop}/>
                                        <MainContent>
                                            {children}                                            
                                            <Footer />
                                        </MainContent>
                                        <SocialsList scrolledToTop={scrolledToTop} />
                                    </>
                }
                
            </App>
        </>
    )
}

export default Layout