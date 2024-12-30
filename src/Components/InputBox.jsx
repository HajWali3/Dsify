import * as React from "react";
import { useState } from "react";

export default function InputBox({ getSize }) {
  const [value, setValue] = useState("");
  const [inputCheck, setInputCheck] = useState(true);

  const handleOnClick = () => {
    if (value === "") {
      setInputCheck(false);
    } else {
      getSize(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter size"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setInputCheck(true);
        }}
        className={` p-3 rounded-md h-10 w-32 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md  
             ${
               inputCheck
                 ? "border border-gray-400"
                 : "border-2 border-red-500 shadow-[0_0_5px_rgba(248,113,113,0.7)]"
             }
            `}
      />
      <button
        onClick={handleOnClick}
        className="bg-red-500 text-white h-10 ml-4 px-6 py-2 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition shadow-md"
      >
        Set
      </button>
    </div>
  );
}
