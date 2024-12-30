import React, { useState } from "react";
import Selector from "./Selector";

// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // Used in Doubly Linked List
  }
}

// LinkedList Component
const LinkedList = () => {
  const [head, setHead] = useState(null);
  const [tail, setTail] = useState(null);
  const [value, setValue] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [listType, setListType] = useState("Singly LinkedList"); // Manage list type state

  // Add a node at the end
  const append = () => {
    if (!value.trim()) return; // Prevent adding empty values
    const newNode = new Node(value);

    if (listType === "Doubly LinkedList") {
      if (head) {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        newNode.prev = current; // Set previous for the new node
        setTail(newNode); // Update the tail
      } else {
        setHead(newNode); // Set head for empty list
        setTail(newNode); // Also set tail for the first node
      }
    } else if (listType === "Circular LinkedList") {
      if (head) {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = head; // Circular connection: points to head
        setTail(newNode); // Update the tail
      } else {
        setHead(newNode); // Set head for empty list
        newNode.next = newNode; // Circular connection: points to itself
        setTail(newNode); // Tail is the same as head in circular lists
      }
    } else {
      if (!head) {
        setHead(newNode); // Set head if the list is empty
        setDisplayList([newNode.value]); // Directly update display
      } else {
        let current = head;
        while (current.next) {
          current = current.next; // Traverse to the last node
        }
        current.next = newNode; // Add new node at the end
        setDisplayList((prev) => [...prev, newNode.value]); // Update the display list
      }
    }

    setValue(""); // Clear the input
  };

  // Remove the first node
  const removeHead = () => {
    if (head) {
      if (listType === "Circular LinkedList" && head.next === head) {
        setHead(null); // Only one node, make list empty
        setTail(null);
      } else {
        setHead(head.next); // Update the head
        if (listType === "Doubly LinkedList") {
          head.next.prev = null; // Disconnect prev pointer in Doubly LinkedList
        }
      }
      setDisplayList((prev) => prev.slice(1)); // Remove the first element from display
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Handle type selection change
  const handleSelect = (selectedType) => {
    setListType(selectedType);
    setHead(null); // Reset the list when switching types
    setTail(null);
    setDisplayList([]);
  };

  const selectOptions = [
    "Singly LinkedList",
    "Doubly LinkedList",
    "Circular LinkedList",
  ];

  return (
    <div className="p-5">
      <Selector handleSelect={handleSelect} selectOptions={selectOptions} />
      <h1 className="text-2xl font-bold mb-4">LinkedList Visualization</h1>
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
        {displayList.length === 0 && (
          <p className="text-gray-500 italic">No nodes in the linked list.</p>
        )}

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

            {/* Arrows: conditional based on the list type */}
            {index < displayList.length - 1 && (
              <div className="text-3xl font-bold text-gray-600">
                {listType === "Doubly LinkedList" ? (
                  <>
                    <div>←</div>
                    <div>→</div>
                  </>
                ) : (
                  <div>→</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedList;
