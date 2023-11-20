import { motion } from "framer-motion"

const textAnimation = {
  initil: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 100,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  },
};

const imageAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 100,
    transition: {
      delay: 0.5,
      duration: 3,
    },
  },
};

const labelAnimation = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Header = () => {
  return (
    <div className="relative p-1 h-[90vh] overflow-hidden bg-gradient-to-b from-[#000814] to-[#003566]">
      <div className="relative p-1 m-auto h-[90vh]">
        <motion.div className="z-40 absolute w-96 left-56 top-24 p-1 flex flex-col gap-2" variants={textAnimation} initial="initial" animate="animate">
          <motion.h2 className="text-4xl font-['EduTASBeginner'] text-[#FFC300] tracking-wider" variants={textAnimation}>
            Hi, I&apos;m Ansh Gupta.
          </motion.h2>
          <motion.h1 className="text-6xl text-[#FFFFF] font-bold tracking-wide" variants={textAnimation}>
            Web Developer and UI Designer
          </motion.h1>
          <motion.div className="flex flex-row gap-4" variants={textAnimation}>
            <motion.a whileHover={{backgroundColor: "#FFC300", color: "#000814", transition: {duration: 0.5, type: "spring"}}} className="px-2 py-3 text-bold rounded-md font-['Tajawal'] text-[#FFC300] bg-[#000814]" variants={textAnimation} href="#Contact">
              Contact Me
            </motion.a>
            <motion.a whileHover={{backgroundColor: "#FFC300", color: "#000814", transition: {duration: 0.5, type: "spring"}}} className="px-2 py-3 text-bold rounded-md font-['Tajawal'] text-[#FFC300] bg-[#000814]" variants={textAnimation} href="https://github.com/Ansh2002Gupta/My-Portfolio/blob/master/public/Resume-%20Ansh%20Gupta.pdf" download>
              My Resume
            </motion.a>
          </motion.div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1}}} className="social flex flex-row gap-2">
            <a className="py-1 hover:border-b-2 hover:border-b-[#ffc300]" href="https://www.linkedin.com/in/ansh-gupta-18040a226">
              <motion.svg whileHover={{scale: 0.9}} fill="#000814" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve" width="64px" height="61px" stroke="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                  <g> 
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"></path> 
                    <rect x="-8.5" y="348.4" width="49.9" height="159.7" fill="#FFC300"></rect>
                    <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z" fill="#FFC300"></path>
                    <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z" fill="#FFC300"></path> 
                  </g> 
                </g>
              </motion.svg>
            </a>
            <a className="py-1 hover:border-b-2 hover:border-b-[#FFC300]" href="/">
              <motion.svg whileHover={{scale: 0.9}} width="64px" height="64px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <rect className="cls-1" style={{fill: "none", stroke: "#000814", strokeMiterlimit: "10", strokeWidth: "1.5px"}} x="1.5" y="1.5" width="21" height="21" rx="1.82"></rect>
                  <circle className="cls-1" style={{fill: "none", stroke: "#FFC300", strokeMiterlimit: "10", strokeWidth: "1.91px"}} cx="12" cy="12" r="4.77"></circle>
                  <circle className="cls-2" style={{fill: "#FFC300", stroke: "#FFC300", strokeMiterlimit: "10", strokeWidth: "1.91px"}} cx="18.2" cy="5.8" r="1.43"></circle>
                </g>
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="absolute text-[#003566] w-[197%] font-['Battambang'] font-extrabold opacity-[50%] bottom-0 text-[40vh] whitespace-nowrap" variants={labelAnimation} initial="initial" animate="animate">
        ReactJS . Javascript . NodeJS . MySQL . MongoDB . C++
        {/* Smartworking . Passionate . Explorer . Player . Listener */}
      </motion.div>
      <div className="absolute top-3 right-10">
        <motion.img className="bg-blend-screen shadow-xl shadow-black rounded-full w-[80%]" src="https://github.com/Ansh2002Gupta/My-Portfolio/blob/master/public/me.png" alt="This is my image" variants={imageAnimation} initial="initial" animate="animate"></motion.img>
        <svg className="absolute" width="650px" height="650px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" style={{position: "absolute", top: "-123px", left: "-123px"}}>
          <g id="SVGRepo_bgCarrier" style={{strokeWidth: "0"}}></g>
          <g id="SVGRepo_tracerCarrier" style={{strokeLineCap: "round", strokeLineJoin: "round", stroke: "#CCCCCC", strokeWidth: "0.288"}}></g>
          <g id="SVGRepo_iconCarrier"> 
            <motion.path initial={{pathLength: 0}} animate={{pathLength: 1, transition: {duration: 2, type: "spring", stiffness: 130, damping: 10}}} d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"  style={{strokeLineCap: "round", strokeLineJoin: "round", stroke: "#ffc300", strokeWidth: "0.576"}}></motion.path> 
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
