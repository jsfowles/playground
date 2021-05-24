import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
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
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Limelight&effect=outline"
        />
      </Head>
      <Layout>
        <ThemeProvider attribute="class">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          {/*<Cursor />*/}
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
