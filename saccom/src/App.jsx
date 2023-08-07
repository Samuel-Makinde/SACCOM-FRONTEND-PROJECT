import About from "./component/AboutPage/About";
import Home from "./component/Home-Page/Home";
import Navbar from "./component/Navbar/navbar";
import Staffs from "./component/Staff Page/Staffs";
import Footer from "./component/Footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./component/Context/ProductContext";
import Login from "./component/Registration/login/login";
import "./index.css";
import CartPage from "./component/Home-Page/Cart-Page/CartPage";
import SavedProduct from "./component/Home-Page/Products-Page/SavedProductPage/SavedProduct";
// import HomeLanding from "./component/Home-Page/Products-Page/HomeLandingPage/HomeLanding";
import ProductView from "./component/Home-Page/Products-Page/ProductViewPage/ProductView";
import ScrollToTop from "./component/Scroll-To-Top/ScrollToTop";
import { useLocation } from "react-use";
import SignUp from "./component/Registration/Sign Up/SignUp";
import ViewMore from "./component/Home-Page/Products-Page/ViewMorePage/ViewMore";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";

  return (
    <div>
      <ProductProvider>
        <Router>
          {!isLoginPage && !isSignUpPage && <Navbar />}
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/savedproduct" element={<SavedProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/staff" element={<Staffs />} />
            <Route
              path="/product/:productId"
              element={
                <ProductView
                  title="Product Description Page"
                  url={window.location.href}
                />
              }
            />
            <Route path="/view" element={<ViewMore />} />
          </Routes>
          {!isLoginPage && !isSignUpPage && <Footer />}
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
