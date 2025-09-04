import { useState } from "react";
import hamburger from "../assets/icon-hamburger.svg";
import closebtn from "../assets/icon-close.svg";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Hamburger = hamburger;
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="relative md:hidden">
        {!isOpen && (
          <button className="" onClick={handleClick}>
            <img
              src={Hamburger} 
              className="mt-11 ml-53"
              alt="menu"
            />
          </button>
        )}
        {isOpen && (
          <div className="z-50 w-[250px] fixed top-0 right-0 h-screen mt-0  text-white backdrop-blur-2xl">
            <button className="absolute top-6 right-10" onClick={handleClose}>
              <img src={closebtn} alt="close-button" />
            </button>

            <nav>
              <ul className=" flex flex-col gap-4 mt-[150px] text-xl ml-10 font-['BarlowCondensed'] tracking-widest">
                <li>
                  <NavLink
                    to="/Home"
                    className={({ isActive }) =>
                      `relative inline-block px-1 py-2
                    after:content-['']
                    after:block
                    after:left-0
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-3px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                    }
                  >
                    <span className="mr-2 font-extrabold">00</span> HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Destination"
                    className={({ isActive }) =>
                      `relative inline-block px-1 py-2
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-3px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                    }
                  >
                    <span className="mr-2 font-extraboldt-">01</span> DESTINATION
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Crew"
                    className={({ isActive }) =>
                      `relative inline-block px-1 py-2
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-3px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                    }
                  >
                    <span className="mr-2 font-extrabold">02</span> CREW
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Technology"
                    className={({ isActive }) =>
                      `relative inline-block px-1 py-2
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-3px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                    }
                  >
                    <span className="mr-2 font-extrabold">03</span> TECHNOLOGY
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};
