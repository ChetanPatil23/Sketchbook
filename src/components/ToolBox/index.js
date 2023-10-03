import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToolBox } from "@/slices/toolBoxSlice";
const ToolBox = () => {
  const dispatch = useDispatch();
  const { isToolBoxOpen } = useSelector((state) => state.toolBox);
  const { activeMenuItem } = useSelector((state) => state.menu);
  if (!isToolBoxOpen) return;
  return (
    <div className="border border-gray-200 w-60 absolute top-1/4 left-2 ml-5 py-2 px-3 rounded-lg shadow-sm">
      {activeMenuItem !== "ERASER" && (
        <>
          <div className="my-1">
            <div className="flex items-center justify-between pr-3">
              <h3 className="font-medium text-sm mb-1">Try Default colors</h3>
              <span
                className="font-bold p-1 border h-8 w-8 flex items-center justify-center border-gray-100 rounded-full cursor-pointer text-sm shadow-lg hover:border-gray-300"
                onClick={() => dispatch(hideToolBox())}
              >
                X
              </span>
            </div>
            <div className="flex gap-2">
              <span className="w-8 h-5 bg-red-600 cursor-pointer"></span>
              <span className="w-8 h-5 bg-blue-600 cursor-pointer"></span>
              <span className="w-8 h-5 bg-green-600 cursor-pointer"></span>
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
        </>
      )}
      <div className="my-1">
        <h3 className="font-medium text-sm">Brush size</h3>
        <input type="range" min={1} max={10} step={1} />
      </div>
    </div>
  );
};

export default ToolBox;
