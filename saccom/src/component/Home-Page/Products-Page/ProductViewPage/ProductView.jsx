import { useGlobalContext } from "../../../Context/ProductContext";
import { RiPinDistanceLine } from "react-icons/ri";
import { BsShare } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import { useParams } from "react-router-dom";

const ProductView = ({ title, url }) => {
  const { products, addToCart } = useGlobalContext();
  const { width } = useWindowSize();

  const { productId } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  console.log("Product id is working", product);

  // to share page on supported browser
  const ShareProductDescription = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        console.log("shared successfully");
      } catch (error) {
        console.log("error sharing: ", error);
      }
    } else {
      console.log("web share api not supported");
    }
  };

  if (!product) {
    return <div className="w-full h-full pt-[100px]">Product not found</div>; // Render a loading state or error message if product is not found
  }
  return (
    <main className="w-full h-full pt-[20px] md:pt-[100px]">
      <div className="w-full h-full font-euclid">
        {/* {warning && <div className="absolute z-50 text-[100px]">Item already in cart</div> } */}
        {/* {products.map((product, index) => { */}
        {/* if (index === 0) { */}
        <div key={product.id} className="w-full h-full  md:px-10">
          <div className="w-full h-full flex flex-col-reverse md:flex-none md:flex-col">
            <div className="w-full h-full px-4 md:px-0">
              <h1 className="text-[24px] font-semibold leading-[30.43px] md:text-[48px] text-[#2F3035] md:leading-[60px] ">
                {product.title}
              </h1>
              <p className="text-[#54555B] text-[16px] leading-[20px]">
                Summary description of the hostel
              </p>
              <div className="text-[#54555B] flex md:hidden md:mt-[5px]">
                <RiPinDistanceLine size={20} className="mt-[5px]" />
                <p className=" md:text-[16px] leading--[20.29px] ml-[5px] ">
                  30 mins walk from main gate
                </p>
              </div>
            </div>
            <div className="w-full h-full flex flex-col-reverse  md:flex-row md:justify-between">
              <div className="hidden md:flex text-[#54555B]  md:mt-[5px]">
                <RiPinDistanceLine size={20} className="mt-[5px]" />
                <p className="text-[16px] leading--[20.29px] ml-[5px] ">
                  30 mins walk from main gate
                </p>
              </div>

              <div className="z-10 absolute md:relative w-full h-full md:w-[200px] top-[70px]  md:top-0 md:right-0 text-[#4D5DED] md:text-[#54555B] text-[16px] ">
                <div className="w-full flex justify-between px-4 md:px-0 ">
                  <div className="w-[24px] h-[24px] cursor-pointer md:hidden bg-[#EDEFFD] rounded-[40px] flex items-center justify-center">
                    <IoIosArrowBack />
                  </div>

                  <div className="w-[200px] h-full flex justify-end">
                    <div
                      onClick={ShareProductDescription}
                      className="flex pr-[35px] cursor-pointer "
                    >
                      {width >= 768 ? (
                        <div>
                          <BsShare size={20} />
                        </div>
                      ) : (
                        <div className="w-[24px] h-[24px] bg-[#EDEFFD] rounded-[40px] flex items-center justify-center">
                          <BsShare size={16} />
                        </div>
                      )}
                      <p className="hidden md:flex ml-[10px]  ">Share</p>
                    </div>
                    <div className="flex cursor-pointer">
                      {width >= 768 ? (
                        <div>
                          <BiBookmark size={20} className="w-[24px] h-[24px]" />
                        </div>
                      ) : (
                        <div className="w-[24px] h-[24px] bg-[#EDEFFD] rounded-[40px] flex items-center justify-center">
                          <BiBookmark size={16} />
                        </div>
                      )}
                      <p className="hidden md:flex ml-[10px] ">Save</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[236px] md:h-[524px] md:grid grid-cols-4 grid-rows-2 md:mt-[30px]">
              <img
                className=" w-full h-[236px] md:h-full md:row-span-2 md:col-span-2 md:rounded-l-[12px] md:pr-[15px]"
                src={product.images[0]}
                alt={product.title}
              />
              <img
                className="hidden md:flex md:h-[254px] md:pr-[15px] "
                src={product.images[1]}
                alt={product.title}
              />
              <img
                className="hidden md:flex rounded-r-[12px] md:h-[254px] "
                src={product.images[2]}
                alt={product.title}
              />
              <img
                className="hidden md:flex md:h-[254px] md:pr-[15px] md: mt-[10px] "
                src={product.images[3]}
                alt={product.title}
              />
              <img
                className="hidden md:flex  rounded-r-[12px] md:h-[254px] md:mt-[10px]"
                src={product.images[4]}
                alt={product.title}
              />
            </div>
          </div>

          {/* To get accomodation type, price and add to cart*/}
          <div className="w-full h-full mt-[40px] px-4 md:px-0 ">
            <div className="w-full h-full md:flex justify-between">
              <div className="flex">
                {product.images.map((info, index) => (
                  <div key={index} className="pr-[15px]">
                    <img src={info} alt="info" className="w-[30px] h-[30px]" />
                  </div>
                ))}
              </div>

              <div className="hidden md:flex md:flex-col md:w-[450px] h-full">
                <div className="w-full h-full flex flex-col justify-start text-right">
                  <h2 className="text-[32px] font-semibold text-[#54555B] leading-[40.52px]">
                    ${product.price}
                  </h2>
                  <p className="text-[#54555B] text-[16px] leading-[20.29px]">
                    Per year
                  </p>
                </div>

                <div className="w-full flex justify-end mt-[20px]">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#4D5DED]  w-[328px] p-[8px] rounded-[12px] text-white"
                  >
                    Add to inspect cart
                  </button>
                </div>
                <div className="w-full flex">
                  <AiOutlineInfoCircle className="mt-[4px] mr-[4px] text-[#1B67FB]" />
                  <p className="text-[#85868D] text-[16px] leading-[20.29px] text-right">
                    {" "}
                    One time payment for all inspected properties in your cart.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>

            <div className="w-full h-full mt-[30px] flex flex-col-reverse ">
              <div className="w-full h-full flex flex-col md:hidden md:w-[450px] ">
                <div className="flex md:hidden border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>
                <div className="w-full h-full  mt-[20px] flex  justify-between">
                  <div className="w-[200px] h-full flex flex-col">
                    <h2 className="text-[24px] font-semibold  text-[#54555B] md:leading-[30.43px]">
                      ${product.price}
                    </h2>
                    <p className="text-[#54555B] text-[16px] leading-[20.29px]">
                      Per year
                    </p>
                  </div>

                  <div className="w-[150px] h-full bg-[#4D5DED] rounded-[12px] text-white ">
                    <button
                      onClick={() => addToCart(product)}
                      className="p-[8px] "
                    >
                      Add to inspect cart
                    </button>
                  </div>
                </div>
                <div className="w-full flex mt-[20px]">
                  <AiOutlineInfoCircle className="mt-[4px] mr-[4px] text-[#1B67FB]" />
                  <p className="text-[#85868D]  text-[12px] leading-[20.29px] text-right">
                    {" "}
                    One time payment for all inspected properties in your cart.
                  </p>
                </div>
              </div>

              <div className="w-full h-full">
                <h3 className="text-[#2F3035] text-[24px] font-semibold leading-[30.43px] md:text-[48px] md:leading-[60.82px]">
                  Description
                </h3>
                <p className="text-[#85868D] font-normal text-[16px] leading-[20.29px] mt-[10px]">
                  {product.description}
                </p>
                <div className="flex md:hidden border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>
                <h4 className="text-[24px] font-semibold leading-[30.43px] md:text-[48px] text-[#2F3035] md:leading-[60.86px] mt-[40px]">
                  What this place offers
                </h4>
                <div className="w-full h-full mt-[20px]">
                  <p className="text-[#54555B] text-[16px] leading-[20.29px] mt-[10px]">
                    Air Condition
                  </p>
                  <p className="text-[#54555B] text-[16px] leading-[20.29px] mt-[10px]">
                    Air Condition
                  </p>
                  <p className="text-[#54555B] text-[16px] leading-[20.29px] mt-[10px]">
                    Air Condition
                  </p>
                  <p className="text-[#54555B] text-[16px] leading-[20.29px] mt-[10px]">
                    Air Condition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProductView;
