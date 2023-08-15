import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/pages/auth/Login/state/loginSlice";
import forgetPasswordReducer from "../features/pages/auth/ForgetPassword/state/forgetPasswordSlice";
import VerificationReducer from "../features/pages/auth/Verfication/state/VerificationSlice";
import sendOtpReducer from "../features/pages/auth/Register/state/sendOtpSlice";
import registerReducer from "../features/pages/auth/Register/state/registerSlice";
import sliderReducer from "../features/pages/Home/Slider/state/sliderSlice";
import categoriesReducer from "../features/pages/Home/Categories/state/categoriesSlice";
import brandsReducer from "../features/pages/Home/Brand/state/brandsSlice";
import allProductsReducer from "../features/pages/Home/Products/state/allProductsSlice";
import getProductDetailsReducer from "../features/pages/Home/Products/state/getProductDetailsSlice";
import WishListReducer from "../features/pages/Home/WishList/state/WishListSlice";
import getAllFavoritesReducer from "../features/pages/Home/WishList/state/getAllFavoritesSlice";
import getUserReducer from "../features/pages/Home/PersonalInformation/state/getUserSlice";
import CheckOutReducer from "../features/pages/Home/CheckOut/state/CheckOutSlice";
import getMyOrdersReducer from "../features/pages/Home/Orders/state/getMyOrdersSlice";
import CurrencyReducer from "../features/pages/Home/Navbar/state/CurrencySlice";
import ShoppingCartReducer from "../features/pages/Home/ShoppingCart/state/ShoppingCartSlice";
import getAllCountriesReducer from "../features/pages/Home/MyAdresses/state/getAllCountriesSlice";
import getAllCitiesReducer from "../features/pages/Home/MyAdresses/state/getAllCitiesSlice";
import getRegionFromCityReducer from "../features/pages/Home/MyAdresses/state/getRegionFromCitySlice";
export default configureStore({
  reducer: {
    auth: loginReducer,
    forgetPasswordReducer,
    VerificationReducer,
    sendOtpReducer,
    registerReducer,
    sliderReducer,
    categoriesReducer,
    brandsReducer,
    allProductsReducer,
    getProductDetailsReducer,
    ShoppingCartReducer,
    WishListReducer,
    getAllFavoritesReducer,
    getUserReducer,
    CheckOutReducer,
    getMyOrdersReducer,
    CurrencyReducer,
    getAllCountriesReducer,
    getAllCitiesReducer,
    getRegionFromCityReducer
  },
});
