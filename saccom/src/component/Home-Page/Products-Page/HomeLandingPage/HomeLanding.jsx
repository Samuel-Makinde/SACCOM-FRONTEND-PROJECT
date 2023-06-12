import {BiBookmark} from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'
import { useGlobalContext } from '../../../Context/ProductContext';

export default function HomeLanding() {
  const {products, handleViewMore, categories} = useGlobalContext();
  

  return(
    // <main className='w-full h-full'>
    //   <div className='w-full h-full  '>
    //     {/* to map over all the category in all the product from the api */}
    //     {categories.map((category, index) => {
    //       return (
    //         <div className='w-full h-full flex flex-col items-center  text-left font-EuclidCircularAw' key={index}>
    //           <h2 className='text-[#2F3035] text-[20px] font-medium leading-[25.36px] pt-[60px] '>{category}</h2>
    //           {
    //           products
    //           .filter((product) => product.category === category)
    //           .map((product) => (
    //             <div key={product.id} className=''>
    //                 {/* <p className={styles.brand}>{product.brand}</p> */}
    //                 <div className='relative'>
    //                     <img className=' w-[328px] h-[328px] mt-[30px] rounded-[12px]' src={product.images[0]} alt={product.title} />
    //                     <div className='absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[16px] right-[25px] cursor-pointer'>
    //                         <BiBookmark size={24} className='  text-[#4D5DED]' />
    //                     </div>
    //                 </div>
                    
    //                 <h3 className='text-[#2F3035] text-[20px] font-medium leading-[25.36px] pt-[10px]'>{product.title}</h3>
    //                 <p className='w-[216px] h-full text-[16px] font-normal text-[#54555B] mt-[2px] leading-[20px]'>{product.description}</p>
    //                 <p className='pt-[5px] text-[#54555B] text-[16px] leading-[20px] font-normal'>${product.price} per year</p>
    //             </div>
    //           ))
    //           }
    //         </div>
    //       )
    //     } )}
    //   </div>
    // </main>


    <main className='w-full h-full'>
      <div className='w-full h-full'>
        {categories.map((category, index) => {
          const categoryProducts = products.filter((product) => product.category === category);
          const displayedProducts = categoryProducts.slice(0, window.innerWidth >= 768 ? 4 : 2);

          return (
            <div className='w-full h-full flex flex-col items-center text-left font-EuclidCircularA ' key={index}>
              <div className='w-[120px] h-full flex justify-start'>
                <h2 className='text-[#2F3035] text-[20px] font-medium leading-[25.36px] pt-[60px]  w-full h-full'>{category}</h2>
              </div>
              
              <div className='md:flex justify-evenly md:w-full md:h-full ' >
                {displayedProducts.map((product) => (
                <div key={product.id} >
                  
                    <div className='relative  '>
                    <img className='w-[302px] h-[302px] mt-[30px] rounded-[12px]' src={product.images[0]} alt={product.title} />
                    <div className='absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[16px] right-[25px] cursor-pointer'>
                      <BiBookmark size={24} className='text-[#4D5DED]' />
                    </div>
                  </div>

                  <div>
                    <h3 className='text-[#2F3035] text-[20px] font-medium leading-[25.36px]  pt-[10px]'>{product.title}</h3>
                  <p className='w-[216px] h-full text-[16px] font-normal text-[#54555B] mt-[2px] leading-[20px]'>{product.description}</p>
                  <p className='pt-[5px] text-[#54555B] text-[16px] leading-[20px] font-normal'>${product.price} per year</p>
                  </div>

                  
                </div>
              ))}
              </div>
              
              
               {/* view more show page */}
               <div className=''>
                {categoryProducts.length > 2 && categoryProducts.some((product) => product.displayed) && (
                <>
                  {categoryProducts
                    .filter((product) => product.displayed)
                    .map((product) => (
                      <div key={product.id}>
                        <div className='relative'>
                          <img className='w-[328px] h-[328px] mt-[30px] rounded-[12px]' src={product.images[0]} alt={product.title} />
                          <div className='absolute bg-[#EDEFFD] flex items-center justify-center w-[32px] h-[32px] rounded-[40px] top-[16px] right-[25px] cursor-pointer'>
                            <BiBookmark size={24} className='text-[#4D5DED]' />
                          </div>
                        </div>

                        <h3 className='text-[#2F3035] text-[20px] font-medium leading-[25.36px] pt-[10px]'>{product.title}</h3>
                        <p className='w-[216px] h-full text-[16px] font-normal text-[#54555B] mt-[2px] leading-[20px]'>{product.description}</p>
                        <p className='pt-[5px] text-[#54555B] text-[16px] leading-[20px] font-normal'>${product.price} per year</p>
                      </div>
                    ))}
                </>
              )}
               </div>
              
              {categoryProducts.length > 2 && (
                <div className='w-full h-full'>
                  <button className='text-[#4D5DED] leading-[20px] font-normal w-full h-full text-[16px] mt-[40px] flex  justify-end mr-[30px] ' onClick={() => handleViewMore(category)}>
                  <div className=' w-[120px] h-full top-0 right-[15px] flex  '>
                    <p>View More</p> <BsArrowRight className='mt-[4px] ml-[8px]'/>
                  </div>
                </button>
                <div className=' border-b-[1px] border-b-[#AAB0B766] rounded-[4px]  mt-[30px] ml-[20px] border-[2px] mr-[20px]'></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  
  )
}