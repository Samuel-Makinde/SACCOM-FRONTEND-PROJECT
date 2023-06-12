import React, { useContext } from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'
import  Loading  from '../Home-Page/LoadingSpinner/loading';

const ProductContext = React.createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [categories, setCategory] = useState([])

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


  return (
    <ProductContext.Provider value={{
        products,
        categories,
        handleViewMore
    }}>
        {children}
    </ProductContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(ProductContext)
}
export  {ProductContext, ProductProvider}