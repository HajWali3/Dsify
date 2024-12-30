import React, { useState } from "react";
import Selector from "./Selector";
import InputBox from "./InputBox";

// Queue Component
const CircularQueue = () => {
  const [queue, setQueue] = useState([]); // State to store the queue elements
  const [inputValue, setInputValue] = useState(""); // State to manage input value
  const [isQueueStatic, setIsQueueStatic] = useState(false); // Flag for static queue type
  const [queueSizeLimit, setQueueSizeLimit] = useState(false); // Limit size for static queue
  const [queueFullMessage, setQueueFullMessage] = useState(false); // Message when queue is full
  const [disabledCondition, setDisabledCondition] = useState(true); // Disable input condition

  // Enqueue operation (Add to the rear of the queue)
  const enqueue = () => {
    if (isQueueStatic) {
      if (queue.length >= queueSizeLimit) {
        setQueueFullMessage(true); // Display full message
        setInputValue(""); // Clear the input field
        return;
      }
    }
    if (inputValue.trim()) {
      setQueue((prev) => [...prev, inputValue]); // Add new element to the queue
      setInputValue(""); // Clear input after enqueue
    }
  };

  // Dequeue operation (Remove from the front of the queue)
  const dequeue = () => {
    if (queue.length > 0) {
      setQueue((prev) => {
        let newQueue = [...prev];
        newQueue.shift(); // Remove the first element (dequeue)
        return newQueue;
      });
      setQueueFullMessage(false); // Reset full message after dequeue
    }
  };

  // Clear the queue
  const emptyQueue = () => {
    setQueue([]);
    setQueueFullMessage(false);
  };

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Set the size limit for static queue
  const getQueueSize = (queueSize) => {
    setQueueSizeLimit(queueSize);
    setIsQueueStatic(true); // Change to static queue
    setDisabledCondition(false); // Enable input for dynamic queue
    setQueue([]); // Reset the queue when switching to static
  };

  // Dynamically set the queue length
  let queueLen = isQueueStatic ? queueSizeLimit : queue.length;

  const containerWidth = `${Math.min(queueLen * 80 + 50, 800)}px`; // Set the max width for the queue display

  // Handle queue type selection (Static or Dynamic)
  const handleSelect = (queueType) => {
    if (queueType === "static") {
      setIsQueueStatic(true);
      setDisabledCondition(true); // Disable input when static queue
    } else {
      setIsQueueStatic(false);
      setDisabledCondition(false); // Enable input for dynamic queue
    }
    setQueue([]);
    setQueueFullMessage(false);
  };

  const selectOptions = ["Static", "Dynamic"];

  return (
    <div className="p-5">
      <div className="flex">
        <Selector handleSelect={handleSelect} selectOptions={selectOptions} />
        {isQueueStatic && <InputBox getQueueSize={getQueueSize} />}
      </div>

      <div className="flex flex-col items-center mx-20">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-700">
          Queue Visualization
        </h1>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Enter value"
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-400 p-3 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={disabledCondition}
          />
          <button
            onClick={enqueue}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition"
          >
            Enqueue
          </button>
          <button
            onClick={dequeue}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition"
          >
            Dequeue
          </button>
          <button
            onClick={emptyQueue}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition"
          >
            Empty Queue
          </button>
        </div>

        {queueFullMessage && (
          <h1 className="text-red-600 absolute">
            Queue is full! Try using a new queue
          </h1>
        )}

        <div className="w-96 h-96   relative  rounded-full   shadow-lg bg-red-600">
          {queue.map((element, index) => (
            <div key={index} className=" ">
              <div className="">{element}</div>
            </div>
          ))}
          <div className="w-64 h-64 rounded-full bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default CircularQueue;
