import { useEffect, useState } from "react";

export const Color = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#FFFFFF");

  const colorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[colorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = colorUtility(256);
    const g = colorUtility(256);
    const b = colorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <h1>Color Picker</h1>
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "hex" ? "Hex Color" : "RGb Color"}</h3>
        <button onClick={() => navigator.clipboard.writeText(color)}>
          Copy To Clipboard
        </button>
        <h1>{color}</h1>
      </div>
    </div>
  );
};
