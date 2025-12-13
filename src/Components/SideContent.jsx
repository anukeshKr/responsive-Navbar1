import React, { useState } from "react";
import Products from "./Products";

const SideContent = ({dark}) => {
  const options = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  const [category, setCategory] = useState("All");

  return (
    <div className="flex-1 h-full bg-blue-300/30">
      <div className="w-[98%] shadow mx-auto rounded-2xl bg-white my-2 h-full ">
        <div className="h-full mx-1 md:mx-15 overflow-y-auto hide-scrollbar">
          <div className="flex justify-center p-5">
            <div className="flex gap-1 md:gap-6 p-2 md:p-5 rounded-2xl bg-emerald-300 font-light sm:font-medium">
              {options.map((item, idx) => (
                <div
                  key={idx}
                  className={`hover:bg-emerald-600 p-4 rounded cursor-pointer transition-colors duration-200 hover:text-white ${
                    category === item ? "bg-emerald-800 text-white" : ""}`}
                  onClick={() => setCategory(item)}
                >
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
          <Products category={category}/>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
