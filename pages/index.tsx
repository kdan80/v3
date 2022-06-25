import type { NextPage } from 'next'
import { Layout } from '@components'
import  { About, Contact, Landing } from '@sections'
import { useRouter } from 'next/router'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  viewportHeight: number
  projects: any
}

const Home: NextPage<Props> = ({viewportHeight, projects}) => {

    const { pathname } = useRouter();

    return (
        <Layout location={pathname} viewportHeight={viewportHeight} >
            <Landing viewportHeight={viewportHeight} />
            <About viewportHeight={viewportHeight} />
            <Contact viewportHeight={viewportHeight} />
        </Layout>
    )
}

export default Home

export async function getStaticProps(){

    const files = fs.readdirSync('content/featured');

    const projects = files.map((file) => {
        const readFile = fs.readFileSync(`content/featured/${file}/index.md`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        return {
            frontmatter,
        };
    });

    console.log("projects: ", projects);
    
    return{
        props: {
          files,
        }
    }
}
