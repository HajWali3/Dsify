import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Array from "./Components/Array";
import Stack from "./Components/Stack";
import LinkedList from "./Components/LinkedList";
import Selector from "./Components/Selector";
import BinaryTree from "./Components/BinaryTree";
import DoublyLinkedList from "./Components/DoublyLinkedList";
import Home from "./Components/Home";
import Queue from "./Components/Queue";
import CircularQueue from "./Components/CircularQueue";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
    {
      path: "/CircularQueue",
      element: <CircularQueue />,
    },
  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
