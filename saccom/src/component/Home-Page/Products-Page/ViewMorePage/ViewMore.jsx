import { BiBookmark } from "react-icons/bi";
import { useGlobalContext } from "../../../Context/ProductContext";
import { useCallback, useState } from "react";
import ImageSlider from "../../ImageSlider/imageSlider";
import search from "../../../../assets/HomeImageSlider/search.png";

const ViewMore = () => {
  const { products, categories } = useGlobalContext();
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Function to handle category selection
  // const handleCategorySelect = (category) => {
  //   setActiveCategory(category);
  // };

  // to handle unnecessary re-render
  const handleCategorySelect = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  return (
    <main className="w-full h-full pt-[70px]">
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
      <div className="w-full h-full flex flex-col items-center md:justify-evenly px-4">
        <div className="w-full h-full overflow-x-auto">
          <div className="grid grid-flow-col-dense gap-4 border-none flex-nowrap">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category)}
                className={`text-[16px] md:text-[26px] ${
                  activeCategory === category
                    ? "border-b-[4px] border-b-[#4D5DED] text-[#4D5DED] leading-[40.58px]"
                    : "  text-[#54555B]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Render products only for the active category */}
        <div className="w-full h-full flex flex-col items-center justify-center  sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 place-items-center px-4">
          {products
            .filter((product) => product.category === activeCategory)
            .map((product) => (
              <div key={product.id} className="w-full h-full ">
                {/* Render product details */}
                <div className="relative w-[302px] h-[302px]  sm:w-[270px] sm:h-[270px] md:w-[302px] md:h-[302px] lg:w-[270px] lg-h[270px]">
                  <img
                    className="w-[302px] h-[302px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] lg:w-[270px] lg:h-[270px]  mt-[30px] rounded-[12px]"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <div className="absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[13px] right-[20px]  cursor-pointer">
                    <BiBookmark size={24} className="text-[#4D5DED]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-[#2F3035] text-[20px] font-medium leading-[25.36px] pt-[10px]">
                    {product.title}
                  </h3>
                  <p className="w-[216px] h-full text-[16px] font-normal text-[#54555B] mt-[2px] leading-[20px]">
                    {product.description}
                  </p>
                  <p className="pt-[5px] text-[#54555B] text-[16px] leading-[20px] font-normal">
                    ${product.price} per year
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ViewMore;
