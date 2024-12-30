import React, { useState } from "react";

// Node Component
const TreeNode = ({ value, left, right }) => {
  return (
    <div className="tree-node flex flex-col items-center">
      <div className="bg-white border-2 border-black rounded-full w-16 h-16 flex items-center justify-center">
        {value}
      </div>
      <div className="flex space-x-4 mt-4">
        {left && <TreeNode {...left} />}
        {right && <TreeNode {...right} />}
      </div>
      <div className="flex justify-between w-full">
        {left && <div className="arrow"></div>}
        {right && <div className="arrow"></div>}
      </div>
    </div>
  );
};

// BinaryTree Component
const BinaryTree = () => {
  const [tree, setTree] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const addNode = (value, node = tree) => {
    if (!node) {
      return { value, left: null, right: null };
    }
    if (value < node.value) {
      return { ...node, left: addNode(value, node.left) };
    } else {
      return { ...node, right: addNode(value, node.right) };
    }
  };

  const add = () => {
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) {
      setTree((prev) => addNode(parsedValue, prev));
      setInputValue("");
    } else {
      alert("Please enter a valid number");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col items-center mx-20">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-700">
          Binary Tree Visualization
        </h1>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Enter value"
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-400 p-3 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={add}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition"
          >
            Add
          </button>
        </div>

        <div className="mt-6 flex justify-center">
          {tree ? <TreeNode {...tree} /> : <div>No nodes in the tree</div>}
        </div>
      </div>
    </div>
  );
};

export default BinaryTree;
