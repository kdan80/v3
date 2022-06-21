import type { NextPage } from 'next'
import { Layout } from '@components'
import  { About, Landing } from '@sections'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Layout>
      Hello world
      <About />
      <Landing />
    </Layout>
  )
}

export default Home
