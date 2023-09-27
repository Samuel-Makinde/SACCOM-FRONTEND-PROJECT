import { useGlobalContext } from "../../../Context/ProductContext";
import { RiPinDistanceLine } from "react-icons/ri";
import { BsShare } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import { useWindowSize } from "react-use";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import styles from "../../ImageSlider/imageSlider.module.css";
import { useRef } from "react";



const ProductView = ({ title, url }) => {
  const { products, addToCart, addToSave } = useGlobalContext();
  const { width } = useWindowSize();

  const { productId } = useParams();
  console.log("this is the product Id", productId);

  // const parsedProductId = parseInt(productId);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    swipe: true, 
  };

  const sliderRef = useRef(null); // Create a ref for the slider component

// Next button click handler
const handleNext = () => {
  if (sliderRef.current) {
    sliderRef.current.slickNext(); // Move to the next slide
  }
};

// Previous button click handler
const handlePrev = () => {
  if (sliderRef.current) {
    sliderRef.current.slickPrev(); // Move to the previous slide
  }
};








  // to find the particular product
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  console.log("this is product", product);

  const navigate = useNavigate();

  const previourpage = () => {
    navigate(-1);
  };

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
      // fall back option for browser not supporting web share api
      const Subject = title;
      const body = url;

      const fallBackOption = `mailto:?subject=${encodeURIComponent(
        Subject
      )}&body=${encodeURIComponent(body)}`;

      window.open(fallBackOption, "_self");
    }
  };
  const setBackgroundColor = (index) => {
    const colors = ["#F2EDFF", "#FEEEE3", "#E5E9FF", "#DDFCEF", "#FFEDED"];
    return colors[index % colors.length];
  };

  const setTextColor = (index) => {
    const TextColors = ["#7F57EF", "#FC984F", "#4764FC", "#26C281", "#D83838"];
    return TextColors[index % TextColors.length];
  };

  if (!product) {
    return <div className="w-full h-full pt-[100px]">Product not found</div>;
  }
  return (
    <main className="w-full h-full pt-[60px] md:pt-[100px]">
      <div className="w-full h-full font-euclid">
        {/* {warning && <div className="absolute z-50 text-[100px]">Item already in cart</div> } */}
        {/* {products.map((product, index) => { */}
        {/* if (index === 0) { */}
        <div key={product.id} className="w-full h-full md:px-10">
          <div className="w-full h-full flex flex-col-reverse md:flex-none md:flex-col">
            <div className="w-full h-full px-4 md:px-0 mt-[80px] md:mt-0">
              <h1 className="text-[24px] font-semibold leading-[30.43px] md:text-[48px] text-[#2F3035] md:leading-[60px] ">
                {product.apartment_name}
              </h1>
              <p className="text-[#54555B] text-[16px] leading-[20px]">
                {product.apartment_summary_description}
              </p>
              <div className="text-[#54555B] flex md:hidden md:mt-[5px]">
                <RiPinDistanceLine size={20} className="mt-[5px]" />
                <p className=" md:text-[16px] leading--[20.29px] ml-[5px] ">
                  {product.time_in_mins_from_gate} mins walk from main gate
                </p>
              </div>
            </div>
            <div className="w-full h-full flex flex-col-reverse  md:flex-row md:justify-between">
              <div className="hidden md:flex text-[#54555B]  md:mt-[5px]">
                <RiPinDistanceLine size={20} className="mt-[5px]" />
                <p className="text-[16px] leading--[20.29px] ml-[5px] ">
                  {product.time_in_mins_from_gate} mins walk from main gate
                </p>
              </div>

              <div className="z-10 absolute md:relative w-full h-full md:w-[200px] top-[80px] mt-5 px-3   md:top-0 md:right-0 text-[#4D5DED] md:text-[#54555B] text-[16px] ">
                <div className="w-full flex justify-between px-4 md:px-0 ">
                  <div
                    className="w-[24px] h-[24px] cursor-pointer md:hidden bg-[#EDEFFD] rounded-[40px] flex items-center justify-center"
                    onClick={previourpage}
                  >
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
                    <div
                      onClick={() => addToSave(product)}
                      className="flex cursor-pointer"
                    >
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
            <div className="hidden md:block">
            <div className="relative w-full h-[236px]   md:h-[524px] md:grid grid-cols-4 grid-rows-2 md:mt-[30px]">
              {/* <img
                className=" w-full h-[236px] md:h-full md:row-span-2 md:col-span-2 md:rounded-l-[12px] md:pr-[15px]"
                src={product.apartment_sub_images[0]}
                alt={product.apartment_name}
              /> */}
              <video className=" w-full h-[236px] md:h-full md:row-span-2 md:col-span-2 md:rounded-l-[12px] md:pr-[15px]" style={{objectFit:"cover", width:"100%", height:"86vh"}} src={product.apartment_video} autoPlay controls  loop muted preload="metadata"></video>
              <img
                className="hidden md:flex md:h-[254px] md:pr-[15px] "
                src={product.apartment_sub_images[1]}
                alt={product.apartment_name}
              />
              <img
                className="hidden md:flex rounded-r-[12px] md:h-[254px] "
                src={product.apartment_sub_images[2]}
                alt={product.apartment_name}
              />
              <img
                className="hidden md:flex md:h-[254px] md:pr-[15px] md: mt-[10px] "
                src={product.apartment_sub_images[3]}
                alt={product.apartment_name}
              />
              <img
                className="hidden md:flex  rounded-r-[12px] md:h-[254px] md:mt-[10px]"
                src={product.apartment_sub_images[4]}
                alt={product.apartment_name}
              />
            </div>
            </div>
           
            <main className={styles.container } >
        <div className="relative md:hidden mt-0 h-[280px]">
      <Slider ref={sliderRef} {...settings}>
        <div className="relative w-full h-full border-none  ">
          <img
            className={` h-[300px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={product.apartment_sub_images[0]}
            alt="hotel"
          />
          
        </div>
        <div className="w-full h-full border-none">
          <img
            className={` h-[280px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={product.apartment_sub_images[1]}
            alt="hotel"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={` h-[280px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={product.apartment_sub_images[2]}
            alt="hotel"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={` h-[280px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={product.apartment_sub_images[3]}
            alt="hotel"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={` h-[280px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={product.apartment_sub_images[4]}
            alt="hotel"
          />
        </div>
      </Slider>
      <div>

      </div>
      </div>
      <div className="md:hidden absolute top-[380px] left-[35%] transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div
              className="w-[34px] h-[34px] bg-[#EDEFFD] rounded-[40px] flex items-center justify-center cursor-pointer"
              onClick={handlePrev}
            >
              <IoIosArrowBack size={26} className="text-blue-600" />
            </div>
        </div>
        <div className="md:hidden absolute top-[380px] right-[35%] transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div
              className="w-[34px] h-[34px] bg-[#EDEFFD] rounded-[40px] flex items-center justify-center cursor-pointer"
              onClick={handleNext}
            >
              <IoIosArrowForward size={26} className="text-blue-600" />
            </div>
        </div>
    </main>
          </div>



          {/* To get accomodation type, price and add to cart*/}
          <div className="w-full h-full mt-[20px] px-4 md:px-0  ">
            <div className="w-full h-full md:flex justify-between">
              <div className="flex flex-wrap ">
                {product.appartment_attributes.map((info, index) => (
                  <div
                    key={index}
                    className="w-max h-[40px] mt-[20px] whitespace-nowrap mr-[7px] flex justify-center items-center py-2 px-2 pr-[15px] text-[#54555B] text-[12px] leading-[20.29px] font-normal rounded-[20px]"
                    style={{
                      backgroundColor: setBackgroundColor(index),
                      color: setTextColor(index),
                    }}
                  >
                    {info}
                  </div>
                ))}
              </div>

              <div className="hidden md:flex md:flex-col md:w-[450px] h-full">
                <div className="w-full h-full flex flex-col justify-start text-right">
                  <h2 className="text-[32px] font-semibold text-[#54555B] leading-[40.52px]">
                    ${product.rent_price}
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
                    Book to inspect
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
                      ${product.rent_price}
                    </h2>
                    <p className="text-[#54555B] text-[16px] leading-[20.29px]">
                      Per year
                    </p>
                  </div>

                  <div className="w-[150px] h-full bg-[#4D5DED] rounded-[12px] text-white text-center">
                    <button
                      onClick={() => addToCart(product)}
                      className="p-[8px] "
                    >
                      add to interests
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
                <video className="h-4/5 mt-4 md:hidden" style={{objectFit:"cover", width:"100%", height:"40vh"}} src={product.apartment_video} autoplay controls  loop muted preload="metadata"></video>
                <p className="text-[#85868D] font-normal text-[16px] leading-[20.29px] mt-[10px]">
                  {product.apartment_full_description}
                </p>
                <div className="flex md:hidden border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>
                <h4 className="text-[24px] font-semibold leading-[30.43px] md:text-[48px] text-[#2F3035] md:leading-[60.86px] mt-[40px]">
                  What this place offers
                </h4>
                <div className="w-full h-full mt-[20px]">
                  {product.apartment_offers.map((info, index) => (
                    <div
                      key={index}
                      className="pr-[15px] text-[#85868D] font-normal text-[16px] leading-[20.29px] mt-[10px]"
                    >
                      {info}
                    </div>
                  ))}
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
