import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '@components/Layout';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@200&family=Spectral&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <ThemeProvider attribute="class">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Component {...pageProps} />
            </div>
          </div>
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
