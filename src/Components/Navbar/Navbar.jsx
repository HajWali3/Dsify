import React, { useState } from "react";
import { Link } from "react-router-dom";

const menu = [
  { id: 0, name: "Home", link: "/" },
  { id: 1, name: "Array", link: "/Array" },
  { id: 2, name: "Stack", link: "/Stack" },
  { id: 3, name: "LinkedList", link: "/LinkedList" },
  // { id: 4, name: "BinaryTree", link: "/BinaryTree" },
  { id: 5, name: "Queue", link: "/Queue" },
];

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const handleChange = (e) => {
    setFilteredData([]);
    setSearchValue(e.target.value);
    const filtered = menu.filter((menuItem) =>
      menuItem.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      {/* upper-navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl flex gap-2 relative top-1">
            <img
              src="/file.png"
              alt="Logo"
              className="w-11 uppercase relative left-1 bottom-2"
            />
            DSify
          </Link>
          {/* Search bar section */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleChange}
              className="w-[200px] rounded-full border px-2 py-1"
            />
            {filteredData.length > 0 && (
              <ul className="absolute bg-white shadow-md">
                {filteredData.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link} className="block px-4 py-2">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* lower-navbar */}
      <div className="flex justify-center">
        <ul className="flex gap-4">
          {menu.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="cursor-pointer"
            >
              <Link
                to={item.link}
                className={`transition-all duration-300 ease-linear ${
                  activeItem === item.id
                    ? "text-primary font-semibold border-b-[1px] border-primary"
                    : "text-black hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
