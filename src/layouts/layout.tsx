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
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Home } from "../pages/Home";
// import type { Crew } from "../pages/Crew";

export const Layout = () => {
  type BackgroundSet = {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  const location = useLocation();
  console.log(location.pathname);

  const path = location.pathname === "/" ? "/home" : location.pathname;
  console.log("current path", path);

  const backgrounds: Record<string, BackgroundSet> = {
    "/home": {
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
    backgrounds[path]?.[screenSize] || backgrounds["home"].desktop;

  return (
    <>
      <section
        className={`w-full h-[150vh] lg:w-full lg:h-[140vh] md:w-full md:h-[200vh]          
            `}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <header className="w-full flex justify-between items-center ">
            <img
              src={logo}
              alt="website logo"
              className="w-[40px] h-[40px] ml-10 lg:mt-10 md:mt-2"
            />
            <div
              className={` hidden lg:block lg:w-[38rem] md:block md:w-[39rem] md:mt-0 h-20 lg:mt-10 float-right ${
                location.pathname === "/"
                  ? `backdrop-blur-2xl  `
                  : location.pathname === "/home"
                  ? ` lg:backdrop-blur-2xl lg:bg-transparent md:bg-[#191c27] `
                  : location.pathname === "/Crew"
                  ? "backdrop-blur-3xl bg-[#252831]"
                  : location.pathname === "/Destination"
                  ? "backdrop-blur-lg bg-[#282a37]"
                  : location.pathname === "/Technology"
                  ? "backdrop-blur-lg bg-[#1d1d29]"
                  : ""
              }
                
                `}
            >
              <nav>
                <ul className="h-20 list-none flex items-center justify-end gap-10 mr-13">
                  {/* isActive ? `border-b-2 border-white after:underline-offset-8` : `border-b-2 border-transparent` */}
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      `relative
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-27px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                    }
                  >
                    <li className="before:content-['00'] before:mr-2 text-white">
                      Home
                    </li>
                  </NavLink>
                  <NavLink
                    to="/Destination"
                    className={({ isActive }) =>
                      `relative
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-27px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                    }
                  >
                    <li className="before:content-['01'] before:mr-2 text-white">
                      Destination
                    </li>
                  </NavLink>
                  <NavLink
                    to="/Crew"
                    className={({ isActive }) =>
                      `relative
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-27px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                    }
                  >
                    <li className="before:content-['02'] before:mr-2 text-white">
                      Crew
                    </li>
                  </NavLink>
                  <NavLink
                    to="/Technology"
                    className={({ isActive }) =>
                      `relative
                    after:content-['']
                    after:block
                    after:w-full
                    after:h-[2px]
                    after:absolute
                    after:bottom-[-27px]
                  after:bg-white
                    after:transition-all
                    after:duration-300
                    after:scale-x-0
                    after:origin-left
    ${isActive ? "after:scale-x-100" : ""}
                    `
                    }
                  >
                    <li className="before:content-['03'] before:mr-2 text-white">
                      Technology
                    </li>
                  </NavLink>
                </ul>
              </nav>
            </div>
          </header>
        </div>
        <Outlet />
      </section>
    </>
  );
};
