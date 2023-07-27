import React from 'react';
import SigninPage from './Pages/SigninPage';
import ProductPage from './Pages/ProductPage';
import WishlistPage from './Pages/WishlistPage';
import ProductListingPage from './Pages/ProductListingPage';
import OrderHistoryPage from './Pages/OrderHistoryPage';
import CartPage from './Pages/CartPage';
import Homepage from './Pages/Homepage';
import {createBrowserRouter,RouterProvider} from "react-router-dom";


function App() {

  // Routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/cart",
      element: <CartPage/>,
    },
    {
      path: "/orderhistory",
      element: <OrderHistoryPage/>,
    },
    {
      path: "/products/:gender",
      element: <ProductListingPage/>,
    },
    {
      path: "/wishlist",
      element: <WishlistPage/>,
    },
    {
      path: "/products/preview",
      element: <ProductPage/>,
    },
    {
      path: "/signin",
      element: <SigninPage/>,
    },
  ]);

  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;