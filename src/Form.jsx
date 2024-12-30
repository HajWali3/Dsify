import React, { useState } from "react";

// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList Component
const LinkedList = () => {
  const [head, setHead] = useState(null);
  const [value, setValue] = useState("");
  const [displayList, setDisplayList] = useState([]);

  // Add a node at the end
  const append = () => {
    if (!value.trim()) return; // Prevent adding empty values
    const newNode = new Node(value);

    if (!head) {
      setHead(newNode); // Set head if the list is empty
      setDisplayList([newNode.value]); // Directly update display
    } else {
      let current = head;
      while (current.next) {
        current = current.next; // Traverse to the last node
      }
      current.next = newNode; // Add new node at the end

      // Update the display list
      setDisplayList((prev) => [...prev, newNode.value]);
    }

    setValue(""); // Clear the input
  };

  // Remove the first node
  const removeHead = () => {
    if (head) {
      setHead(head.next); // Update the head
      setDisplayList((prev) => prev.slice(1)); // Remove the first element from display
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>LinkedList Visualization</h1>
      <div>
        <input
          type="text"
          placeholder="Enter value"
          value={value}
          onChange={handleChange}
        />
        <button onClick={append}>Add Node</button>
        <button onClick={removeHead}>Remove Head</button>
      </div>
      <div>
        {displayList.map((nodeValue, index) => (
          <div key={index}>
            {/* Head label */}
            {index === 0 && <div>Head</div>}
            {/* Tail label */}
            {index === displayList.length - 1 && <div>Tail</div>}
            {/* Node */}
            <div>{nodeValue}</div>
            {/* Arrow */}
            {index < displayList.length - 1 && <div>→</div>}
          </div>
        ))}
        {displayList.length === 0 && <p>No nodes in the linked list.</p>}
      </div>
    </div>
  );
};

export default LinkedList;
