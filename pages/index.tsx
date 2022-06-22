import type { NextPage } from 'next'
import { Layout } from '@components'
import  { About, Landing } from '@sections'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Home: NextPage = () => {

  const { pathname } = useRouter();

  return (
    <Layout location={pathname}>
      Hello world
      <About />
      <Landing />
    </Layout>
  )
}

export default Home
