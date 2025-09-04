import { useState } from "react";
import Douglas from "../assets/crew-images/image-douglas-hurley.png";
import Mark from "../assets/crew-images/image-mark-shuttleworth.png";
import Victor from "../assets/crew-images/image-victor-glover.png";
import Anousheh from "../assets/crew-images/image-anousheh-ansari.png";

interface CrewNavProps {
  role: string;
  name: string;
  image: string;
  bio: string;
}

const data: CrewNavProps[] = [
  {
    name: "DOUGLAS HURLEY",
    image: Douglas,
    role: "COMMANDER",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },

  {
    name: "MARK SHUTTLEWORTH",
    image: Mark,
    role: "MISSION SPECIALIST",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "VICTOR GLOVER",
    image: Victor,
    role: "PILOT",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "ANOUSHEH ANSARI",
    image: Anousheh,
    role: "FLIGHT ENGINEER",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export const Crew = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const content = data[activeIndex];

  return (
    <>
      <section className="py-5">
        <header className="text-xl mx-18 md:mx-10 mt-15 md:mt-13 lg:mx-37 lg:text-[30px] tracking-[0.3rem] font-['BarlowCondensed']">
          <span className="text-[#54575e]  font-extrabold mr-3"> 02</span> MEET YOUR
          CREW
        </header>
        <div className="flex flex-col lg:flex-row lg:w-[950px] mx-auto">
          {/* for the content */}
          <section className="flex flex-col mt-18 gap-20 md:gap-20 text-center mx-auto md:mt-[60px] lg:mt-0 lg:gap-0 lg:text-left lg:justify-around">
            <div className="flex flex-col gap-3 w-[350px] md:w-[550px] lg:w-[500px] lg:mt-[150px] lg:mr-15">
              <p className="text-[#5f606e] text-2xl font-['Bellefair']">{content.role}</p>
              <span className="text-4xl font-['Bellefair']">{content.name}</span>
              <p className="leading-loose font-['Barlow']">{content.bio}</p>
            </div>
            <div className="mx-auto">
              <ul className="flex justify-evenly w-[150px] h-[50px]">
                {data.map((_item, index) => {
                  return (
                    <li
                      key={index}
                      className={` cursor-pointer w-[12px] h-[12px] rounded-full ${
                        activeIndex === index
                          ? "bg-white"
                          : "bg-[#383844] border border-transparent"
                      }`}
                      onClick={() => setActiveIndex(index)}
                      >
                      
                      
                      
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <div>
            <nav></nav>
          </div>
          {/* for the image */}
          <img
            className="w-[300px] md:w-[500px] md:h-[500px] mx-auto lg:mx-0 lg:w-[500px] lg:h-[550px] lg:mt-15"
            src={content.image}
            alt=""
          />
        </div>
      </section>
    </>
  );
};
