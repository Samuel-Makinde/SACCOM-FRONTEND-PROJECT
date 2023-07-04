import { useState } from "react";

// import Navbar from "../Navbar/navbar"
// import search from '../../assets/HomeImageSlider/search.png'
// import ImageSlider from "./ImageSlider/imageSlider"
import HomeLanding from "./Products-Page/HomeLandingPage/HomeLanding";
import ViewMore from "./Products-Page/ViewMorePage/ViewMore";
// import ProductView from "./Products-Page/ProductViewPage/ProductView";

// import SavedProduct from "./Products-Page/SavedProductPage/SavedProduct"

const Home = () => {
  // const title = "Product Page";
  // const url = "https://react-icons.github.io/react-icons/search?q=love";
  const [isViewMore, setIsViewMore] = useState(false);

  const handleViewMoreClick = () => {
    setIsViewMore(true);
  };

  return (
    <main className="w-full h-full">
      {/* <ImageSlider /> */}

      {/* <ProductView title={title} url={url} /> */}
      {isViewMore ? (
        <ViewMore />
      ) : (
        <HomeLanding onViewMoreClick={handleViewMoreClick} />
      )}
    </main>
  );
};

export default Home;
