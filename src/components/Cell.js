import React from "react";

const Cell = () => {
  return (
    <div
      className="border border-black opacity-25"
      style={{ padding: "2px", margin: "0 2px 2px 0" }}
    >
      <div
        className="bg-black"
        style={{
          width: "10px",
          height: "10px",
        }}
      ></div>
    </div>
  );
};

export default Cell;
