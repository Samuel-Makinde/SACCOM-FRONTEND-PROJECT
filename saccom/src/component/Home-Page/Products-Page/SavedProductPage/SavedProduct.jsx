import ImageSlider from "../../ImageSlider/imageSlider";
import search from "../../../../assets/HomeImageSlider/search.png";
import { useGlobalContext } from "../../../Context/ProductContext";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SavedProduct = () => {
  const { savedProduct, products } = useGlobalContext();

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

      <div className="w-full h-full  ">
        <div className="w-full h-full flex flex-col  md:items-center px-4 ">
          <h1 className="text-[24px] md:text-[48px] md:leading-[60.65px] text-[#2F3035]  font-semibold">
            Saved Hostel
          </h1>
          <p className="text-[#85868D] text-[16px] mt-[10px]">
            All your saved hostels in one place. Navigate through your saved
            hostels{" "}
          </p>
        </div>
      </div>

      <div className="w-full h-full md:pl-10 px-4">
        <div className="border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>
        <div className="w-full h-full sm:grid sm:grid-cols-2 gap-4 grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {savedProduct.length === 0 ? (
            <h2 className="text-[#2F3035] text-[16px] md:text-[48px] mt-[10px] font-semibold">
              No product has been saved
            </h2>
          ) : (
            <div className="">
              {products.map((product) => {
                if (savedProduct.some((item) => item.id === product.id)) {
                  return (
                    <div key={product.id} className="w-full h-full">
                      <div className="relative w-[302px] h-[302px] sm:w-[270px] sm:h-[270px] md:w-[302px] md:h-[302px] lg:w-[270px] lg:h-[270px]">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="w-[302px] h-[302px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] lg:w-[270px] lg:h-[270px] mt-[30px] rounded-[12px]"
                            src={product.images[0]}
                            alt={product.title}
                          />
                        </Link>

                        <div className="absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[13px] right-[20px] cursor-pointer">
                          <div className="text-[#4D5DED]">
                            <BsBookmarkFill size={24} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null; // Add this line to handle the case when the condition is not met
              })}
            </div>
          )}
        </div>
      </div>

      {/* <div className="w-full h-full md:pl-10 px-4   ">
        <div className="border-b-[2px] border-b-[#D4D5DB]  mt-[40px]"></div>
        <div className="w-full h-full   sm:grid sm:grid-cols-2 gap-4 grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {savedProduct.length === 0 ? (
            <h2 className="text-[#2F3035] text-[16px] md:text-[48px] mt-[10px]  font-semibold ">
              No product have been saved
            </h2>
          ) : (
            <div>
               products.map((product) => {
              if (savedProduct.some((item) => item.id === product.id)) {
                return (
                  <div key={product.id} className="w-full h-full">
                    <div className="relative w-[302px] h-[302px]  sm:w-[270px] sm:h-[270px] md:w-[302px] md:h-[302px] lg:w-[270px] lg-h[270px]">
                      <Link to={`/product/${product.id}`}>
                        <img
                          className="w-[302px] h-[302px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] lg:w-[270px] lg:h-[270px]  mt-[30px] rounded-[12px]"
                          src={product.images[0]}
                          alt={product.title}
                        />
                      </Link>

                      <div className="absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[13px] right-[20px]  cursor-pointer">
                        <div className="text-[#4D5DED]  ">
                          <BsBookmarkFill size={24} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            }))
            </div>
           
          )
          
          }
        </div>
      </div> */}
    </main>
  );
};

export default SavedProduct;
