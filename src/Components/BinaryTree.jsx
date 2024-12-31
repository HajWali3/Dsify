import React, { useState } from "react";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const TreeVisualization = () => {
  const [root, setRoot] = useState(null);
  const [value, setValue] = useState("");

  const addNode = () => {
    if (!value.trim()) return;
    const newValue = parseInt(value, 10);
    if (isNaN(newValue)) {
      alert("Please enter a valid number");
      setValue("");
      return;
    }

    const newNode = new TreeNode(newValue);

    const insertNode = (current, newNode) => {
      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
        } else {
          insertNode(current.left, newNode);
        }
      } else {
        if (!current.right) {
          current.right = newNode;
        } else {
          insertNode(current.right, newNode);
        }
      }
    };

    if (!root) {
      setRoot(newNode);
    } else {
      insertNode(root, newNode);
    }

    setValue("");
  };

  const clearTree = () => {
    setRoot(null);
  };

  const renderTree = (node) => {
    if (!node) return null;

    return (
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full mb-2">
          {node.value}
        </div>
        <div className="flex space-x-4">
          {renderTree(node.left)}
          {renderTree(node.right)}
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white p-5 rounded shadow w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Binary Tree Visualization
        </h1>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-5">
          <input
            type="text"
            placeholder="Enter node value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addNode}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Node
          </button>
          <button
            onClick={clearTree}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Clear Tree
          </button>
        </div>

        <div className="flex justify-center py-4">
          {root ? (
            renderTree(root)
          ) : (
            <p className="text-gray-500 italic">Tree is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreeVisualization;
