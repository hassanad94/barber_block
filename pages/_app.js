import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <h2 style={{ textAlign: "center", alignItems: "center" }}>
        Akciók vagy valami felírat
      </h2>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
