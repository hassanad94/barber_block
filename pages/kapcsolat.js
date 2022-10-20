import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { client } from "../lib/client";

export async function getStaticProps() {
  const companyInfoQuery = `*[_type == "companyInfo"]`;
  var companyInfoData = await client.fetch(companyInfoQuery);

  return {
    props: {
      companyInfoData,
    },
    // Next.js will attempt to re-generate the page:
    // - At most once every 60 seconds
    revalidate: 1, // In seconds
  };
}

export default function Kapcsolat(...props) {
  const { companyInfoData } = props[0];

  return (
    <div className="max-w-[1920px] pt-[95px] h-[100%] mx-auto overflow-hidden bg-white">
      <Contact contactInfo={companyInfoData} />
      <Footer contactInfo={companyInfoData} />
    </div>
  );
}
