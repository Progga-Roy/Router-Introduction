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
import Friends from "./Component/Friends/Friends";
import FriendDetails from "./Component/FriendDetails/FriendDetails";
import Post from "./Component/Post/Post";
import ShowPost from "./Component/ShowPost/ShowPost";

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
       path:'/friends',
       element : <Friends></Friends>,
       loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
       path:'friend/:friendId',
       element: <FriendDetails></FriendDetails>,
       loader :({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/post',
        element:<Post></Post>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/post/:postId',
        element: <ShowPost></ShowPost>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

      },
      {
        path :'*',
        element : <div>4444444444444444444044444444444444444</div>
      }
    ]
  }
])
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);