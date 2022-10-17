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
        console.log("start");
      };
      const handleComplete = (url) =>
        url === router.asPath &&
        setTimeout(() => {
          setLoading(false);
        }, 5000);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    });

    return (
      loading && (
        <div className="spinner-wrapper">
          <div className="spinner">TADSFASd</div>
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
