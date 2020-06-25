// importing component
import Navigation from "../components/Navigation";

// importing stylesheet
import "../sass/main.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
