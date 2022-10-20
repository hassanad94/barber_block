import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import { client, urlForImage } from "../lib/client";

export async function getStaticProps() {
  const galeryQuery = `*[_type == "galery"]`;
  var galeryData = await client.fetch(galeryQuery);

  galeryData[0].galery = galeryData[0].galery.map((element) => {
    return urlForImage(element).url();
  });

  const companyInfoQuery = `*[_type == "companyInfo"]`;
  var companyInfoData = await client.fetch(companyInfoQuery);

  return {
    props: {
      galeryData,
      companyInfoData,
    },
    // Next.js will attempt to re-generate the page:
    // - At most once every 60 seconds
    revalidate: 1, // In seconds
  };
}

export default function Galery(...props) {
  const { galeryData, companyInfoData } = props[0];

  return (
    <div className="max-w-[1920px] pt-[95px] h-[100%] mx-auto overflow-hidden bg-white">
      <GallerySection buttonDisable={true} galleryData={galeryData} />
      <Footer contactInfo={companyInfoData} />
    </div>
  );
}
