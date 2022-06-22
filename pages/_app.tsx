import type { AppProps } from 'next/app'
import { useViewportHeight } from '@hooks'

function MyApp({ Component, pageProps }: AppProps) {

  const viewportHeight = useViewportHeight();

  return <Component {...pageProps} viewportHeight={viewportHeight} />
}

export default MyApp
