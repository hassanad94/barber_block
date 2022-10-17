import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { StateContext } from "../context/settingContext";

function MyApp({ Component, pageProps, router }) {
  function Loading() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      // const handleStart = (url) => url !== router.asPath && setLoading(true);
      const handleStart = (url) => {
        setLoading(true);
      };
      const handleComplete = (url) =>
        url === router.asPath && setLoading(false);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    }, [router.events]);

    return (
      loading && (
        <div className="loading-wrapper">
          <div className="container">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
        </div>
      )
    );
  }
  return (
    <StateContext>
      <Layout router={router}>
        <Loading />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
