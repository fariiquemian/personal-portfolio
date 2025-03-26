import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 15,  // Reduced tilt intensity for smoother animation
      scale: 1.05,  // Slight scaling to avoid jerky movements
      speed: 300,  // Reduced speed for a smoother effect
    }}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 2)}
      whileHover={{ scale: 1.1 }}  // Smooth scale on hover
      transition={{ type: "spring", stiffness: 100, damping: 10 }} // Added damping to remove jerk
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-18 h-18 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
                    With a deep passion for developing high-quality,
            reliable, and secure WordPress websites, as well as
            custom PHP web applications, I leverage my extensive
            experience and diverse skill set to deliver exceptional
            digital solutions. As an expert in WordPress, Shopify,
            Magento, and Drupal, I am committed to creating
            seamless and effective content management systems
            tailored to meet the unique needs of my clients. Serving
            as a mentor and leader in the CMS development
            community, I dedicate myself to sharing knowledge and
            fostering growth among my peers. By staying at the
            forefront of industry trends and emerging technologies, I
            ensure that I provide innovative and effective solutions,
            continually expanding my expertise to meet the evolving
            demands of the market.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
