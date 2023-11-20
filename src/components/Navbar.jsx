import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="navbar bg-[#000814]">
      <Sidebar />
      <div className="wrapper flex flex-row items-center justify-around h-14">
        {/* <motion.span className="font-bold text-[#003566]" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 2 }} transition={{ duration: 0.5 }}>
          Portfolio.react
        </motion.span> */}
        {/* <div className="social flex flex-row">
          <a className="py-1 hover:border-b-2 hover:border-b-[#ffc300]" href="https://www.linkedin.com/in/ansh-gupta-18040a226">
            <img className="w-[36px] h-[37px]" src="/LinkedIn-logo.png.png" alt="LinkedIn" />
          </a>
          <a className="py-1 hover:border-b-2 hover:border-b-[#ffc300]" href="/">
            <img className="w-14" src="/Whatsapp-logo.png.png" alt="WhatsApp" />
          </a>
          <a className="py-1 hover:border-b-2 hover:border-b-[#ffc300]" href="/">
            <img className="w-[36px] h-[36px]" src="/Instagram-logo.png.png" alt="Instagram" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
