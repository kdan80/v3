import type { NextPage } from 'next'
import { Layout } from '@components'
import  { About, Contact, Featured, Landing } from '@sections'
import { useRouter } from 'next/router'
import fs from 'fs'
import matter from 'gray-matter'

type project = {
    frontmatter: {
      date: string,
      title: string,
      cover: string,
      github: string,
      external: string,
      tech: string[]
    },
    content: string
}

interface Props {
  viewportHeight: number
  projects: project[]
}

const Home: NextPage<Props> = ({viewportHeight, projects}) => {

    const { pathname } = useRouter();

    return (
        <Layout location={pathname} viewportHeight={viewportHeight} >
            <Landing viewportHeight={viewportHeight} />
            <About viewportHeight={viewportHeight} />
            <Featured viewportHeight={viewportHeight} projects={projects} />
            <Contact viewportHeight={viewportHeight} />
        </Layout>
    )
}

export default Home

export async function getStaticProps(){

    const files = fs.readdirSync('content/featured');

    const projects = files.map((file) => {
        const readFile = fs.readFileSync(`content/featured/${file}/index.md`, 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        const { date } = frontmatter;
        return {
            frontmatter,
            content,
            date: parseInt(date)
        };
    });

    projects.sort((a: any, b: any) => a.date - b.date)

    return{
        props: {
          projects,
        }
    }
}
