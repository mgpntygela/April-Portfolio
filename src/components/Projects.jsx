import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { github } from "../assets";
import { projects } from "../constants";

import Tilt from "react-parallax-tilt";
import { motion, spring } from "framer-motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="w-full blue-gradient h-full p-[1.5px] rounded-2xl sm:w-[360px] min-h-fit shadow-lg cursor-pointer"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="bg-white-100 p-4 rounded-2xl">
          <div className="relative w-full h-[250px] blue-gradient rounded-2xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_cover">
              <div
                className="icon-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(source_code_link, "_blank")}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-black-200 font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-black-200 text-[14px] text-justify">
              {description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag,) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>My Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-black-200 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "work");
