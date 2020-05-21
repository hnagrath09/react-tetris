import React, { useState, useEffect } from "react";
import moment from "moment";

import Cell from "./Cell";

const Display = ({ activeCells, nextTetrimino }) => {
  const [time, setTime] = useState(moment().format("hh:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm:ss"));
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const renderCells = (height, width) => {
    const arr = [];
    for (let i = 0; i < height; i++) {
      arr[i] = [];
      for (let j = 0; j < width; j++) {
        arr[i].push({ x: i, y: j });
      }
    }
    return arr;
  };

  return (
    <div
      className="flex w-full p-2 mx-auto mt-8 mb-8 border border-gray-700 shadow-inner"
      style={{ height: "390px", backgroundColor: "#9ead86" }}
    >
      <div className="w-2/3 h-full p-1 border-2 border-black">
        {renderCells(20, 10).map((row) => (
          <div className="flex" key={row[0].x}>
            {row.map((cell) => {
              return (
                <Cell
                  key={cell.x * 10 + cell.y}
                  active={activeCells[cell.x][cell.y]}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="w-1/3 h-full p-2">
        <div className="my-4">
          <label>Next</label>
          {renderCells(2, 4).map((row) => (
            <div className="flex" key={row[0].x}>
              {row.map((cell) => (
                <Cell
                  key={cell.x * 10 + cell.y}
                  active={nextTetrimino.tetrimino[cell.x][cell.y]}
                />
              ))}
            </div>
          ))}
        </div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default Display;
