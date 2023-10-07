import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Board = () => {
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);
  const { activeMenuItem } = useSelector((state) => state.menu);
  const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);

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

    const mouseDownHandler = (e) => {
      shouldDraw.current = true;
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    };
    const mouseMoveHandler = (e) => {
      if (!shouldDraw.current) return;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };
    const mouseUpHandler = () => {
      shouldDraw.current = false;
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
  return (
    <canvas
      ref={canvasRef}
      style={{
        cursor:
          activeMenuItem === "ERASER"
            ? "url(https://w7.pngwing.com/pngs/538/9/png-transparent-computer-icons-eraser-eraser-angle-logo-web-button.png), auto"
            : "url(https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-pencil-icon-symbol-isolated-png-image_1727846.jpg), auto",
      }}
    ></canvas>
  );
};

export default Board;
