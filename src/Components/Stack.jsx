import React, { useState } from "react";

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState("");
  const [peekIndex, setPeekIndex] = useState(null);
  const [isFull, setIsFull] = useState(false);

  const push = () => {
    if (stack.length >= 5) setIsFull(true);
    else {
      if (value.trim()) {
        setStack((prev) => {
          return [value, ...prev];
        });
      }
    }

    setValue("");
    setPeekIndex(null);
  };

  const pop = () => {
    setStack((prev) => {
      const newStack = [...prev];
      newStack.pop();
      return newStack;
    });
    setPeekIndex(null);
    setIsFull(false);
  };

  const peek = () => {
    setPeekIndex(0);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-center text-gray-700 ">
        Stack Visualization
      </h1>

      <div className="flex justify-center items-center space-x-4 mt-4 mb-6">
        <input
          type="text"
          placeholder="Enter value"
          value={value}
          onChange={handleChange}
          className="border border-gray-400 p-3 rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={push}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition"
        >
          Push
        </button>
        <button
          onClick={pop}
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition"
        >
          Pop
        </button>
        <button
          onClick={peek}
          className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 transition"
        >
          Peek
        </button>
      </div>
      <p className="text-center text-red-600 font-bold text-xl mb-1">
        {isFull ? "Stack Overflow!" : ""}
      </p>

      <div className="w-72 h-[19rem] bg-indigo-400  mx-auto flex flex-col justify-end p-4 rounded-lg shadow-lg">
        <ul className="space-y-2">
          {stack.map((item, index) => {
            return (
              <li
                className={`w-full h-12 flex items-center justify-center text-white text-xl font-semibold rounded-lg transition-colors duration-300 ease-in-out ${
                  index === peekIndex ? "bg-yellow-500" : "bg-[#D63484]"
                }`}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
