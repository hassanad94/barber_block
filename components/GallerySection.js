import { useState } from "react";
// import data
// import photo album & lightbox
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
import { IoMdArrowForward } from "react-icons/io";

const GallerySection = (...props) => {
  const { galleryData } = props[0];

  const images = galleryData[0].galery.map((image) => ({
    src: image,
    width: 465,
    height: 540,
    alt: "ELkészült munkák",
  }));
  const [index, setIndex] = useState(-1);
  // destructure gallery data
  const { title, btnText, btnIcon } = galleryData[0];
  return (
    <section className="bg-[#F9F9F9] section relative mt-[40px] lg:mt-0">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          Nézd meg a Munkáim
        </motion.h2>
      </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <PhotoAlbum
          layout="masonry"
          photos={images}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <Lightbox
          slides={images}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          Galéria Megnyitása
          <div className="text-xl">
            <IoMdArrowForward />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
