import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const index = () => {
  return (
    <div className="border border-gray-200 w-60 absolute top-1/4 left-2 ml-5 py-2 px-3 rounded-lg shadow-sm">
      <div className="my-1">
        <div className="flex items-center justify-between pr-3">
          <h3 className="font-medium text-sm mb-1">Try Default colors</h3>
          <FontAwesomeIcon icon={faXmark} className="cursor-pointer" />
        </div>
        <div className="flex gap-2">
          <span className="w-8 h-5 bg-red-600 cursor-pointer"></span>
          <span className="w-8 bg-blue-600 cursor-pointer"></span>
          <span className="w-8 bg-green-600 cursor-pointer"></span>
        </div>
      </div>
      <div className="my-1">
        <h3 className="font-medium text-sm">Pick a color</h3>
        <input
          type="color"
          className="w-[34px] bg-transparent cursor-grab rounded-lg"
        />
      </div>
      <hr />
      <div className="my-1">
        <h3 className="font-medium text-sm">Brush size</h3>
        <input type="range" min={1} max={10} step={1} />
      </div>
    </div>
  );
};

export default index;
