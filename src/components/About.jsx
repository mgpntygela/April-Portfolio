import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

import Tilt from "react-parallax-tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full blue-gradient p-[1px] rounded-[20px] shadow-lg"
      >
        <motion.div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-white-100 rounded-[20px] py-5 px-12 min-h-[280px] cursor-pointer flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className=" w-16 h-16 object-contain"
          />
          <h3 className="text-black-200 text-[20px] font-bold text-center font-mono">
            {title}
          </h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-black-200 text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a student with a strong ardor for the IT realm, particularly
        focused on web development. I'm on a mission to translate innovative
        ideas into captivating online experiences. Join me in exploring my
        journey of turning passion into pixels.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-5 items-center justify-evenly">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
