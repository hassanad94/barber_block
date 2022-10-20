import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = (...props) => {
  const { locationDetails, phone, email, location } = props[0].contactInfo[0];
  return (
    <footer className="bg-dark section">
      <div className="container mx-auto">
        {/* grid */}
        <motion.div
          variants={staggerContainer}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col lg:flex-row lg:justify-between text-white gap-x-5 gap-y-14"
        >
          {/* about */}
          <motion.div
            variants={fadeIn("up")}
            className="flex-1 flex flex-col gap-y-6"
          >
            {/* title */}
            <div className="font-primary text-xl uppercase tracking-[0.08em]">
              Elérhetőségek
            </div>
            {/* subtitle */}
            <div className="leading-relaxed text-[#DBDBDB]">
              {locationDetails}
            </div>
            {/* address & phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold text-[#DBDBDB]">
              {/* address */}
              <div className="flex items-center gap-x-[10px]">
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
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <FaPhoneAlt />
                </div>
                <a href={`tel:${phone}`} className="font-medium">
                  {phone}
                </a>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <FaEnvelope />
                </div>
                <a href={`mailto:${email}`} className="font-medium">
                  {email}
                </a>
              </div>
            </div>
          </motion.div>
          {/* links */}
          <motion.div
            variants={fadeIn("up")}
            className="flex-1 flex flex-col xl:items-center"
          >
            <div>
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
                Hasznos linkek
              </div>
              <ul className="flex flex-col gap-y-4 text-[#DBDBDB]">
                <li>
                  <a className="hover:text-white transition" href={"/arak"}>
                    Árak
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href={"/rolam"}>
                    Rólam
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href={"/galeria"}>
                    Galéria
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition"
                    href={"/kapcsolat"}
                  >
                    Kapcsolat
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
          {/* program */}
          <motion.div variants={fadeIn("up")} className="flex-1">
            <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
              Nyítvatartás
            </div>
            <ul className="flex flex-col gap-y-4 text-[#DBDBDB]">
              <li>Hétfő - Péntek / 9:00-17:00</li>
              <li>Szo - Vas / 12:00-17:00</li>
            </ul>
          </motion.div>
          {/* newsletter */}
          <motion.div variants={fadeIn("up")} className="flex-1">
            <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
              Hírlevél
            </div>
            <div className="leading-relaxed mb-9 text-[#DBDBDB]">
              Újdonságokért és promóciókért íratkozz fel
            </div>
            <form className="flex  justify-between items-start border-b border-[#B6B6B6]">
              <input
                className="outline-none placeholder:text-base italic placeholder:capitalize  bg-transparent pb-2"
                type="text"
                placeholder="Iratkozz fel a hírlvelemre"
              />
              <button type="submit" className="text-2xl cursor-pointer">
                <FiSend />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
