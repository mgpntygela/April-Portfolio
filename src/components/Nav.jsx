import { styles } from "../styles";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

import { logo, menu, close } from "../assets";
import { useState, useEffect } from "react";

const Nav = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } flex justify-between items-center fixed w-full z-20 ${
        scrolling ? "blue-gradient py-2" : "gray-gradient py-5"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-black-200 font-Ubuntu font-bold text-[15px] lg:text-[18px] flex">
            NEGS &nbsp;{" "}
            <span className="md:block hidden font-Ubuntu">| APRIL ALIT</span>{" "}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
          ${
            active === link.title
              ? "text-black-300 font-bold font-Ubuntu"
              : "text-black-200 font-Ubuntu"
          }
          hover:text-black-300 text-[18px] font-semibold cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menutoggle"
            className="w-[28] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-3">
              {navLinks.map((link) => (
                <li key={link.id} className="flex flex-col font-Ubuntu">
                  <a
                    href={`#${link.id}`}
                    className=" font-semibold hover:font-bold hover:text-black-300"
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
