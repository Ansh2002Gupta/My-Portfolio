import { motion, useInView, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
import moon from "../assets/Images/moon.png";
import sun from "../assets/Images/sun.png";
import mountain from "../assets/Images/mountain.png";
import star from "../assets/Images/star.png";

const Parallax = ({ type }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const celestialAnimation = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 700,
      y: -700,
      transition: {
        duration: 25,
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
        duration: 30,
      },
    },
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div ref={ref} className="overflow-hidden relative h-screen flex flex-col justify-center items-center" style={{ background: type == "Projects" ? "linear-gradient(180deg, #000814, #003566)" : "linear-gradient(180deg, #000814, #FFC300)" }}>
      <motion.h1 style={{ y: yText }} className="z-30 text-9xl font-['EduTASBeginner'] text-[#000814]">
        {type == "Projects" ? "What I do ?" : "What I did ?"}
      </motion.h1>
      <motion.div className="z-20 w-full absolute bottom-0" style={{ backgroundImage: `url(${mountain})`, height: "75vh", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></motion.div>
      <motion.div variants={starAnimation} initial="initial" animate={isInView && "animate"} className="z-10 w-full absolute" style={{ backgroundImage: `url(${star})`, height: "100vh", backgroundSize: "cover", backgroundRepeat: "repeat-y" }}></motion.div>
      {/* variants={celestialAnimation} initial="initial" animate={isInView && "animate"} */}
      <motion.div variants={celestialAnimation} initial="initial" animate={isInView && "animate"} className="z-10 w-full absolute bottom-[92px] left-[-190px] md:top-[25rem] md:left-[26rem]" style={{ backgroundImage: type == "Projects" ? `url(${moon})` : `url(${sun})`, width: "50vh", height: "50vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top" }}></motion.div>
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.string,
};

export default Parallax;
