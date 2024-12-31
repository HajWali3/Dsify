import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Array from "./Components/Array";
import Stack from "./Components/Stack";
import LinkedList from "./Components/LinkedList";
import Selector from "./Components/Selector";
import BinaryTree from "./Components/BinaryTree";
import Homepage from "./Components/Homepage";
import Queue from "./Components/Queue";

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/Array",
          element: <Array />,
        },
        {
          path: "/Stack",
          element: <Stack />,
        },
        {
          path: "/LinkedList",
          element: <LinkedList />,
        },
        {
          path: "/BinaryTree",
          element: <BinaryTree />,
        },
        {
          path: "/Queue",
          element: <Queue />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
