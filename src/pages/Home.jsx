import React from "react";
import Navbar from "../features/navbar/Navbar";
import { Product } from "../features/product/Product";

export default function Home() {
  return (
    <>
      <Navbar />
      <Product />
    </>
  );
}
