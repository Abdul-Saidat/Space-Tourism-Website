import { useState } from "react";
import Moon from "../assets/destination-images/image-moon.png";
import Mars from "../assets/destination-images/image-mars.png";
import Europa from "../assets/destination-images/image-europa.png";
import Titan from "../assets/destination-images/image-titan.png";
// import { Navbar } from "../components/mobile-navbar";

interface DestinationNavProps {
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
}

const data: DestinationNavProps[] = [
  {
    name: "MOON",
    image: Moon,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travel: "3 DAYS",
  },

  {
    name: "MARS",
    image: Mars,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. KM",
    travel: "9 MONTHS",
  },
  {
    name: "EUROPA",
    image: Europa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. KM",
    travel: "3 YEARS",
  },
  {
    name: "TITAN",
    image: Titan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. KM",
    travel: "7 YEARS",
  },
];

export const Destination = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const content = data[activeIndex];

  return (
    <>
      <section>
        <header className="text-center text-xl md:text-left lg:mx-[170px] md:mx-10 my-[50px] lg:text-[30px] tracking-[0.3rem] font-['BarlowCondensed']">
          <span className=" text-[#454751] font-extrabold tracking-normal mr-5">
            01
          </span>
          PICK YOUR DESTINATION
        </header>
        <div className="flex flex-col md:text-center lg:text-left lg:flex-row justify-between lg:w-[900px] mx-auto my-[130px] ">
          <div className=" w-[230px] mx-auto lg:w-[400px] md:w-[300px] md:mx-auto relative bottom-15 lg:initial lg:bottom-0 lg:mx-0">
            <img src={content.image} className="" alt="destination images" />
          </div>
          <div className="flex flex-col mx-auto gap-[25px] justify-between md:mx-auto lg:mx-0">
            <div className="mx-auto md:w-[280px]  md:mx-auto lg:mx-0">
              <ul className="flex gap-8 md:gap-10">
                {data.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={` cursor-pointer pb-2 font-['BarlowCondensed'] tracking-widest text-[18px] ${
                        activeIndex === index
                          ? `border-b-2 border-white`
                          : "border-none"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-center lg:text-left w-[350px] md:w-[530px] lg:w-[400px] flex flex-col gap-10">
              <p className="text-6xl md:text-8xl font-['Bellefair']"> {content.name} </p>
              <p className="font-['Barlow'] leading-loose">{content.description} </p>
              <hr></hr>
              <section className="flex flex-col gap-[30px] md:flex-row md:justify-evenly lg:justify-between md:gap-[80px] lg:text-left md:text-center">
                <div className="flex flex-col gap-2">
                  <p className="font-['BarlowCondensed'] tracking-wider">AVG. DISTANCE</p>
                  <span className="text-3xl font-['Bellefair']"> {content.distance} </span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-['BarlowCondensed'] tracking-wider">EST. TRAVEL TIME</p>
                  <span className="text-3xl font-['Bellefair']"> {content.travel} </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
