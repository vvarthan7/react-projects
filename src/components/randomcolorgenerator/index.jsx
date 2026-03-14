import { useState } from "react";

const RandomColorGenerator = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorGenerator = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateHexColor = () => {
    setColorType("hex");
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorGenerator(hex.length)];
    }
    setColor(hexColor);
  };
  const handleGenerateRGBColor = () => {
    setColorType("rgb");
    const rgb = [
      randomColorGenerator(256),
      randomColorGenerator(256),
      randomColorGenerator(256),
    ];
    setColor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
  };
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="flex gap-5 justify-center">
        <button
          onClick={handleGenerateHexColor}
          className="bg-gray-400 text-white p-2 text-left flex justify-between text-xl cursor-pointer"
        >
          Generate Hex Color
        </button>
        <button
          onClick={handleGenerateRGBColor}
          className="bg-gray-400 text-white p-2 text-left flex justify-between text-xl cursor-pointer"
        >
          Generate RGB Color
        </button>
        <button
          className="bg-gray-400 text-white p-2 text-left flex justify-between text-xl cursor-pointer"
          onClick={
            colorType === "hex"
              ? handleGenerateHexColor
              : handleGenerateRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex justify-center items-center h-[calc(100vh-100px)]">
        <h1 className="text-black text-4xl bg-gray-200 p-4 rounded-md">
          {colorType === "hex" ? `HEX Code: ${color}` : `RGB Code: ${color}`}
        </h1>
      </div>
    </section>
  );
};

export default RandomColorGenerator;
