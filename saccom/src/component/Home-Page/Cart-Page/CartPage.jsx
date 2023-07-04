import { useGlobalContext } from "../../Context/ProductContext";
import { RiPinDistanceLine, RiDeleteBin5Line } from "react-icons/ri";

const CartPage = () => {
  const { products, cart } = useGlobalContext();
  return (
    <main className="w-full h-full px-4 md:px-10 pt-[70px] md:pt-[100px]">
      <div className="w-full h-full font-euclid">
        <h1 className="text-[#2F3035] font-semibold md:text-[48px] md:leading-[60px]">
          Review your cart{" "}
        </h1>
        <div className="w-full h-full">
          {products.map((product) => {
            if (cart.some((item) => item.id === product.id)) {
              return (
                <div className="w-full h-full" key={product.id}>
                  <div className="border-b-[2px] border-b-[#D4D5DB] mt-[40px]"></div>
                  <div className="relative w-full h-[236px] mt-[20px] md:h-[524px] md:grid grid-cols-4 grid-rows-2 md:mt-[30px]">
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
                  <div className="w-full h-full mt-[30px] ">
                    <div className="w-full h-full md:flex justify-between">
                      <div>
                        <h2 className="text-[#2F3035] md:text-[48px] font-semibold">
                          {product.title}
                        </h2>
                        <h3 className="text-[#54555B] text-[20px] font-medium">
                          Hostel summary
                        </h3>
                        <p className="text-[#85868D] text-[16px]">
                          {product.description}
                        </p>
                        <div className="text-[#54555B] flex  md:mt-[5px]">
                          <RiPinDistanceLine size={20} className="mt-[5px]" />
                          <p className=" md:text-[16px] leading--[20.29px] ml-[5px] ">
                            30 mins walk from main gate
                          </p>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-[32px] font-semibold text-[#54555B] leading-[40.52px]">
                          ${product.price}
                        </h2>
                        <p className="text-[#54555B] text-[16px] leading-[20.29px] md:text-right">
                          Per year
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full flex justify-end">
                      <button className="text-[#4D5DED] w-[156px] flex justify-around border-[#4D5DED] border-[1px] px-[16px] py-[8px] rounded-[12px]">
                        <RiDeleteBin5Line size={24} />
                        <p className="leading-[25px]">Remove</p>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
};

export default CartPage;
