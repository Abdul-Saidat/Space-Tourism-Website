import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Destination");
  };

  return (
    <>
      <section className="w-full">
        <div className="text-center flex flex-col w-full mt-30 lg:w-[60rem] md:w-[33rem] md:text-center md:flex-col md:my-[10rem] mx-auto lg:mt-[15rem] lg:flex-row text-white lg:justify-between lg:gap-36 lg:text-left">
          <div>
            <div className=" w-[23rem] mt-10 mx-auto lg:w-[33rem] md:w-[33rem] lg:mx-0 md:mx-0">
              <p className="text-xl mb-3 tracking-[0.3rem] font-['BarlowCondensed']">
                SO, YOU WANT TO TRAVEL TO
              </p>
              <h1 className="text-8xl tracking-wider md:text-9xl md:tracking-widest font-['Bellefair'] ">
                SPACE
              </h1>
              {/* <p className="text-sm tracking-tight leading-snug whitespace-nowrap overflow-hidden text-ellipsis"></p> */}
              <p className="text-md tracking-wide leading-loose mt-15 font-['Barlow']">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give truly out of
                this world experience!
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="bg-white text-black text-2xl w-[12rem] h-[12rem] rounded-full mt-[5rem] md:mt-[5rem] lg:mt-18"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
