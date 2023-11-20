import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ToggleButton = ({ setOpen }) => {
  return (
    <button className="z-50 fixed bg-transparent rounded-full h-[50px] w-[50px] top-1 left-5" onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path strokeWidth="3" stroke="#FFD60A" strokeLinecap="round" variants={{ close: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }}></motion.path>
        <motion.path strokeWidth="3" stroke="#FFD60A" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{ close: { opacity: 1 }, open: { opacity: 0 } }}></motion.path>
        <motion.path strokeWidth="3" stroke="#FFD60A" strokeLinecap="round" variants={{ close: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }}></motion.path>
      </svg>
    </button>
  );
};

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
