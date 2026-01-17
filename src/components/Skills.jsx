import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { skills } from "../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const SkillsCard = ({ name, icon, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="w-[100px] h-[100px] border border-red-100 rounded-full p-[1.5px] shadow-lg blue-gradient">
        <div className="bg-white-100 w-full rounded-full p-5">
          <img src={icon} alt={name} className="rounded-full object-contain" />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE?</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </div>
      <div className="mt-10 p-2 flex justify-center items-center gap-7 flex-wrap">
        {skills.map((skill, index) => (
          <SkillsCard key={index} {...skill} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
