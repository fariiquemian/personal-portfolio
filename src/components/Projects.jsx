import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 2)}>
      <a href={source_code_link} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.05 }}  // Scale the entire card
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="sm:w-[360px] w-full"
        >
          <Tilt
            options={{
              max: 15,  // Reduced tilt intensity for smoother animation
              scale: 1,  // Remove internal scaling
              speed: 300,  // Reduced speed for a smoother effect
            }}
            className="bg-tertiary p-5 rounded-2xl w-full cursor-pointer"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </motion.div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");