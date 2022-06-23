import type { NextPage } from 'next'
import { Layout } from '@components'
import  { About, Contact, Landing } from '@sections'
import { useRouter } from 'next/router'

interface Props {
  viewportHeight: number
}

const Home: NextPage<Props> = ({viewportHeight}) => {

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
