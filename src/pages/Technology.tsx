import { useState } from "react";
import launchLandscape from "../assets/technology-images/image-launch-vehicle-landscape.jpg";
import launchPortrait from "../assets/technology-images/image-launch-vehicle-portrait.jpg";
import spacePortLandscape from "../assets/technology-images/image-spaceport-landscape.jpg";
import spacePortPortrait from "../assets/technology-images/image-spaceport-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology-images/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology-images/image-space-capsule-portrait.jpg";

interface TechNavProps {
  name: string;
  image: {
    landscape: string;
    portrait: string;
  };
  description: string;
  text: number;
}

const data: TechNavProps[] = [
  {
    name: "LAUNCH VEHICLE",
    image: {
      landscape: launchLandscape,
      portrait: launchPortrait,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    text: 1,
  },

  {
    name: "SPACEPORT",
    image: {
      landscape: spacePortLandscape,
      portrait: spacePortPortrait,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    text: 2,
  },
  {
    name: "SPACE CAPSULE",
    image: {
      landscape: spaceCapsuleLandscape,
      portrait: spaceCapsulePortrait,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    text: 3,
  },
];

export const Technology = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const content = data[activeIndex];
  return (
    <>
      <section>
        <header className="text-xl mx-20 mt-15 md:mx-15  lg:mt-0">
          <span className="text-[#454751] font-bold mr-2"> 03</span> SPACE LAUNCH 101
        </header>
        <section className="flex flex-col mt-[100px] md:my-[100px] md:mt-15 lg:mt-0 lg:my-0 lg:flex-row lg:justify-between">
          <img
            src={content.image.landscape}
            className="h-[280px] lg:hidden md:block"
            alt=""
          />
          <div className="flex flex-col py-10 md:mx-auto lg:flex-row lg:mx-auto lg:my-[100px]">
            <div className="flex flex-row mx-auto lg:mx-0 lg:flex-col lg:mt-20 gap-5">
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={` cursor-pointer w-[50px] h-[50px] rounded-full ${
                      activeIndex === index
                        ? "bg-white text-[#484a50] "
                        : "bg-transparent border "
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.text}
                  </button>
                );
              })}
            </div>
            <div className="w-[330px] mx-auto text-center md:w-[520px] lg:text-left lg:w-[450px] md:ml-[45px] ">
              <p className="text-xl text-[#7d7e89] mt-10 lg:mt-0">
                THE TERMINOLOGY...
              </p>
              <div className="py-5 mx-1">
                <p className="text-4xl"> {content.name}</p>
                <p className="py-8 leading-7 text-center lg:text-left">
                  {" "}
                  {content.description}{" "}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mr-0"> */}
          <img
            src={content.image.portrait}
            className="hidden lg:block lg:mt-20 "
            alt=""
          />

          {/* </div> */}
        </section>
      </section>
    </>
  );
};
