import React from "react";
import Products from "./Products";
import ProductDetails from './ProductDetails';
import { products } from "./data";
import { Route, Routes } from "react-router-dom";

export default function ProductApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products list={products} />} />
        <Route
          path="/product/:id"
          element={<ProductDetails list={products} />}
        />
      </Routes>
    </>
  );
}
