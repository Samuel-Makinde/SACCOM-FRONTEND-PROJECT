import { BiBookmark } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useGlobalContext } from "../../../Context/ProductContext";
import ImageSlider from "../../ImageSlider/imageSlider";
import PropTypes from "prop-types";
import search from "../../../../assets/HomeImageSlider/search.png";

// import { useState } from "react";

export default function HomeLanding({ onViewMoreClick }) {
  const { products, categories } = useGlobalContext();
  const handleViewMoreClick = () => {
    onViewMoreClick(); // Call the parent component's onViewMoreClick function
  };
  // const {isViewMore, setIsViewMore} = useState(false)

  // const handleViewMore = () => {
  //   setIsViewMore(true)
  // }

  return (
    // <main className="w-full h-full pt-[70px]">
    //   <ImageSlider />

    //   <div className="w-full h-full  ">
    //     {/* to map over all the category in all the product from the api */}
    //     {categories.map((category, index) => {
    //       return (
    //         <div
    //           className="w-full h-full flex flex-col items-center  text-left font-EuclidCircularAw"
    //           key={index}
    //         >
    //           <h2 className="text-[#2F3035] text-[20px] font-medium leading-[25.36px] pt-[60px] ">
    //             {category}
    //           </h2>
    //           {products
    //             .filter((product) => product.category === category)
    //             .map((product) => (
    //               <div key={product.id} className="">
    //                 {/* <p className={styles.brand}>{product.brand}</p> */}
    //                 <div className="relative">
    //                   <img
    //                     className=" w-[328px] h-[328px] mt-[30px] rounded-[12px]"
    //                     src={product.images[0]}
    //                     alt={product.title}
    //                   />
    //                   <div className="absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[16px] right-[25px] cursor-pointer">
    //                     <BiBookmark size={24} className="  text-[#4D5DED]" />
    //                   </div>
    //                 </div>

    //                 <h3 className="text-[#2F3035] text-[20px] font-medium leading-[25.36px] pt-[10px]">
    //                   {product.title}
    //                 </h3>
    //                 <p className="w-[216px] h-full text-[16px] font-normal text-[#54555B] mt-[2px] leading-[20px]">
    //                   {product.description}
    //                 </p>
    //                 <p className="pt-[5px] text-[#54555B] text-[16px] leading-[20px] font-normal">
    //                   ${product.price} per year
    //                 </p>
    //               </div>
    //             ))}

    //           <div className="w-full h-full">
    //             <button
    //               className="text-[#4D5DED] leading-[20px] font-normal w-full h-full text-[16px] mt-[40px] flex  justify-end mr-[30px] "
    //               // onClick={() => handleViewMore(category)}
    //               onClick={handleViewMoreClick}
    //             >
    //               <div className=" w-[120px] h-full top-0 right-[15px] flex  ">
    //                 <p>View More</p>{" "}
    //                 <BsArrowRight className="mt-[4px] ml-[8px]" />
    //               </div>
    //             </button>
    //             <div className=" border-b-[1px] border-b-[#AAB0B766] rounded-[4px]  mt-[30px] ml-[20px] border-[2px] mr-[20px]"></div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </main>

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
      <div className="w-full h-full md:px-10">
        {categories.map((category, index) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );
          console.log(categoryProducts.length, "category lenghts");
          const displayedProducts = categoryProducts.slice(
            0,
            document.documentElement.clientWidth >= 1024 ? 4 : 3
          );

          return (
            <div
              className="w-full h-full flex flex-col items-center text-left  "
              key={index}
            >
              <div className="w-full h-full flex  text-left">
                <h2 className="text-[#2F3035] text-[20px]  font-medium leading-[25.36px] pt-[60px]  w-full h-full">
                  {category}
                </h2>
              </div>
              {/* md:flex justify-evenly md:w-full md:h-full */}
              <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {displayedProducts.map((product) => (
                  <div key={product.id}>
                    <div className="relative">
                      <img
                        className="w-[302px] h-[202px] mt-[25px] rounded-[12px]"
                        src={product.images[0]}
                        alt={product.title}
                      />
                      <div className="absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[16px] right-[25px] cursor-pointer">
                        <BiBookmark size={24} className="text-[#4D5DED]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#2F3035] text-[20px] font-medium leading-[25.36px]  pt-[10px]">
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
              <div className="w-full h-full">
                <button
                  className="text-[#4D5DED] leading-[20px] font-normal w-full h-full text-[16px] mt-[20px] flex  justify-end mr-[30px] "
                  // onClick={() => handleViewMore(category)}
                  onClick={handleViewMoreClick}
                >
                  <div className=" w-[120px] h-full top-0 right-[15px] flex  ">
                    <p>View More</p>{" "}
                    <BsArrowRight className="mt-[4px] ml-[8px]" />
                  </div>
                </button>
                <div className=" border-b-[1px] border-b-[#AAB0B766] rounded-[4px]  mt-[30px] ml-[20px] border-[2px] mr-[20px]"></div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

HomeLanding.propTypes = {
  onViewMoreClick: PropTypes.func.isRequired,
};
