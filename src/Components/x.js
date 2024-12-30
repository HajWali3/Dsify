import React, { useState, useEffect } from "react";

// Array Component
const BinaryTree = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const add = () => {
    if (inputValue.trim()) {
      setArray((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const remove = () => {
    setArray((prev) => {
      let newArr = [...prev];
      newArr.pop();
      return newArr;
    });
  };
  const empty = () => {
    setArray((prev) => {
      let newArr = [...prev];
      newArr = [];
      return newArr;
    });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //SelectBox
  const handleSelect = (arrType) => {
    if (arrType == "static") {
      setIsArrayStatic(true);
      setDisabledCondition(true);
    } else {
      setIsArrayStatic(false);
      setDisabledCondition(false);
    }
    setArray([]);
    setArrayFullMessage(false);
  };

  return (
    <div className=" p-5">
      <div className=" flex flex-col items-center mx-20">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-700">
          Array Visualization
        </h1>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Enter inputValue"
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
          <button
            onClick={remove}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition"
          >
            Remove
          </button>
          <button
            onClick={empty}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition"
          >
            Empty
          </button>
        </div>

        <div className="  ">
          {array.map((element, index) => (
            <div
              key={index}
              className="border-2 border-black rounded-full w-16 h-16 text-center"
            >
              <div className="">{element}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinaryTree;
