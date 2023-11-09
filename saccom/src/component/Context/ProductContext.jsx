import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import Loading from "../Home-Page/LoadingSpinner/loading";
import { useCallback } from "react";

const ProductContext = React.createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [savedProduct, setSavedProduct] = useState([]);

  const productUrl =
    "https://sheet.best/api/sheets/aec8256e-339e-4d96-acff-c6da0c65e0b0";

  const FetchApi = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(productUrl);
      setLoading(false);
      // const products = response.data;
      const products = response.data.map((item) => {
        const parsedId = parseInt(item.id);
        // Destructure the apartment_sub_images property and convert it to an array
        const {
          apartment_sub_images,
          appartment_attributes,
          apartment_offers,
          ...rest
        } = item;
        return {
          ...rest,
          id: parsedId,
          apartment_sub_images: JSON.parse(apartment_sub_images),
          appartment_attributes: JSON.parse(appartment_attributes),
          apartment_offers: JSON.parse(apartment_offers.replace(/'/g, '"')),
        };
      });
      setProducts(products);
      // console.log("working", setProducts);
      const Categories = [...new Set(products.map((item) => item.category))];
      setCategory(Categories);
      // console.log("getting categories", Categories);
    } catch (error) {
      setLoading(false);
      console.log("not working", error);
    }
  }, []);

  useEffect(() => {
    FetchApi();
  }, [FetchApi]);

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

  const addToCart = (item) => {
    // Check if the item already exists in the cart based on its id

    const itemExists = cart.some((cartItem) => cartItem.id === item.id);
    if(!itemExists){
      // If the item doesn't exist in the cart, add it
    setCart([...cart, item]);
    console.log(item, "item added");
    } else{
      // If the item exists, don't add it
    console.log(item, "item already exists in cart");
    }
  }

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const addToSave = (item) => {
    setSavedProduct([...savedProduct, item]);
    console.log(item, "item saved");
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        cart,
        loading,
        savedProduct,
        handleViewMore,
        addToCart,
        removeFromCart,
        addToSave,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ProductContext);
};
export { ProductContext, ProductProvider };
