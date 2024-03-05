import * as React from "react";
import { Product } from "./features/product/Product";
import Home from "./pages/Home";
import ProductDetail from "./features/product/components/ProductDetail";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: (
      <>
        {" "}
        <h1>welcome to the cart page</h1>{" "}
      </>
    ),
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
