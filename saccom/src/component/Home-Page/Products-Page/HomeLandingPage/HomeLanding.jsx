import { useEffect, useState } from 'react'
import axios from 'axios'
import  Loading  from '../../LoadingSpinner/loading';
import {BiBookmark} from 'react-icons/bi'


export default function HomeLanding() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [categories, setCategory] = useState([])
 
  
//   const [displayProduct, setDisplayProduct] = useState(2)

//   const handleViewMore = () => {
//     setDisplayCount(products.length);
//   };

  const productUrl = 'https://dummyjson.com/products';

  const FetchApi = async () => {
    setLoading(true)
    try {
        const response = await axios.get(productUrl);
        setLoading(false)
        const {products} = response.data;
        setProducts(products)
        console.log("working", setProducts)
        const Categories = [...new Set(products.map((item) => item.category))]
        // category short description
        // const ShortDetails = [...new Set(products.map((item) => item.deatils))]
        setCategory(Categories)
        console.log("getting categories", Categories)
    } catch (error) {
      setLoading(false)
      console.log("not working", error)
    }
  }

  useEffect(() =>{
    FetchApi()
  }, [])

  if(loading){
    return (
        <main>
            <Loading />
        </main>
    )
}


const handleViewMore = (category) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.category === category) {
          return {
            ...product,
            displayed: true,
          };
        }
        return product;
      });
    });
  };


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
          const displayedProducts = categoryProducts.slice(0, 2);

          return (
            <div className='w-full h-full flex flex-col items-center text-left font-EuclidCircularAw' key={index}>
              <h2 className='text-[#2F3035] text-[20px] font-medium leading-[25.36px] pt-[60px]'>{category}</h2>
              {displayedProducts.map((product) => (
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
              
               {/* view more show page */}
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
              {categoryProducts.length > 2 && (
                <button className='text-[#4D5DED] mt-4' onClick={() => handleViewMore(category)}>
                  View More
                </button>
              )}
            </div>
          );
        })}
      </div>
    </main>
  
  )
}