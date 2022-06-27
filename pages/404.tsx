import * as React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next'
import { DocumentHead, Layout } from '@components';
import styled from 'styled-components';
import mixins from '@mixins';

type ContainerProps = {
    children: React.ReactNode
}

const Container = styled.div<ContainerProps>`
    ${mixins.flexCenter};
    ${mixins.flexCol};
    
    .title {
        font-size: 10rem;
        font-family: var(--ft-mono);
        font-weight: 600;
        color: var(--fg-highlight);

        @media screen and (min-width: 768px){
            font-size: 12.5rem;
        }
    }

    .subtitle {
        font-size: 2rem;
        margin-top: -3.5rem;
        color: var(--fg-main-dark);

        @media screen and (min-width: 768px){
            margin-top: -4.5rem;
            font-size: 2.5rem;
        }
    }

    a{
        margin-top: 2.5rem;
        ${mixins.bigButton};
    }
`;

interface Props {
    viewportHeight: number,
}

const NotFoundPage: NextPage<Props> = ({viewportHeight}) => {

    return (
        <Layout location="404" viewportHeight={viewportHeight}>
            <DocumentHead title='Page Not Found' />
            <Container>
                <h1 className='title'>404</h1>
                <h2 className='subtitle'>Page Not Found!</h2>
                <Link href='/'>Return Home</Link>
            </Container>
        </Layout>
    );
};

export default NotFoundPage;
