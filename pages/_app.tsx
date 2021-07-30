import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/typography.css';
import Head from 'next/head';
import Layout from '@components/Layout';
import { ThemeProvider } from 'next-themes';
import Cursor from '@components/Cursor';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="http://fonts.cdnfonts.com/css/visual-braille"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <ThemeProvider attribute="class">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Cursor />
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
