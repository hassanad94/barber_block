// import about data
import { aboutData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
import { IoMdArrowForward } from "react-icons/io";

const About = (...props) => {
  // destructure about data
  const { title, subtitle, btnText } = props[0].about[0];

  return (
    <section className="lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
          {/* numbers */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg:flex-row flex-1"
          >
            <div className="text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">
              01
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-48"
          >
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle}</p>
                <button className="btn btn-lg btn-link">
                  {btnText}
                  <div className="text-xl">
                    <IoMdArrowForward />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
