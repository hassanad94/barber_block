import Hero from "../components/Hero";
import Header from "../components/Header";
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

  const socialsQuery = `*[_type == "socials"]`;
  var socials = await client.fetch(socialsQuery);

  const heroQuery = `*[_type == "hero"]`;
  var heroTitles = await client.fetch(heroQuery);

  return {
    props: {
      logo,
      socials,
      heroTitles,
    },
    // Next.js will attempt to re-generate the page:
    // - At most once every 60 seconds
    revalidate: 1, // In seconds
  };
}

export default function Home(...props) {
  const { logo: LogoDoc, socials, heroTitles } = props[0];
  const { logoImage } = LogoDoc[0];

  const logoURL = urlForImage(logoImage).url();
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header logo={logoURL} socials={socials} />
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
