import {motion, useInView} from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_99xlpbl', 'template_dwhzc3c', form.current, '15uHFwebaV6f9IZvi')
            .then((result) => {
            setSuccess(true);
            setError(false);
        }, (error) => {
            setSuccess(false);
            setError(true);
        });
    };

    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"});

    const lineAnimation = {
        initial: {
            scaleY: "0%",
        },
        animate: {
            scaleY: "100%",
            transition: {
                delay: 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 130,
                damping: 30,
            }
        }
    };

    const posterAnimation = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.5,
                type: "spring",
                stiffness: 130,
                damping: 30,
                staggerChildren: 0.1,
            },
        },
    };

    const formAnimation = {
        initial: {
            scale: "0%",
            opacity: 0,
        },
        animate: {
            scale: "100%",
            opacity: 1,
            transition: {
                delay: 1.6,
                type: "spring",
                stiffness: 130,
                damping: 30,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div ref={ref} className="flex flex-row justify-center items-center bg-gradient-to-b from-[#000814] to-[#003566] h-screen">
            <motion.div variants={lineAnimation} initial="initial" animate={isInView && "animate"} className="w-[1%] h-[60%] rounded-full bg-[#ffc300]"></motion.div>
            <motion.div className="ml-2" variants={posterAnimation} initial="initial" animate="animate">
                <motion.h1 className="text-7xl font-bold text-[#000814]">Intrested <span className="text-3xl text-[#003566]">in me</span></motion.h1>
                <motion.h2 variants={posterAnimation} className="text-3xl font-bold text-[#003566]">Contact me by sending an <span className="text-7xl text-[#000814]">email.</span></motion.h2>
                <motion.div variants={posterAnimation} initial="initial" animate={isInView && "animate"}className="mt-5 py-2 h-auto">
                    <span className="text-lg font-black">Ansh Gupta<br/></span>
                    <span className="text-lg font-black">B.tech, CSE<br/></span>
                    <span className="text-lg font-black">ansh.go2002@gmail.com<br/></span>
                    <span className="text-lg font-black">+91-6386216706</span>
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
            </motion.div>
            <div className="relative ml-10 w-[30%]">
                <motion.div initial={{opacity: 1}} animate={isInView && {opacity: 0, transition: {delay: 1.3, duration: 0.2}}} className="absolute top-0 left-0 right-0">
                    <svg fill="#ffffff" viewBox="0 0 24 24" id="email" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" className="icon line-color" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <motion.rect initial={{pathLength: 0}} animate={isInView && {pathLength: 1,transition: {duration: 2.5, type: "spring"}}} id="primary" x="3" y="5" width="18" height="14" rx="1" style={{fill: "none", stroke: "#ffffff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2"}}></motion.rect>
                            <motion.path initial={{pathLength: 0}} animate={isInView && {pathLength: 1,transition: {duration: 2.5, type: "spring"}}} id="secondary" d="M20.62,5.22l-8,6.29a1,1,0,0,1-1.24,0l-8-6.29A1,1,0,0,1,4,5H20A1,1,0,0,1,20.62,5.22Z" style={{fill: "none", stroke: "#ffc300", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2"}}></motion.path>
                        </g>
                    </svg>
                </motion.div>
                <motion.form ref={form} variants={formAnimation} initial="initial" animate={isInView && "animate"} className="w-[100%] flex flex-col justify-center items-center gap-2" onSubmit={sendEmail}>
                    <motion.input variants={formAnimation} className="w-full p-2 bg-transparent ring-2 ring-white" type="text" placeholder="Your Name" name="name" required/>
                    <motion.input variants={formAnimation} className="w-full p-2 bg-transparent ring-2 ring-white" type="email" placeholder="Email" name="email" required/>
                    <motion.textarea variants={formAnimation} className="w-full p-2 bg-transparent ring-2 ring-white" rows="8" cols="8" placeholder="Message" name="message"/>
                    <motion.button variants={formAnimation} className="w-full font-bold p-2 ring-2 ring-[#ffc300] bg-[#ffc300] text-[#000814] hover:text-[#ffc300] hover:bg-[#000814] hover:ring-[#000814]">Submit</motion.button>
                    {success && 
                        <motion.div initial={{opacity: 1}} animate={{opacity:0, transition: {delay:3, duration: 1}}} className="text-center text-sm text-green">
                            Form Submitted Successfully!
                        </motion.div>
                    }
                    {error && 
                        <motion.div initial={{opacity: 1}} animate={{opacity:0, transition: {delay:3, duration: 1}}} className="text-center text-sm text-red">
                            Sorry! Some Error Occurred.
                        </motion.div>
                    }    
                </motion.form>
            </div>
        </div>
    );
}

export default Contact;