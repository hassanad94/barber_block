import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "next/image";

export const Testimonial = (...props) => {
  const { testimonialData } = props[0];

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0"
    >
      <div className="container mx-auto">
        <Swiper pagination={true} modules={[Pagination]}>
          {testimonialData.map((slide, index) => {
            // destructure slide
            const { testimonial, name } = slide;
            return (
              <SwiperSlide key={index} className="pb-[25px]">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                  <div className="w-[154px] h-[109px] mb-5">
                    <Image
                      layout="fill"
                      src="/img/testimonial/quote.svg"
                      alt="dekoration"
                    />
                  </div>
                  <div className="flex-1 lg:mt-[54px]">
                    <div className="text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12">
                      {testimonial}
                    </div>
                    <div className="flex items-center text-xl lg:text-2xl font-primary">
                      <div className="font-semibold">{name}</div>
                      <span className="mx-4">|</span>
                      <div className="font-light">Elégedett Ügyfél</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;
