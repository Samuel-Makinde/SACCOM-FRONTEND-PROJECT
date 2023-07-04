import ImageSlider from "../../ImageSlider/imageSlider";
import search from "../../../../assets/HomeImageSlider/search.png";

const SavedProduct = () => {
  return (
    <main className="w-full h-full pt-[70px] font-euclid">
      <div className="relative flex md:hidden  px-[20px] w-full h-full items-center justify-center ">
        <input
          type="text"
          className="relative w-full rounded-[40px] h-[40px] border-solid border-2 border-[#54555B] placeholder-[#B3B4BB] pl-[16px]"
          placeholder="Search through hostels"
        />
        <div className="bg-blue-700 absolute w-[36px] h-[30px] right-0 mr-[27px] rounded-[40px] cursor-pointer">
          <img src={search} alt="search" className="  pt-[5px] pl-[6px]" />
        </div>
      </div>

      <ImageSlider />

      <div className="w-full h-full font-EuclidCircularA ">
        <div className="w-full h-full flex flex-col  md:items-center px-4 ">
          <h1 className="text-[24px] md:text-[48px] md:leading-[60.65px] text-[#2F3035]  font-semibold">
            Saved Hostel
          </h1>
          <p className="text-[#85868D] text-[16px mt-[10px]">
            All your saved hostels in one place. Navigate through your saved
            hostels{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default SavedProduct;
