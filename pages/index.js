import Hero from "../components/Hero";
import About from "../components/About";
import GallerySection from "../components/GallerySection";
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
  var heroData = await client.fetch(heroQuery);

  heroData[0].hero = urlForImage(heroData[0].hero).url();

  const aboutQuery = `*[_type == "about"]`;
  var aboutData = await client.fetch(aboutQuery);
  aboutData[0].hero = urlForImage(aboutData[0].aboutIMG).url();

  const galeryQuery = `*[_type == "mainGalery"]`;
  var galeryData = await client.fetch(galeryQuery);

  galeryData[0].galery = galeryData[0].galery.map((element) => {
    return urlForImage(element).url();
  });

  return {
    props: {
      logo,
      heroData,
      aboutData,
      galeryData,
    },

    revalidate: 1,
  };
}

export default function Home(...props) {
  var { heroData, aboutData, galeryData } = props[0];

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Hero hero={heroData} />
      <About about={aboutData} />
      <GallerySection galleryData={galeryData} />
      {/*<Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
      <div className='h-[4000px]'></div> */}
    </div>
  );
}
