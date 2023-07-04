import topArrow from "./arrow up.png";

const Backtotop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="w-full h-full mt-[20px] md:mt-0 font-euclid">
      <div
        onClick={scrollToTop}
        className=" flex flex-col md:flex-row-reverse justify-center  items-center md:items-start bg-[#EDEFFD] md:bg-white px-0 w-full h-[56px] cursor-pointer"
      >
        <img src={topArrow} alt="UpArrow" />
        <p className="leading-[15.22px] mt-[5px] md:mt-0 font-normal text-[#4D5DED] text-[12px] md:text-[16px] md:mr-[10px]">
          Back to top
        </p>
      </div>
    </main>
  );
};

export default Backtotop;
