import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Home-Page/LoadingSpinner/loading";
import { useCallback } from "react";

const ProductContext = React.createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  // const [warning, setWarning] = useState(false)

  const productUrl = "https://dummyjson.com/products";

  const FetchApi = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(productUrl);
      setLoading(false);
      const { products } = response.data;
      setProducts(products);
      console.log("working", setProducts);
      const Categories = [...new Set(products.map((item) => item.category))];
      // category short description
      // const ShortDetails = [...new Set(products.map((item) => item.deatils))]
      setCategory(Categories);
      console.log("getting categories", Categories);
    } catch (error) {
      setLoading(false);
      console.log("not working", error);
    }
  }, []);

  useEffect(() => {
    FetchApi();
  }, [FetchApi]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
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

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(item, "item added");
  };
  console.log(cart, "how many items added");

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        cart,
        handleViewMore,
        addToCart,
        removeFromCart,
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
