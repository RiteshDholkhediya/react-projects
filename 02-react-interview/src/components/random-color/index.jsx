/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateHexColor(e) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += arr[generateRandom(arr.length)];
    }

    console.log(hex);

    setColor(hex);
  }

  function handleCreateRGBColor(e) {
    let r = generateRandom(256);
    let g = generateRandom(256);
    let b = generateRandom(256);
    console.log(`rgb(${r},${g},${b})`);

    setColor(`rgb(${r},${g},${b})`);
  }

  function generateRandom(length) {
    return Math.floor(Math.random() * length);
  }

  useEffect(() => {
    if (color === "rgb") handleCreateRGBColor();
    else handleCreateHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div className="w-full h-full max-h-screen box-border ">
        <div className="border-8 p-4 flex justify-center align-middle w-full gap-4">
          <button
            className=" bg-blue-400 p-3 rounded text-white font-bold shadow "
            onClick={() => setTypeOfColor("hex")}
          >
            Create HEX
          </button>
          <button
            className=" bg-blue-400 p-3 rounded text-white font-bold shadow "
            onClick={() => setTypeOfColor("rgb")}
          >
            Create RGB
          </button>
          <button
            className=" bg-blue-400 p-3 rounded text-white font-bold shadow "
            onClick={
              typeOfColor === "hex"
                ? handleCreateHexColor
                : handleCreateRGBColor
            }
          >
            Generate Random Color
          </button>
        </div>

        <div
          style={{ backgroundColor: `${color}` }}
          className={`w-100 h-[590px] bg-blue-800 flex flex-col justify-center  items-center `}
        >
          <div className="p-4 text-3xl boder-4 ">
            {typeOfColor.toUpperCase()} Color
          </div>
          <div className="p-4 text-5xl ">{color}</div>
        </div>
      </div>
    </>
  );
}

export default RandomColor;
