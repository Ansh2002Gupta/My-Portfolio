import PropTypes from "prop-types";
import {motion, useInView, useScroll, useSpring} from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "Memoir: Globally Connected Blogging Platform",
        description: "This is a versatile multiuser application accessible both on computer and mobile phones. Users can create, read, publish, update and deletee their blogs anytime, encapsulating CRUD functionality. It provided a feature `View Author` that allows you to connect more deeply with other authors. App categories the blogs into various thematic sections, enabling users to explore content of their interest. I have used MySQL Workbench as a database management system, storing user details and their blog content. Also developed a REST API, for communication between client and database and used a middleware called Multer for uploading blog and user images into the web application. ",
        technology: ["ReactJs", "JavaScript", "MySQL", "Tailwind CSS"],
        image: "https://github.com/Ansh2002Gupta/My-Portfolio/blob/master/public/Memoir.png",
        link: "https://github.com/Ansh2002Gupta/blogapp",
    },
    {
        id: 2,
        title: "Notedd: Your Online Personal Note Organizer",
        description: "This app is an ultimate space for securely storing, organising, and sharing notes all in one place. It features a captivating user interface, featuring a Sign-In and Log-In page, on the frontend. Developed a REST API in the backend for user registration and authorization. Also added CRUD functionality that allows users to create, read, update and delete their notes with ease. It uses MongoDB as it's backend database to smoothly manage user notes and keep them readily accessible whenever needed. I have applied Json-Web-Token (J.W.T) security for safe transfer of user details between browser and server.",
        technology: ["ReactJs", "JavaScript", "MongoDB", "Tailwind CSS"],
        image: "https://github.com/Ansh2002Gupta/My-Portfolio/blob/master/public/notedd.png",
        link: "https://github.com/Ansh2002Gupta/Notedd",
    },{
        id: 3,
        title: "Distractions: Your Gateway to Gaming Delight",
        description: "Developed a gaming website named Distractions. Created a user sign-in and sign-up page, with proper connections to the backend database. Designed a beautiful user dashboard for displaying high scores, recent plays and tracking achievements. Connected phpmyadmin database for user registration and authorization. Hosted this website on a virtual private server for a period of 2 months (Jan `22 - Feb `22) over the internet.",
        technology: ["PHP", "HTML", "CSS"],
        image: "https://github.com/Ansh2002Gupta/My-Portfolio/blob/master/public/Distraction.png",
        link: "https://github.com/Ansh2002Gupta/Gaming_website",
    },
];

const Single = ({item}) => {
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"});

    const animation = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
            }
        }
    }

    // const ref = useRef();
    // const {scrollYProgress} = useScroll({
    //     target: ref,
    //     offset: ["start start", "end start"]
    // });
    // const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    // const y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    // const scale = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    return (
        <section ref={ref} className="flex flex-col justify-center items-center">
            <motion.div variants={animation} initial="initial" animate={isInView && "animate"}className="mt-10 p-3 bg-[#000814] flex flex-row max-w-[65vw] h-auto rounded-lg shadow-lg shadow-black">
                <motion.img variants={animation} className="p-1 mr-7 w-[40%] h-[100%] border-[#FFD60A] border-2" src={item.image} alt="default_image" />
                <motion.div variants={animation} className="flex flex-col mx-2 gap-2">
                    <motion.h2 variants={animation}  className="text-4xl text-[#FFC300]">{item.title}</motion.h2>
                    <motion.div variants={animation}  className="min-w-[25%] min-h-[25%] overflow-hidden">{item.description}</motion.div>
                    <motion.div variants={animation}  className="flex flex-row gap-4">
                        {
                            item.technology.map((tech, id) => (
                                <span className="p-2 font-bold ring-2 ring-[#FFC300] font-['Battambang'] rounded-lg" key={id}>{tech}</span>
                            ))
                        }
                    </motion.div>
                    <motion.a variants={animation}  className="text-center px-2 py-3 rounded-md bg-[#FFC300] font-['Tajawal'] text-[#000814] text-bold hover:bg-[#FFD60A]" href={item.link}>Live Demo</motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}

const Projects = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 130,
        damping: 30
    })

    return (
        <div ref={ref} className="bg-gradient-to-b from-[#000814] to-[#003566]">
            <div className="flex flex-col items-center justify-center h-[15vh] sticky top-0 left-0 right-0">
                <h1 className="text-7xl font-bold text-[#003566]">My Projects</h1>
                <motion.div className="bg-[#FFC300] h-[10px] w-full" style={{scaleX}}></motion.div>
            </div>
            {
                items.map((item) => (
                    <Single item={item} key={item.id}/>
                ))
            }
        </div>
    );
}

Single.propTypes = {
    item: PropTypes.object.isRequired,
  };

export default Projects;