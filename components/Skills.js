import { useEffect, useState } from "react";
//  useInView hook
import { useInView } from "react-intersection-observer";
// react circular
import { CircularProgressbar } from "react-circular-progressbar";
// react circular styles
import "react-circular-progressbar/dist/styles.css";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [quality, setQuality] = useState(0);
  const [style, setStyle] = useState(0);
  const [vibe, setVibe] = useState(0);

  useEffect(() => {
    if (!inView) {
      setQuality(0);
      setStyle(0);
      setVibe(0);

      return;
    }

    const circleTimeout = setTimeout(() => {
      if (quality < 100) {
        setQuality(quality + 1);
      }
      if (style < 100) {
        setStyle(style + 1);
      }
      if (vibe < 100) {
        setVibe(vibe + 1);
      }
    }, 50);

    return () => {
      clearTimeout(circleTimeout);
    };
  }, [inView, quality, style, quality]);

  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#EEEEEE",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className="section font-primary"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <div className="w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={quality}
              text={`${quality}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Minőség
            </div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6">
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={style}
              text={`${style}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Stílus
            </div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6">
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={vibe}
              text={`${vibe}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Hangulat
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
