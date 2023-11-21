import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 2.5,
    description: `Secured a rank of <strong style="color: #FFC300;">565</strong> in <a style="font-weight: bold" href="https://www.linkedin.com/posts/ansh-gupta-18040a226_coderush-newton-school-april-23-activity-7060338433176535040-Svl6?utm_source=share&utm_medium=member_desktop">CodeRush</a> coding competition conducted by <strong style="color: #FFC300;">Newton School.</strong>`,
  },
  {
    id: 2.6,
    description: `Achieved a <strong style="color: #FFC300;">Gold Certificate</strong> in Cloud Computing Foundations from <a style="font-weight: bold" href="https://cert.diceid.com/fsn/cid/SxiE0D">Wipro FutureSkills.</a>`,
  },
  {
    id: 2.7,
    description: `Secured global ranks of <strong style="color: #FFC300;">2775</strong> and <strong style="color: #FFC300;">2789</strong> in round <strong style="color: #FFC300;">G</strong> and <strong style="color: #FFC300;">H</strong> of <a style="font-weight: bold" href="https://drive.google.com/file/d/1dk3Goa8xTSOvdH5r3PTtOLr_6KBPf7eq/view?usp=drive_link">Google Kickstart.</a>`,
  },
  {
    id: 2.8,
    description: `Highest rating of <strong style="color: #FFC300;">1739 (3 star)</strong> so far achieved on <a style="font-weight: bold"  href="https://www.codechef.com/users/saktiman2002">CodeChef.</a>`,
  },
  {
    id: 2.9,
    description: `Completed over <strong style="color: #FFC300;">500+</strong> problems collectively on <a style="font-weight: bold" href="https://leetcode.com/CodeLeet2002/">Leetcode</a> and <a style="font-weight: bold" href="https://auth.geeksforgeeks.org/user/anshgo2002/practice">GFG.</a>`,
  },
];

const Achivements = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  // const containerAnimation = {
  //     initial: {
  //         scale: "0%",
  //     },
  //     animate: {
  //         scale: "100%",
  //         transition: {
  //             delay: 2.5,
  //             duration: 1,
  //             type: "spring",
  //             stiffness: 130,
  //             damping: 30,
  //         },
  //     },
  // };

  const trophyAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        delay: 3,
        duration: 1,
      },
    },
  };

  return (
    <div ref={ref} className="bg-gradient-to-b from-[#000814] to-[#003566] h-screen">
      <div className="flex flex-col items-center justify-center h-[15vh] sticky top-0 left-0 right-0">
        <h1 className="text-5xl md:text-7xl font-bold text-[#003566]">Achivements</h1>
      </div>
      <div className="h-[85vh] flex flex-row justify-center items-center">
        <motion.div variants={trophyAnimation} initial="initial" animate={isInView && "animate"} className="relative left-0 mr-2">
          {/* <motion.img variants={trophyAnimation} initial="initial" animate={isInView && "animate"} className="z-40 w-[65vw] h-[95vh]" src="/trophy.png" alt="trophy" /> */}
          <svg className="w-full h-full md:w-[650px] md:h-[650px]" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-6.4 -6.4 76.80 76.80" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="none" stroke="#FFC300">
            <motion.g initial={{ pathLength: 0 }} animate={isInView && { pathLength: 1, transition: { duration: 6 } }} id="SVGRepo_bgCarrier" strokeWidth="0"></motion.g>
            <motion.g initial={{ pathLength: 0 }} animate={isInView && { pathLength: 1, transition: { duration: 6 } }} id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></motion.g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1, transition: { duration: 6 } }}
                  fill="#"
                  d="M60,6h-7V4c0-2.212-1.789-4-4-4H15c-2.211,0-4,1.788-4,4v2H4c-2.211,0-4,1.788-4,4v8 c0,6.074,4.925,11,11,11h0.096C12.01,38.659,19.477,46.395,29,47.761V56h-7c-2.211,0-4,1.788-4,4v3c0,0.552,0.447,1,1,1h26 c0.553,0,1-0.448,1-1v-3c0-2.212-1.789-4-4-4h-7v-8.239c9.523-1.366,16.985-9.1,17.899-18.761H53c6.075,0,11-4.926,11-11v-8 C64,7.788,62.211,6,60,6z M11,23c-2.762,0-5-2.239-5-5v-6h5V23z M2,18v-8c0-1.105,0.896-2,2-2h7v2H5c-0.553,0-1,0.446-1,1v7 c0,3.865,3.134,7,7,7v2C6.029,27,2,22.97,2,18z M42,58c1.104,0,2,0.895,2,2v2H20v-2c0-1.105,0.896-2,2-2H42z M31,56v-8.052 C31.334,47.964,31.662,48,32,48s0.666-0.036,1-0.052V56H31z M51,27c0,10.492-8.507,19-19,19s-19-8.508-19-19V4c0-1.105,0.896-2,2-2 h34c1.104,0,2,0.895,2,2V27z M53,12h5v6c0,2.761-2.238,5-5,5V12z M62,18c0,4.97-4.029,9-9,9v-2c3.866,0,7-3.135,7-7v-7 c0-0.554-0.447-1-1-1h-6V8h7c1.104,0,2,0.895,2,2V18z"></motion.path>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1, transition: { duration: 6 } }}
                  fill="#"
                  d="M39.147,19.36l-4.309-0.658l-1.936-4.123c-0.165-0.352-0.518-0.575-0.905-0.575s-0.74,0.224-0.905,0.575 l-1.936,4.123l-4.309,0.658c-0.37,0.058-0.678,0.315-0.797,0.671s-0.029,0.747,0.232,1.016l3.146,3.227l-0.745,4.564 c-0.062,0.378,0.099,0.758,0.411,0.979s0.725,0.243,1.061,0.059l3.841-2.123l3.841,2.123C35.99,29.959,36.157,30,36.323,30 c0.202,0,0.404-0.062,0.576-0.184c0.312-0.221,0.473-0.601,0.411-0.979l-0.745-4.564l3.146-3.227 c0.262-0.269,0.352-0.66,0.232-1.016S39.518,19.418,39.147,19.36z M34.781,23.238c-0.222,0.228-0.322,0.546-0.271,0.859 l0.495,3.029l-2.522-1.395c-0.151-0.083-0.317-0.125-0.484-0.125s-0.333,0.042-0.484,0.125l-2.522,1.395l0.495-3.029 c0.051-0.313-0.05-0.632-0.271-0.859l-2.141-2.193l2.913-0.446c0.329-0.05,0.612-0.261,0.754-0.563l1.257-2.678l1.257,2.678 c0.142,0.303,0.425,0.514,0.754,0.563l2.913,0.446L34.781,23.238z"></motion.path>
              </g>
            </g>
          </svg>
          {/* <img className="z-30 absolute top-0 left-40 w-[25vw] h-[60vh]" src="/cloud.png" alt="" />
                <img className="z-30 absolute top-0 right-40 w-[25vw] h-[60vh]" src="/cloud.png" alt="" />
                <img className="z-20 absolute top-20 right-60 w-[25vw] h-[60vh]" src="/cloud.png" alt="" />
                <img className="z-20 absolute top-20 left-60 w-[25vw] h-[60vh]" src="/cloud.png" alt="" /> */}
        </motion.div>
        <motion.div className="absolute z-40 w-full md:w-[60vw] h-[70vh] md:h-[80vh] grid grid-cols-2 md:grid-cols-3 gap-2 px-1 sm:px-2 md:p-10">
          {items.map(item => (
            <motion.div initial={{ scale: "0%" }} animate={isInView && { scale: "100%", transition: { delay: item.id, duration: 0.5 } }} key={item.id} className="shadow-md rounded-lg shadow-black text-center overflow-hidden px-2 py-[20%] md:py-[30%]" style={{ backgroundColor: (item.id * 10) % 2 ? "#000814" : "#001D3D", border: item.id % 2 ? "2px solid rgb(0,8,20)" : "2px solid rgb(0,29,61)", borderStyle: "inset" }} dangerouslySetInnerHTML={{ __html: item.description }}></motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Achivements;
