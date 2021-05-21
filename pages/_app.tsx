import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '@components/Layout';
import { ThemeProvider } from 'next-themes';
import Cursor from '@components/Cursor';

function MyApp({ Component, pageProps }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200&family=Spectral&display=swap&effect=outline"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Limelight&effect=outline"
        />
      </Head>
      <Layout>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
          {/*<Cursor />*/}
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
