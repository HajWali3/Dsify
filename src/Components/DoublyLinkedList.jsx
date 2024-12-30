import React, { useState } from "react";
import Selector from "./Selector";

// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList Component
const DoublyLinkedList = () => {
  const [head, setHead] = useState(null);
  const [tail, setTail] = useState(null);
  const [value, setValue] = useState("");
  const [displayList, setDisplayList] = useState([]);

  // Add a node at the end
  const append = () => {
    if (!value.trim()) return; // Prevent adding empty values
    const newNode = new Node(value);

    if (!head) {
      setHead(newNode); // Set head if the list is empty
      setTail(newNode); // Set tail as the same node
      setDisplayList([newNode.value]);
    } else {
      newNode.prev = tail; // Link the new node's prev to the current tail
      tail.next = newNode; // Link the current tail's next to the new node
      setTail(newNode); // Update the tail pointer

      // Update the display list
      setDisplayList((prev) => [...prev, newNode.value]);
    }

    setValue(""); // Clear the input
  };

  // Remove the first node
  const removeHead = () => {
    if (head) {
      const newHead = head.next;
      if (newHead) {
        newHead.prev = null; // Unlink the previous head
      } else {
        setTail(null); // If no nodes are left, clear the tail
      }
      setHead(newHead); // Update the head pointer
      setDisplayList((prev) => prev.slice(1)); // Remove the first element from display
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = () => {};

  const selectOptions = [
    "Singly LinkedList",
    "Doubly LinkedList",
    "Circular LinkedList",
  ];

  return (
    <div className="p-5">
      <Selector handleSelect={handleSelect} selectOptions={selectOptions} />
      <h1 className="text-2xl font-bold mb-4">
        Doubly LinkedList Visualization
      </h1>
      <div className="flex items-center space-x-2 mb-5">
        <input
          type="text"
          placeholder="Enter value"
          value={value}
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={append}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Add Node
        </button>
        <button
          onClick={removeHead}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Remove Head
        </button>
      </div>
      <div className="flex items-center space-x-5 overflow-x-auto py-4">
        {displayList.map((nodeValue, index) => (
          <div key={index} className="flex items-center space-x-2 relative">
            {/* Head label */}
            {index === 0 && (
              <div className="absolute top-[-21px] left-5 text-green-500 font-black">
                Head
              </div>
            )}
            {/* Tail label */}
            {index === displayList.length - 1 && (
              <div className="absolute bottom-[-22px] left-7 font-black text-red-500 font-bold">
                Tail
              </div>
            )}
            {/* Node */}
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
              {nodeValue}
            </div>
            {/* Forward Arrow */}
            {index < displayList.length - 1 && (
              <div className="text-3xl font-bold text-gray-600">→</div>
            )}
            {/* Backward Arrow */}
            {index > 0 && (
              <div className="text-3xl font-bold text-gray-600">←</div>
            )}
          </div>
        ))}
        {displayList.length === 0 && (
          <p className="text-gray-500 italic">No nodes in the linked list.</p>
        )}
      </div>
    </div>
  );
};

export default DoublyLinkedList;
