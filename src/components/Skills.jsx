import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    heading: "Web Development",
    skills: [
      {
        id: 1,
        heading: "React",
        percentage: "50%",
      },
      {
        id: 2,
        heading: "Tailwind CSS",
        percentage: "80%",
      },
      {
        id: 3,
        heading: "NodeJS",
        percentage: "40%",
      },
      {
        id: 4,
        heading: "MySQL",
        percentage: "40%",
      },
    ],
  },
  {
    id: 2,
    heading: "Languages",
    skills: [
      {
        id: 1,
        heading: "C++",
        percentage: "100%",
      },
      {
        id: 2,
        heading: "Python",
        percentage: "60%",
      },
      {
        id: 3,
        heading: "JavaScript",
        percentage: "60%",
      },
    ],
  },
  {
    id: 3,
    heading: "Tools",
    skills: [
      {
        id: 1,
        heading: "Json-Web-Token",
        percentage: "50%",
      },

      {
        id: 2,
        heading: "Git",
        percentage: "70%",
      },
      {
        id: 3,
        heading: "Putty",
        percentage: "90%",
      },
    ],
  },
  {
    id: 4,
    heading: "Co-Curricular",
    skills: [
      {
        id: 1,
        heading: "Php",
        percentage: "30%",
      },
      {
        id: 2,
        heading: "Java",
        percentage: "60%",
      },
      {
        id: 3,
        heading: "MongoDB",
        percentage: "50%",
      },
      {
        id: 4,
        heading: "Bootstrap",
        percentage: "80%",
      },
    ],
  },
  {
    id: 5,
    heading: "Core Subjects",
    skills: [
      {
        id: 1,
        heading: "Operating System",
        percentage: "80%",
      },
      {
        id: 2,
        heading: "OOPS",
        percentage: "100%",
      },
      {
        id: 3,
        heading: "Computer Networks",
        percentage: "50%",
      },
      {
        id: 4,
        heading: "DBMS",
        percentage: "80%",
      },
    ],
  },
];

const Corousel = ({ item }) => {
  const ref = useRef();
  const cardAnimation = {
    initial: {
      opacity: 0,
      scale: "0%",
    },
    animate: {
      opacity: 1,
      scale: "100%",
      transition: {
        type: "spring",
        stiffness: 130,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
  };
  const barAnimation = {
    initial: {
      scale: "0%",
    },
    animate: {
      scale: "100%",
      transition: {
        duration: 2.5,
        direction: "right",
      },
    },
  };

  return (
    <motion.div ref={ref} variants={cardAnimation} initial="initial" whileInView="animate" id="card" className="p-4 flex flex-col md:flex-row justify-center items-center md:gap-4 rounded-lg shadow-lg shadow-black grow bg-[#000814] h-[90%] min-w-[100%]">
      <motion.div variants={cardAnimation} className="p-1 flex flex-wrap justify-center items-center text-[#FFC300] text-center tracking-wider font-bold text-5xl sm:text-6xl md:text-7xl w-[100%] md:w-[40%] h-[40%] md:h-full">
        {item.heading}
      </motion.div>
      <motion.div variants={cardAnimation} className="px-1 md:px-8 flex flex-col justify-center w-full md:w-[60%] h-full gap-7">
        {item.skills.map(skill => (
          <motion.div variants={cardAnimation} key={skill.id}>
            <motion.div variants={cardAnimation} className="flex flex-row justify-between">
              <motion.h1 variants={cardAnimation} className="text-2xl italic font-bold text-[#FFFFFF]">
                {skill.heading}
              </motion.h1>
              <motion.h2 variants={cardAnimation} className="text-xl font-black text-[#FFFFFF]">
                {skill.percentage}
              </motion.h2>
            </motion.div>
            <motion.div variants={barAnimation} initial="initial" whileInView="animate" className="bg-[#FFC300] rounded-full shadow-md shadow-black h-[10px]" style={{ width: skill.percentage }}></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const buttonAnimation = {
    initial: {
      scale: "0%",
    },
    animate: {
      scale: "100%",
      transition: {
        type: "spring",
      },
    },
  };

  const leftPress = () => {
    const slider = document.getElementById("slider");
    const sliderWidth = slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft - sliderWidth - 5;
  };

  const rightPress = () => {
    const slider = document.getElementById("slider");
    const sliderWidth = slider.clientWidth;
    slider.scrollLeft = slider.scrollLeft + sliderWidth + 5;
  };

  return (
    <div className="relative bg-gradient-to-b from-[#000814] to-[#003566] h-screen">
      <div className="flex flex-col items-center justify-center h-[15vh] sticky top-0 left-0 right-0">
        <h1 className="text-5xl md:text-7xl font-bold text-[#003566]">Technical Skills</h1>
      </div>
      <div id="slider" className="md:mx-40 flex flex-row items-center h-[85vh] gap-[5px] overflow-hidden" style={{ overflowX: "hidden", scrollBehavior: "smooth" }}>
        <motion.button variants={buttonAnimation} initial="initial" whileInView="animate" whileTap={{ scale: "50%" }} className="z-10 absolute bottom-[2%] left-[28%] md:left-[44%] w-[70px] h-[70px] bg-[#000814] text-bold text-4xl text-[#FFC300] font-bold rounded-full ring-4 shadow-md shadow-black ring-inset ring-[#FFC300]" onClick={leftPress}>
          &lt;
        </motion.button>
        {items.map(item => (
          <Corousel item={item} key={item.id} />
        ))}
        <motion.button variants={buttonAnimation} initial="initial" whileInView="animate" whileTap={{ scale: "50%" }} className="z-10 absolute bottom-[2%] right-[28%] md:right-[44%] w-[70px] h-[70px] bg-[#000814] text-bold text-4xl text-[#FFC300] font-bold rounded-full ring-4 shadow-md shadow-black ring-inset ring-[#FFC300]" onClick={rightPress}>
          &gt;
        </motion.button>
      </div>
    </div>
  );
};

Corousel.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Skills;
