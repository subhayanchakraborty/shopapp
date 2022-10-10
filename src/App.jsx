import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductSingle from "./pages/ProductSingle";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate,
} from "react-router-dom";


function App() {
  const user=true;
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
        <Route path="/products/:category" element={<ProductsList/>}></Route>
        <Route path="/product/:id" element={<ProductSingle/>}></Route>
        <Route path="/cart/" element={<Cart/>}></Route>
        <Route path="/login/" element={user?<Navigate to="/"/>:<Login/>}></Route>
        <Route path="/register/" element={user?<Navigate to="/"/>:<Register/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;