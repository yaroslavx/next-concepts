import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Provider } from 'next-auth/client';

const theme = {
  colors: {
    primary: 'royalblue',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Next concepts</title>
          <meta name='description' content='Some next concepts' />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
