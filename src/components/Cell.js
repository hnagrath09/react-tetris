import React from "react";
import clsx from "clsx";

const Cell = ({ active }) => {
  return (
    <div
      className={clsx("border border-black", active ? "" : "opacity-25")}
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
