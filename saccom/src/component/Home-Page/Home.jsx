import { useState } from "react";
import HomeLanding from "./Products-Page/HomeLandingPage/HomeLanding";
import ViewMore from "./Products-Page/ViewMorePage/ViewMore";

const Home = () => {
  const [isViewMore, setIsViewMore] = useState(false);

  const handleViewMoreClick = () => {
    setIsViewMore(!isViewMore);
  };

  return (
    <main className="w-full h-full">
      {isViewMore ? (
        <ViewMore />
      ) : (
        <HomeLanding onViewMoreClick={handleViewMoreClick} />
      )}
    </main>
  );
};

export default Home;
