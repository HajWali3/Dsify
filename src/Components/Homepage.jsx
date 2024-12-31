import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const visualizations = [
    {
      name: "Array",
      path: "/array",
      description: "Explore Arrays and their operations.",
      icon: "🔢",
    },
    {
      name: "Linked List",
      path: "/LinkedList",
      description: "Visualize and interact with Linked Lists.",
      icon: "📋",
    },
    // {
    //   name: "Binary Tree",
    //   path: "/binary-tree",
    //   description: "Explore Binary Trees step by step.",
    //   icon: "🌳",
    // },
    {
      name: "Stack",
      path: "/stack",
      description: "Learn about Stack operations.",
      icon: "📚",
    },
    {
      name: "Queue",
      path: "/queue",
      description: "Understand Queues with animations.",
      icon: "📦",
    },
  ];

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-[#FFCCE1] text-white text-center relative">
        <img
          src="/ds.png"
          alt="Data Structure Playground"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-60 py-6">
          <h1 className=" text-5xl font-bold">
            Code Your Way Through Data Structures
          </h1>
          <p className="mt-4 text-xl">
            Unleashing the Magic of Data Structures: Visualize and Learn!
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <div className="w-full bg-white shadow-md p-8 flex justify-center items-center mt-5">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Interactive Visualizations</h2>
          <p className="text-gray-600 mt-2">
            Dive into the world of data structures with easy-to-use
            visualizations.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 mt-8">
        {visualizations.map((viz) => (
          <div

            key={viz.name}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => navigateTo(viz.path)}
          >
            <div className="text-4xl mb-4">{viz.icon}</div>
             <h3 className="text-xl font-bold">{viz.name}</h3>
            <p className="text-gray-600 text-center mt-2">{viz.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      
      <footer className="w-full bg-gray-800 text-white py-6 mt-10">
        <div className="text-center">
          <p>&copy; 2024 DataStructVis. All Rights Reserved.</p>
          <p>"Coding Concepts Made Simple."</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
