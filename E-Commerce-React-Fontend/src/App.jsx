import React from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetail from "./customer/components/ProductDetail/ProductDetail";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetail from "./customer/components/Order/OrderDetail";
import { Route, Routes } from "react-router-dom";
import CustomerRoutters from "./Routers/CustomerRoutters";

const App = () => {
  return (
        <Routes>
          <Route path="/*" element={<CustomerRoutters />} />
        </Routes>
  );
};

export default App;
