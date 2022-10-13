import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>BarberBLock</title>
        <meta name="description" content="Barber BLock Hivatalos oldala" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header>
        <Header />
      </header>

      <main className="main-container">{children}</main>

      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Layout;
