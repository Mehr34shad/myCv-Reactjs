import Head from "next/head";
import { Fragment, useEffect } from "react";
import Hero from '../components/Hero'
import Footer from "../components/Footer";
import Contect from "../components/Contect";
import Work from "../components/Work";
import Skill from "./../components/Skill/index";
import About from "../components/About";
import Header from "../components/Header";
import Aos from "aos";
import Layout from "../components/Layout";

export default function Home() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //     easing: "ease-in-out-cubic",
  //   });
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>Mehrshad Moradshan | مهرشاد مرادشان</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="سایت شخصی مهرشاد مرادشان" />
        <meta
          name="keywords"
          content="مهرشاد مرادشان, mehrshad, moradshan ,مهرشاد و مرادشان"
        />
        <meta property="og:title" content="مهرشاد مرادشان" />
        <meta property="og:url" content="https://www.mehrshad-moradshan.ir" />
        <meta
          property="og:site_name"
          value="Mehrshad Moradshan | مهرشاد مرادشان"
        />
        <meta name="author" content="مرادشان" />
        <meta name="google-site-verification" content="K8_-5TCYB8Pbu0zQfB0QHri4VlCB5CwNqwgIz_aQVNA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Layout>  */}
      <Header />
      <main className="l-main">
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contect />
      </main>
      <Footer />
      {/* </Layout>  */}
    </Fragment>
  );
}
