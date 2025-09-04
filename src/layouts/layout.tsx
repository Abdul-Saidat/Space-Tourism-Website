import DesktopHomebg from "../assets/desktop-images/desktop-home-bg.jpg";
import DesktopCrewbg from "../assets/desktop-images/desktop-crew-bg.jpg";
import DesktopTechnologybg from "../assets/desktop-images/desktop-technology-bg.jpg";
import DesktopDestinationbg from "../assets/desktop-images/desktop-destination-bg.jpg";
import TabletHomeBg from "../assets/tablet-images/home-bg.jpg";
import TabletCrewBg from "../assets/tablet-images/crew-bg.jpg";
import TabletDestinationBg from "../assets/tablet-images/destination-bg.jpg";
import TabletTechnologyBg from "../assets/tablet-images/technology-bg.jpg";
import MobileHomeBg from "../assets/mobile-images/home-bg.jpg";
import MobileCrewBg from "../assets/mobile-images/crew-bg.jpg";
import MobileDestinationBg from "../assets/mobile-images/destination-bg.jpg";
import MobileTechnologyBg from "../assets/mobile-images/technology-bg.jpg";
import logo from "../assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar } from "../components/mobile-navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export const Layout = () => {
  type BackgroundSet = {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  const location = useLocation();
  console.log(location.pathname);

  const path = location.pathname === "/" ? "/Home" : location.pathname;
  console.log("current path", path);

  const backgrounds: Record<string, BackgroundSet> = {
    "/Home": {
      desktop: DesktopHomebg,
      tablet: TabletHomeBg,
      mobile: MobileHomeBg,
    },
    "/Crew": {
      desktop: DesktopCrewbg,
      tablet: TabletCrewBg,
      mobile: MobileCrewBg,
    },
    "/Destination": {
      desktop: DesktopDestinationbg,
      tablet: TabletDestinationBg,
      mobile: MobileDestinationBg,
    },
    "/Technology": {
      desktop: DesktopTechnologybg,
      tablet: TabletTechnologyBg,
      mobile: MobileTechnologyBg,
    },
  };

  type ScreenSize = "mobile" | "tablet" | "desktop";

  const [screenSize, setScreenSize] = useState<ScreenSize>("mobile");
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const bgImage =
    backgrounds[path]?.[screenSize] || backgrounds["Home"].desktop;

  return (
    <>
      <section
        className={`w-full bg-cover bg-no-repeat bg-center py-5
            `}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "scroll",
        }}
      >
        <div>
          <header className="w-full flex md:justify-between md:items-center ">
            <img
              src={logo}
              alt="website logo"
              className="w-[50px] h-[50px] mt-10 mx-8 ml-10 lg:ml-15 lg:mt-20 md:mt-2"
            />
            <Navbar />
            <div className="relative h-20">

            <div className="absolute h-[0.5px] -translate-y-1/2 top-[80px] z-10 right-[650px] w-1/2 bg-white"></div>
            <div
              className={` hidden lg:block lg:w-[44rem] md:block md:w-[39rem] md:mt-0 h-20 lg:mt-10 float-right  ${
                location.pathname === "/"
                  ? `backdrop-blur-2xl  `
                  : location.pathname === "/Home"
                  ? ` lg:backdrop-blur-2xl lg:bg-transparent md:bg-[#191c27] `
                  : location.pathname === "/Crew"
                  ? "backdrop-blur-3xl bg-transparent"
                  : location.pathname === "/Destination"
                  ? "backdrop-blur-2xl bg-transparent"
                  : location.pathname === "/Technology"
                  ? "backdrop-blur-3xl bg-[#1e1f2b]"
                  : ""
              }
                
                `}
            >
              <nav>
                <ul className="h-20 font-['BarlowCondensed'] list-none flex items-center justify-end gap-10 mr-13">
                  {/* isActive ? `border-b-2 border-white after:underline-offset-8` : `border-b-2 border-transparent` */}
                  <li className="tracking-widest text-[18px]">
                    <NavLink
                      to="/Home"
                      className={({ isActive }) =>
                        `relative
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-28px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                      }
                    >
                      <span className="mr-2 text-white font-extrabold">00</span>
                      HOME
                    </NavLink>
                  </li>

                  <li className="tracking-widest text-[18px]">
                    <NavLink
                      to="/Destination"
                      className={({ isActive }) =>
                        `relative
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-28px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                      }
                    >
                      <span className="mr-2 text-white font-extrabold">01</span> DESTINATION
                    </NavLink>
                  </li>

                  <li className="tracking-widest text-[18px]">
                    <NavLink
                      to="/Crew"
                      className={({ isActive }) =>
                        `relative
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-28px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                      }
                    >
                      <span className="mr-2 text-white font-extrabold">02</span> CREW
                    </NavLink>
                  </li>

                  <li className="tracking-widest text-[18px]">
                    <NavLink
                      to="/Technology"
                      className={({ isActive }) =>
                        `relative
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-28px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                      }
                    >
                      <span className="mr-2 text-white font-extrabold">03</span> TECHNOLOGY
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            </div>
          </header>
        </div>
        <Outlet />
      </section>
    </>
  );
};
