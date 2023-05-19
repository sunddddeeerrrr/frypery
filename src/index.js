import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AddProduct from './pages/AddProduct';
import Customers from './pages/Customers';
import Commands from './pages/Commands';
import AllProducts from './pages/AllProducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "add-product",
    element: <AddProduct />
  },
  {
    path: "products",
    element: <AllProducts />
  },
  {
    path: "customers",
    element: <Customers />
  },
  {
    path: "commands",
    element: <Commands />
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <App />
// );