import { AppProps } from 'next/app';
import '../styles/globals.scss';
import {Layout} from '../components/Layout/index'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout {...pageProps} />
}

export default MyApp
