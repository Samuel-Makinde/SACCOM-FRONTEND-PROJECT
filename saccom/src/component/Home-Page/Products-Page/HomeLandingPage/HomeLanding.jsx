import { BiBookmark } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useGlobalContext } from "../../../Context/ProductContext";
import ImageSlider from "../../ImageSlider/imageSlider";
import PropTypes from "prop-types";
import search from "../../../../assets/HomeImageSlider/search.png";
import Loading from "../../LoadingSpinner/loading";
import { Link } from "react-router-dom";

// import { useState } from "react";

export default function HomeLanding({ onViewMoreClick }) {
  const { products, categories, loading, addToSave } = useGlobalContext();
  const handleViewMoreClick = () => {
    onViewMoreClick(); // Call the parent component's onViewMoreClick function
  };

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

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-full px-4 md:px-10 ">
          {categories.map((category, index) => {
            const categoryProducts = products.filter(
              (product) => product.category === category
            );

            const displayedProducts = categoryProducts.slice(
              0,
              document.documentElement.clientWidth >= 1024 ? 4 : 3
            );

            return (
              <div
                className="w-full h-full flex flex-col items-center text-left  "
                key={index}
              >
                <div className="w-full h-full flex  text-center ">
                  <h2 className="text-[#2F3035] text-[20px] capitalize font-medium leading-[25.36px] pt-[60px]  w-full h-full">
                    {category}
                  </h2>
                </div>
                {/* md:flex justify-evenly md:w-full md:h-full */}
                <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                  {displayedProducts.map((product) => (
                    <div key={product.id}>
                      <div className="relative">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="w-[302px] h-[302px] md:h-[202px] mt-[25px] rounded-[12px]"
                            src={product.apartment_sub_images[0]}
                            alt={product.apartment_name}
                            onError={(e) => console.error("Image Error:", e)}
                          />
                        </Link>

                        <div className="absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[16px] right-[25px] cursor-pointer">
                          <BiBookmark
                            size={24}
                            onClick={() => addToSave(product)}
                            className="text-[#4D5DED]"
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[#2F3035] text-[20px] font-medium leading-[25.36px]  pt-[10px]">
                          {product.apartment_name}
                        </h3>
                        <p className="w-[216px] h-full text-[16px] font-normal text-[#54555B] mt-[2px] leading-[20px]">
                          {product.apartment_summary_description}
                        </p>
                        <p className="pt-[5px] text-[#54555B] text-[16px] leading-[20px] font-normal">
                          {"\u20A6"}
                          {product.rent_price} per year
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-full mt-[20px]">
                  <button
                    className="text-[#4D5DED] leading-[20px] font-normal w-full h-full text-[16px]  flex  justify-end mr-[30px] "
                    onClick={handleViewMoreClick}
                  >
                    <div className=" w-[120px] h-full top-0  flex  ">
                      <p>View More</p>{" "}
                      <BsArrowRight className="mt-[4px] ml-[8px]" />
                    </div>
                  </button>
                  <div className=" border-b-[1px] border-b-[#AAB0B766] rounded-[4px] mt-[30px]  ml-[20px] border-[2px] mr-[20px]"></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

HomeLanding.propTypes = {
  onViewMoreClick: PropTypes.func.isRequired,
};
