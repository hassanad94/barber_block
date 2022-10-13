import Hero from "../components/Hero";
// import About from "../components/About";
// import GallerySection from "../components/GallerySection";
// import Skills from "../components/Skills";
// import Interview from "../components/Interview";
// import Testimonial from "../components/Testimonial";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import Copyright from "../components/Copyright";
import { client, urlForImage } from "../lib/client";

export async function getStaticProps() {
  const logoQuery = `*[_type == "logo"] {
    logoImage
  }`;
  var logo = await client.fetch(logoQuery);

  const heroQuery = `*[_type == "hero"]`;
  var heroTitles = await client.fetch(heroQuery);

  return {
    props: {
      logo,
      heroTitles,
    },
    // Next.js will attempt to re-generate the page:
    // - At most once every 60 seconds
    revalidate: 1, // In seconds
  };
}

export default function Home(...props) {
  const { heroTitles } = props[0];
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Hero titles={heroTitles} />
      {/* <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
      <div className='h-[4000px]'></div> */}
    </div>
  );
}
