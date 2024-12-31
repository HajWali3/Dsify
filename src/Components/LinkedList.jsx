import React, { useState } from "react";
import Selector from "./Selector";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const LinkedList = () => {
  const [head, setHead] = useState(null);
  const [tail, setTail] = useState(null);
  const [value, setValue] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [listType, setListType] = useState("Singly-LinkedList");

  const add = () => {
    if (!value.trim()) return;
    const newNode = new Node(value);

    if (listType === "Doubly-LinkedList") {
      if (head) {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        newNode.prev = current;
        setTail(newNode);
      } else {
        setHead(newNode);
        setTail(newNode);
      }
    } else if (listType === "Circular-LinkedList") {
      if (head) {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = head;
        setTail(newNode);
      } else {
        setHead(newNode);
        newNode.next = newNode;
        setTail(newNode);
      }
    } else {
      if (!head) {
        setHead(newNode);
        setDisplayList([newNode.value]);
      } else {
        let current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        setDisplayList((prev) => [...prev, newNode.value]);
      }
    }

    setValue("");
  };

  // Remove the first node
  const removeHead = () => {
    if (head) {
      if (listType === "Circular-LinkedList" && head.next === head) {
        setHead(null);
        setTail(null);
      } else {
        setHead(head.next);
        if (listType === "Doubly-LinkedList") {
          head.next.prev = null;
          setL;
        }
      }
      setDisplayList((prev) => prev.slice(1));
    }
  };

  const Empty = () => {
    setDisplayList((prev) => {
      return [];
    });
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
    "Singly-LinkedList",
    "Doubly-LinkedList",
    "Circular-LinkedList",
  ];

  return (
    <div className="p-5  bg-gray-100 h-screen">
      <Selector handleSelect={handleSelect} selectOptions={selectOptions} />
      <div className="flex flex-col justify-center items-center">
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
            onClick={add}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Node
          </button>
          <button
            onClick={removeHead}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Remove Node
          </button>
          <button
            onClick={Empty}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Empty
          </button>
        </div>
        <div className="flex items-center space-x-5  py-4">
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
                  {listType == "doubly-linkedlist" ? (
                    <>
                      <div>←{console.log("listType==", listType)}</div>
                      <div>→{console.log("doubly linkedlist")}</div>
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
    </div>
  );
};

export default LinkedList;
