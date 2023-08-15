import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./features/pages/auth/Register/Register";
import "./App.css";
import ForgetPassword from "./features/pages/auth/ForgetPassword/page/ForgetPassword";
import VerificationCode from "./features/pages/auth/Verfication/VerificationCode";
import Home from "./features/pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./features/pages/auth/Login/page/Login";
import Error from "./features/pages/Error";
import AllBrands from "./features/pages/Home/Brand/page/AllBrands/AllBrands";
import BrandsDetail from "./features/pages/Home/Brand/page/BrandsDetail/BrandsDetail";
import AllProducts from "./features/pages/Home/Products/page/AllProducts/AllProducts";
import ProductsDetails from "./features/pages/Home/Products/page/ProductDetails/ProductsDetails";
import AllCategories from "./features/pages/Home/Categories/page/AllCategories/AllCategories";
import SubCategories from "./features/pages/Home/Categories/page/SubCategories/SubCategories";
import SliderItems from "./features/pages/Home/Slider/page/SliderItems/SliderItems";
import ShoppingCart from "./features/pages/Home/ShoppingCart/page/ShoppingCart";
import Orders from "./features/pages/Home/Orders/page/Orders";
import CheckOut from "./features/pages/Home/CheckOut/page/CheckOut";
import TermsAndConditions from "./features/pages/Home/TermsAndCondition/page/TermsAndCondition";
import DeveloperInformation from "./features/pages/Home/DeveloperInformation/page/DeveloperInformation";
import PrivacyPolicy from "./features/pages/Home/PrivacyPolicy/page/PrivacyPolicy";
import AboutUs from "./features/pages/Home/AboutUs/page/AboutUs";
import Adresses from "./features/pages/Home/MyAdresses/page/Adresses";
import WishList from "./features/pages/Home/WishList/page/WishList";
import ReviewPage from "./features/pages/Home/Review/page/ReviewPage";
import i18n from "./i18n";
import { I18nextProvider } from 'react-i18next';
import { useState } from "react";
import ReactWhatsapp from "react-whatsapp";
import AddNewAdresses from "./features/pages/Home/MyAdresses/page/AddNewAdresses";
const App = () => {
  const [token, setToken] = useState(
    sessionStorage.getItem("token") || localStorage.getItem("token")
  );
  return (
    <I18nextProvider i18n={i18n}>
    <div>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path={"/"} element={<Home />} />
        </Route>
        <Route exact path="/all-brands" element={<AllBrands />} />
        <Route exact path="/brands/:id" element={<BrandsDetail />} />
        <Route exact path="/all-products" element={<AllProducts />} />
        <Route exact path="/all-categories" element={<AllCategories />} />
        <Route exact path="/subCategories/:id" element={<SubCategories />} />
        <Route exact path="/stories/:id" element={<SliderItems />} />
        <Route exact path="/product-detail/:id" element={<ProductsDetails />} />
        <Route exact path="/shopping-cart" element={<ShoppingCart />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/adresses" element={<Adresses />} />
        <Route exact path="/favorite" element={<WishList />} />
        <Route exact path="/review" element={<ReviewPage />} />
        <Route exact path="/add-adresses" element={<AddNewAdresses/>}/>
        <Route
          exact
          path="/terms-and-condition"
          element={<TermsAndConditions />}
          />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route
          exact
          path="/developer-information"
          element={<DeveloperInformation />}
        />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
          />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
          />
        <Route
          path="/forget-password"
          element={token ? <Navigate to="/" /> : <ForgetPassword />}
          />
        <Route
          path="/verification"
          element={token ? <Navigate to="/" /> : <VerificationCode />}
          />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
          </I18nextProvider>
  );
};
export default App;
