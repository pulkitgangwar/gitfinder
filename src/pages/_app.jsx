import Head from "next/head";

// importing stylesheet
import "../sass/main.scss";

export default function ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
