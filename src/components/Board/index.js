import { handleActionMenuItemClick } from "@/slices/menuSlice";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_ICONS } from "@/constants";

const Board = () => {
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);
  const drawHistory = useRef([]);
  const currentIndex = useRef(0);
  const { activeMenuItem, actionMenuItem } = useSelector((state) => state.menu);
  const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);
  const dispatch = useDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const hasContent = Array.from(imageData).some((value) => value !== 0);
    if (actionMenuItem === MENU_ICONS.DOWNLOAD) {
      if (hasContent) {
        // Creating a new canvas with a white background
        const newCanvas = document.createElement("canvas");
        newCanvas.width = canvas.width;
        newCanvas.height = canvas.height;
        const newCtx = newCanvas.getContext("2d");
        newCtx.fillStyle = "white";
        newCtx.fillRect(0, 0, newCanvas.width, newCanvas.height);

        // Drawing the original content on top of the white background
        newCtx.drawImage(canvas, 0, 0);
        const URL = newCanvas.toDataURL();
        const anchor = document.createElement("a");
        anchor.href = URL;
        anchor.download = "sketch.jpg";
        anchor.click();
      } else {
        alert("You have not drawn anything yet!");
      }
    } else if (actionMenuItem === MENU_ICONS.CLEAR_ALL) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else if (
      hasContent &&
      (actionMenuItem === MENU_ICONS.UNDO || actionMenuItem === MENU_ICONS.REDO)
    ) {
      if (actionMenuItem === MENU_ICONS.UNDO && currentIndex.current > 0)
        currentIndex.current -= 1;
      if (
        actionMenuItem === MENU_ICONS.REDO &&
        currentIndex.current < drawHistory.current.length - 1
      )
        currentIndex.current += 1;
      const imageData = drawHistory.current[currentIndex.current];
      ctx.putImageData(imageData, 0, 0);
    }
    dispatch(handleActionMenuItemClick(null));
  }, [actionMenuItem]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    //context provides utility functions(properties)
    const ctx = canvas.getContext("2d");
    const changeConfig = () => {
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
    };
    changeConfig();
  }, [color, size]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const beginPath = (x, y) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
    };
    const drawLine = (x, y) => {
      ctx.lineTo(x, y);
      ctx.stroke();
    };
    const mouseDownHandler = (e) => {
      shouldDraw.current = true;
      beginPath(e.clientX, e.clientY);
    };
    const mouseMoveHandler = (e) => {
      if (!shouldDraw.current) return;
      drawLine(e.clientX, e.clientY);
    };
    const mouseUpHandler = () => {
      shouldDraw.current = false;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      drawHistory.current.push(imageData);
      currentIndex.current = drawHistory.current.length - 1;
    };
    canvas.addEventListener("mousedown", mouseDownHandler);
    canvas.addEventListener("mousemove", mouseMoveHandler);
    canvas.addEventListener("mouseup", mouseUpHandler);
    return () => {
      canvas.removeEventListener("mousedown", mouseDownHandler);
      canvas.removeEventListener("mousemove", mouseMoveHandler);
      canvas.removeEventListener("mouseup", mouseUpHandler);
    };
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
