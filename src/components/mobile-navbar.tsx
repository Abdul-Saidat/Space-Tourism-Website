import { useState } from "react";
import hamburger from "../assets/icon-hamburger.svg";
import closebtn from "../assets/icon-close.svg";
import { Link } from "react-router-dom";

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
          <button className="top-0 right-10" onClick={handleClick}>
            <img src={Hamburger} alt="menu" />
          </button>
        )}
        {isOpen && (
          <div className="z-50 w-[250px] h-[1000px] absolute right-[0px] text-white backdrop-blur-2xl">
            <button className="absolute top-6 right-4" onClick={handleClose}>
              <img src={closebtn} alt="close-button" />
            </button>

            <nav>
              <ul className=" flex flex-col gap-8 mt-[150px] ml-10">
                <li className="before:content-['00'] before:mr-2 cursor-pointer">
                  <Link to={"/Home"}>Home</Link>
                </li>
                <li className="before:content-['01'] before:mr-2 cursor-pointer">
                  <Link to={"/Destination"}>Destination</Link>
                </li>
                <li className="before:content-['02'] before:mr-2 cursor-pointer">
                  <Link to={"/Crew"}>Crew</Link>
                </li>
                <li className="before:content-['03'] before:mr-2 cursor-pointer">
                  <Link to={"/Technology"}>Technology</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};
