import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { parseAddress } from "../utils/parseAddress";
import { useSetAccount,useContractFunctions } from "../hooks";
import { useSelector } from "react-redux";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [bought,setBought]=useState(false)
  const [haveMetamask,setHaveMetamask]=useState(false)
  const account = useSelector((state) => state.accounts.account);
  const memos = useSelector((state) => state.accounts.memos);
  
  if(window.ethereum){
    setHaveMetamask(true)
    const {buyCoffee,getMemos}= useContractFunctions();
    const connectAccount = useSetAccount();
  }
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && window.scrollY < 1400) {
        setActive("About");
      } else if (window.scrollY > 1401 && window.scrollY < 4500) {
        setActive("Work");
      } else if (window.scrollY > 4500 && window.scrollY < 6000) {
        setActive("Contact");
      } else {
        setActive("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <nav
      className={`
       ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
      `}
    >
      <div className="flex items-center max-w-7xl mx-auto justify-between w-full">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className="flex w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Mehmet Ali Çakmak &nbsp;
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li></li>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <button
            onClick={() => connectAccount()}
            className="text-white text-[18px] font-medium cursor-pointer"
          >
            {account ? parseAddress(account,5) : "Connect Wallet"}
          </button>
          
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <button
                onClick={() => connectAccount()}
                className="text-white text-[18px] font-medium cursor-pointer"
              >
                {account ? parseAddress(account,5) : "Connect Wallet"}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
