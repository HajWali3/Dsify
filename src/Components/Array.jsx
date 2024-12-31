import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import InputBox from "./InputBox";

// Array Component
const Array = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isArrayStatic, setIsArrayStatic] = useState(false);
  const [arraySizeLimit, setArraySizeLimit] = useState(false);
  const [arrayFullMessage, setArrayFullMessage] = useState(false);
  const [disabledCondition, setDisabledCondition] = useState(true);

  const add = () => {
    if (isArrayStatic) {
      if (array.length >= arraySizeLimit) {
        setArrayFullMessage(true);
        setInputValue("");
        return;
      }
    }
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
    setArrayFullMessage(false);
  };
  const empty = () => {
    setArray((prev) => {
      let newArr = [...prev];
      newArr = [];
      return newArr;
    });
    setArrayFullMessage(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //Input box
  const getSize = (arraySize) => {
    setArraySizeLimit(arraySize);
    setIsArrayStatic(true);
    setDisabledCondition(false);

    setArray([]);
  };

  let arrLen = isArrayStatic ? arraySizeLimit : array.length;

  const containerWidth = `${Math.min(arrLen * 80 + 50, 800)}px`; // Max width of 800px

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

  const selectOptions = ["Static", "Dynamic"];

  return (
    <div className=" p-5 bg-gray-100 h-screen">
      <div className="flex">
        <Selector handleSelect={handleSelect} selectOptions={selectOptions} />
        {isArrayStatic && <InputBox getSize={getSize} />}
      </div>

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
            disabled={disabledCondition}
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
            className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 transition"
          >
            Empty
          </button>
        </div>
        {arrayFullMessage && (
          <h1 className="text-red-600 ">
            Array is full! Try using a new array
          </h1>
        )}
        <div
          className="flex flex-wrap justify-center items-center space-x-3 mt-8 border-2 border-gray-300 p-3 pb-0 rounded-lg shadow-lg "
          style={{ width: containerWidth }}
        >
          {array.length === 0 ? (
            <p className="text-gray-500 italic">Array is empty</p>
          ) : (
            array.map((element, index) => (
              <div key={index} className="flex flex-col items-center m-2  ">
                {/* Element */}
                <div className="flex items-center justify-center bg-blue-500 text-white text-2xl font-black w-16 h-16 rounded-lg shadow-md mb-2  ">
                  {element}
                </div>
                {/* Index */}
                <h1 className="text-sm text-center text-[#FA7070] font-bold">
                  {index}
                </h1>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Array;
