import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ModalVideo from "./ModalVideo";
import { useStateContext } from "../context/settingContext";

const Interview = (...props) => {
  const { getYoutubeEmbemedId } = useStateContext();
  const { interviewData } = props[0];
  const { title, video } = interviewData[0];

  const videoID = getYoutubeEmbemedId(video);

  console.log(videoID);

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="section bg-dark bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px] max-h-[500px]"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            <motion.h3
              variants={fadeIn("down")}
              className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize  mb-8"
            >
              {title}
            </motion.h3>
            {/* modal video */}
            <ModalVideo videoId={videoID} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Interview;
