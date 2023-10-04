import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideToolBox,
  changePencilColor,
  changeBrushSize,
} from "@/slices/toolBoxSlice";
const ToolBox = () => {
  const defaultColors = ["red", "blue", "green"];
  const dispatch = useDispatch();
  const { isToolBoxOpen, PENCIL, ERASER } = useSelector(
    (state) => state.toolBox
  );
  const { activeMenuItem } = useSelector((state) => state.menu);

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  if (!isToolBoxOpen) return;
  return (
    <div className="border border-gray-200 w-60 absolute top-1/4 left-2 ml-5 py-2 px-3 rounded-lg shadow-md bg-white">
      {activeMenuItem !== "ERASER" && (
        <>
          <div className="my-1">
            <div className="flex items-center justify-between pr-3">
              <h3 className="font-medium text-sm mb-1">Default colors</h3>
              <span
                className="font-bold p-1 border h-8 w-8 flex items-center justify-center border-gray-100 rounded-full cursor-pointer text-sm shadow-sm hover:border-gray-300"
                onClick={() => dispatch(hideToolBox())}
              >
                X
              </span>
            </div>
            <div className="flex gap-2">
              {defaultColors.map((color, index) => (
                <span
                  key={index}
                  className={`${
                    PENCIL.color === color && "border border-black rounded-sm"
                  } w-8 h-5 bg-${color}-600 cursor-pointer`}
                  onClick={() => dispatch(changePencilColor(color))}
                ></span>
              ))}
            </div>
          </div>
          <div className="my-1">
            <h3 className="font-medium text-sm">Pick a color</h3>
            <input
              type="color"
              className="w-[34px] bg-transparent cursor-grab rounded-lg"
              onChange={(e) => dispatch(changePencilColor(e.target.value))}
            />
          </div>
          <hr className="mb-2" />
        </>
      )}
      <div className="my-1">
        <h3 className="font-medium text-sm">Brush size</h3>
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          onChange={updateBrushSize}
          value={activeMenuItem == "PENCIL" ? PENCIL.size : ERASER.size}
        />
      </div>
    </div>
  );
};

export default ToolBox;
