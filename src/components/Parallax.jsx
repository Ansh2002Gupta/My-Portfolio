import {motion, useInView, useScroll, useTransform} from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"});

  const celestialAnimation = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 700,
      y: -700,
      transition: {
        duration: 5,
      },
    },
  };

  const starAnimation = {
    initial: {
      y: 0,
    },
    animate: {
      y: -700,
      transition: {
        duration: 10,
      },
    },
  };

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const  yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div ref={ref} className="overflow-hidden relative h-screen flex flex-col justify-center items-center" style={{ background: type == "Projects" ? "linear-gradient(180deg, #000814, #003566)" : "linear-gradient(180deg, #000814, #FFC300)" }}>
      <motion.h1 style={{y: yText}} className="z-30 text-9xl font-['EduTASBeginner'] text-[#000814]">{type == "Projects" ? "What I do ?" : "What I did ?"}</motion.h1>
      <motion.div className="z-20 w-full absolute bottom-0" style={{backgroundImage: "url('/mountain.png')", height: "75vh", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></motion.div>
      <motion.div variants={starAnimation} initial="initial" animate={isInView && "animate"} className="z-10 w-full absolute" style={{backgroundImage: "url('/star.png')", height: "100vh", backgroundSize: "cover", backgroundRepeat: "repeat-y"}}></motion.div>
      <motion.div variants={celestialAnimation} initial="initial" animate={isInView && "animate"} className="z-10 w-full absolute" style={{top: "20rem", left: "25rem", backgroundImage: type == "Projects" ? "url('/moon.png')" : "url('/sun.png')", width: "50vh", height: "50vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top"}}></motion.div>
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.func.isRequired,
};

export default Parallax;
