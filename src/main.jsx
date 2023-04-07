import React from "react";
import ReactDOM from "react-dom/client";
import './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from "./Component/About/About";

import Home from "./Component/Home/Home";
import Contact from "./Component/About/Contact/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>hello world!!</div>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element:<Contact></Contact>,
//   },
 
// ]);
const router = createBrowserRouter([
  {
    path: '/',
    element :<Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }
])
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);