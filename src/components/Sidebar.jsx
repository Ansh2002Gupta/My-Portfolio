import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";
import Links from "./Links";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 70,
      },
    },
    close: {
      clipPath: "circle(0px at 40px 40px)",
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="flex flex-col" animate={open ? "open" : "close"}>
      <motion.div className="fixed z-50" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
