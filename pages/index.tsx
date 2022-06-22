import type { NextPage } from 'next'
import { Layout } from '@components'
import  { About, Landing } from '@sections'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface Props {
  viewportHeight: number
}

const Home: NextPage<Props> = ({viewportHeight}) => {

  const { pathname } = useRouter();

  return (
    <Layout location={pathname} viewportHeight={viewportHeight} >
      <About viewportHeight={viewportHeight} />
      <Landing />
    </Layout>
  )
}

export default Home
