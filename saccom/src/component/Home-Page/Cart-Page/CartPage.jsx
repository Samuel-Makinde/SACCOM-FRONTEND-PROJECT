import { useGlobalContext } from "../../Context/ProductContext";
import { RiPinDistanceLine, RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineInfoCircle, AiOutlineArrowRight } from "react-icons/ai";

const CartPage = () => {
  const { products, cart, removeFromCart } = useGlobalContext();

  // to add whatsapp id to the proceed to pay message
  const createWhatsAppMessage = () => {
    const productIds = cart.map((item) => item.id);
    const message = `Hi SACCOM, I'm interested in the following apartments with ID:\n${productIds.join(
      ", "
    )}`;
    return message;
  };

  const phoneNumber = "+2349061814601"; // Replace with the recipient's WhatsApp number

  // Construct the WhatsApp message link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    createWhatsAppMessage()
  )}`;


  return (
    <main className="w-full h-full px-4 md:px-10 pt-[70px] md:pt-[100px]">
      <div className="w-full h-full font-euclid">
        <h1 className="text-[#2F3035] font-semibold md:text-[48px] md:leading-[60px]">
          Review your cart{" "}
        </h1>
        <div className="w-full h-full">
          {cart.length === 0 ? (
            <h4
              key="empty-cart-message"
              className="text-[20px] mt-[40px]  md:text-[48px] text-[#2F3035] leading-[60px]"
            >
              Add items to your cart
            </h4>
          ) : (
            products.map((product) => {
              // Convert the cart array to a set to remove duplicates
              const cartSet = new Set(cart);

              // Convert the set back to an array
              const uniqueCart = Array.from(cartSet);

              console.log(cart);
              if (uniqueCart.some((item) => item.id === product.id)) {
                return (
                  <div className="w-full h-full" key={product.id}>
                    <div className="border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>
                    <div className="relative w-full h-[236px] mt-[20px] md:h-[524px] md:grid grid-cols-4 grid-rows-2 md:mt-[30px]">
                      <img
                        className=" w-full h-[236px] md:h-full md:row-span-2 md:col-span-2 md:rounded-l-[12px] md:pr-[15px]"
                        src={product.apartment_sub_images[0]}
                        alt={product.apartment_name}
                      />
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
                    <div className="w-full h-full mt-[30px] ">
                      <div className="w-full h-full md:flex justify-between">
                        <div>
                          <h2 className="text-[#2F3035] md:text-[48px] font-semibold">
                            {product.apartment_name}
                          </h2>
                          <h3 className="text-[#54555B] text-[20px] font-medium">
                            Hostel summary
                          </h3>
                          <p className="text-[#85868D] text-[16px]">
                            {product.apartment_full_description}
                          </p>
                          <div className="text-[#54555B] flex  md:mt-[5px]">
                            <RiPinDistanceLine size={20} className="mt-[5px]" />
                            <p className=" md:text-[16px] leading--[20.29px] ml-[5px] ">
                              {product.time_in_mins_from_gate} mins walk from
                              main gate
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[32px] font-semibold text-[#54555B] leading-[40.52px]">
                            {"\u20A6"}
                            {product.rent_price}
                          </h4>
                          <p className="text-[#54555B] text-[16px] leading-[20.29px] md:text-right">
                            Per year
                          </p>
                        </div>
                      </div>
                      <div className="w-full h-full flex justify-end">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-[#4D5DED] w-[156px] flex justify-around border-[#4D5DED] border-[1px] px-[16px] py-[8px] rounded-[12px]"
                        >
                          <RiDeleteBin5Line size={24} />
                          <p className="leading-[25px]">Remove</p>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          )}

          <div className="border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>

          {/* small screen total view */}
          <div className="w-full h-full  ">
            <div className="flex flex-col md:hidden w-full h-full mt-[30px]">
              <div className="w-full flex ">
                <AiOutlineInfoCircle className=" mr-[3px] text-[#1B67FB]" />
                <p className="text-[12px] leading-[15px] text-[#54555B]">
                  Pickup point is UNILAG gate and the Inspection date will be
                  communicated on whatsapp.
                </p>
              </div>
              <div className="border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>
              <div className="w-full h-full">
                <div className="w-full h-full flex justify-between">
                  <h5 className="text-[#2F3035] text-[16px] leading-[40px] font-semibold">
                    Total:
                  </h5>
                  <div>
                    <h6 className="text-[16px] text-[#54555B] md:leading-[40.23px] font-semibold ">
                      #5,000
                    </h6>
                    <p className="text-[16px] text-[#85868D] leading-[20.21px] font-normal">
                      Inspection fee
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large screen total view */}
            <div className="hidden w-full h-full mt-[80px] md:flex justify-between  ">
              <div>
                <h5 className="text-[#2F3035] md:text-[32px] md:leading-[40px] font-semibold">
                  Total:
                </h5>
                <p className="text-[16px] text-[#85868D] leading-[20.21px] font-normal">
                  Inspection fee
                </p>
              </div>

              <div>
                <h6 className="md:text-[32px] text-[#54555B] md:leading-[40.23px] font-semibold text-right">
                  #5,000
                </h6>
                <div className="w-full flex ">
                  <AiOutlineInfoCircle className=" mr-[3px] text-[#1B67FB]" />
                  <p className="text-[12px] leading-[15px] text-[#54555B]">
                    Pickup point is UNILAG gate and the Inspection date will be
                    communicated on whatsapp.
                  </p>
                </div>
              </div>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <div className="w-full h-[50px] flex justify-center  mt-[80px] ">
              <button className="w-[328px] flex justify-center  bg-[#4D5DED] text-[#FFFFFF] text-[20px] font-medium p-[8px] rounded-[12px] ">
                <p> Proceed to make appointment </p>
                <AiOutlineArrowRight size={24} className="mt-[5px] ml-[10px]" />
              </button>
            </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
