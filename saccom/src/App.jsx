import About from "./component/AboutPage/About";
import Home from "./component/Home-Page/Home";
import Navbar from "./component/Navbar/navbar";
import Staffs from "./component/Staff Page/Staffs";
import Footer from "./component/Footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./component/Context/ProductContext";
// import Login from './component/Registration/login/login'
import "./index.css";
import CartPage from "./component/Home-Page/Cart-Page/CartPage";
import SavedProduct from "./component/Home-Page/Products-Page/SavedProductPage/SavedProduct";
import HomeLanding from "./component/Home-Page/Products-Page/HomeLandingPage/HomeLanding";

function App() {
  return (
    <div>
      <ProductProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/savedproduct" element={<SavedProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/staff" element={<Staffs />} />
          </Routes>
          <Footer />
        </Router>
      </ProductProvider>
      <div>
        {/* <Login /> */}
        {/* <About /> */}
        {/* <Staffs /> */}
      </div>
    </div>
  );
}

export default App;
