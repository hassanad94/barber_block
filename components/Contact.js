import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { fadeIn } from "../variants";

const Contact = (...props) => {
  // destructure contact data

  const { locationDetails, phone, email, location } = props[0].contactInfo[0];
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          {/* text */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="flex-1"
          >
            {/* title */}
            <h2 className="h2 max-w-[490px]">Megtalálsz:</h2>
            {/* info items */}
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              <div>
                {/* title */}
                <div className="font-primary uppercase font-medium text-xl mb-3">
                  Budapest 15. kerület
                </div>
                {/* subtitle */}
                <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
                  {locationDetails}
                </div>
                {/* address, phone & email */}
                <div className="flex flex-col gap-y-3 mb-8">
                  {/* address */}
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <FaMapMarkerAlt />
                    </div>
                    <a
                      href="https://goo.gl/maps/GVhGrJL7Bs5suJHK8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium"
                    >
                      {location}
                    </a>
                  </div>
                  {/* phone */}
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <FaPhoneAlt />
                    </div>
                    <a href={`tel:${phone}`} className="font-medium">
                      {phone}
                    </a>
                  </div>
                  {/* email */}
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <FaEnvelope />
                    </div>
                    <a href={`mailto:${email}`} className="font-medium">
                      {email}
                    </a>
                  </div>
                </div>
                {/* link */}
                <a
                  className="font-medium border-b border-dark pb-[5px]"
                  href="https://goo.gl/maps/GVhGrJL7Bs5suJHK8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Megnézem google maps-n
                </a>
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center "
          >
            <form className="flex flex-col gap-y-10 w-full">
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                type="text"
                placeholder="Név:"
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                type="text"
                placeholder="Email:"
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]"
                type="text"
                placeholder="Telefonszám:"
              />
              <button className="self-start btn btn-sm btn-dark">Küldés</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
