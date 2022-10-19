import { IoMdArrowForward } from "react-icons/io";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = (...props) => {
  // destructure hero data

  const { title, subtitle, hero } = props[0].hero[0];

  return (
    <section className="hero-container before:z-[2] before:bg-[#00000085] before:h-[100%] before:w-[100%] before:absolute bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[95px] lg:mt-[95px]">
      <Image
        src={hero}
        layout="fill"
        alt="hero"
        objectFit="cover"
        priority={true}
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="container z-[3] p-[10px] mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end"
      >
        {/* text & btn */}
        <div className="text-white text-center lg:text-left lg:max-w-[640px]">
          <motion.h1 variants={fadeIn("down")} className="h1">
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("down")}
            className="m-[0px_auto_8px_auto] lg:m-[0px_0_16px_0] lg:mb-16 max-w-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
          {/* btn */}
          {/* <motion.div variants={fadeIn("down")}>
            <button className="z-[4] btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0">
              {btnText}
              <div className="text-xl">
                <IoMdArrowForward />
              </div>
            </button>
          </motion.div> */}
        </div>
        {/* outline text */}
        <div className="hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText before:opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
