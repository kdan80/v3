/* eslint-disable camelcase */
import React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import config from '@config';

interface Props {
    title?: string,
    description?: string,
    image?: string
}

const DocumentHead: React.FC<Props> = ({ title, description, image }) => {
    
    const { pathname } = useRouter();
    const { siteData } = config;

    const {
      title: defaultTitle,
      description: defaultDescription,
      siteUrl,
      image: defaultImage,
      favicon
    } = siteData;

    const siteMetadata = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      image: `${siteUrl}${image || defaultImage}`,
      url: `${siteUrl}${pathname}`,
    };

    return (
        <Head>
            <html lang='en' />
            <title>{siteMetadata.title}</title>
            <link rel='icon' href={favicon} />

            <meta name='description' content={siteMetadata.description} />
            <meta name='image' content={siteMetadata.image} />

            <meta property='og:title' content={siteMetadata.title} />
            <meta property='og:description' content={siteMetadata.description} />
            <meta property='og:image' content={siteMetadata.image} />
            <meta property='og:url' content={siteMetadata.url} />
            <meta property='og:type' content='website' />

            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={siteMetadata.title} />
            <meta name='twitter:description' content={siteMetadata.description} />
            <meta name='twitter:image' content={siteMetadata.image} />
        </Head>
    );
};

export default DocumentHead;