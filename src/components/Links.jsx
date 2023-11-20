import { motion } from "framer-motion";

const Links = () => {
  const items = ["Homepage", "Projects", "Achivements", "Technical Skills", "Contact"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: 50,
      opacity: 0,
    },
  };

  const imageVariants = {
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const circleVariants = {
    open: {
      pathLength: 1, 
      transition: {
        duration: 2, 
        type: "spring", 
        stiffness: 130, 
        damping: 10
      }
    },
    close: {
      pathLength: 0
    },
  };

  return (
    <motion.div className="shadow-lg shadow-black w-[400px] bg-[#000814] h-screen flex flex-col justify-center items-center font-bold text-2xl gap-y-[15px]" variants={variants}>
        <motion.img variants={imageVariants} className="w-[120px] h-[120px] mb-10 shadow-lg" src="/me.png" alt="me" />
        <svg className="" width="240px" height="240px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" style={{position: "absolute", top: "45px", left: "80px"}}>
          <g id="SVGRepo_bgCarrier" style={{strokeWidth: "0"}}></g>
          <g id="SVGRepo_tracerCarrier" style={{strokeLineCap: "round", strokeLineJoin: "round", stroke: "#CCCCCC", strokeWidth: "0.288"}}></g>
          <g id="SVGRepo_iconCarrier"> 
            <motion.path variants={circleVariants} d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"  style={{strokeLineCap: "round", strokeLineJoin: "round", stroke: "#ffc300", strokeWidth: "0.576"}}></motion.path> 
          </g>
        </svg>
      {items.map((item) => (
        <motion.a className="text-[#FFD60A]" href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {item}
        </motion.a>
      ))}
      <motion.a variants={itemVariants} whileHover={{backgroundColor: "#FFC300", color: "#000814", transition: {duration: 0.5, type: "spring"}}} className="px-2 py-3 text-bold rounded-md font-['Tajawal'] text-[#FFC300] bg-[#000814]" href="/Resume- Ansh Gupta.pdf" download>
              My Resume
      </motion.a>
    </motion.div>
  );
};

export default Links;
