import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import FeaturedProducts from "./components/product/FeaturedProducts";
import Features from "./components/home/Features";
import AdminLayout from "./components/layout/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Products from "./pages/Admin/Products";
import AdminCategories from "./pages/Admin/AdminCategories";
import Orders from "./pages/Admin/Orders";
import Customers from "./pages/Admin/Customers";
import Reviews from "./pages/Admin/Reviews";
import Coupons from "./pages/Admin/Coupons";
import Analytics from "./pages/Admin/Analytics";
import Payments from "./pages/Admin/Payments";
import Shipping from "./pages/Admin/Shipping";
import Staff from "./pages/Admin/Staff";
import Settings from "./pages/Admin/Settings";

function Home() {
  return (
    <>
      <Navbar />
     <Hero /> 
     <Features/>
      <Categories />
      <FeaturedProducts/> 
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="payments" element={<Payments />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="staff" element={<Staff />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;