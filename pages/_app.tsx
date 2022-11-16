import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const theme = {
  colors: {
    primary: 'royalblue',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next concepts</title>
        <meta name='description' content='Some next concepts' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
