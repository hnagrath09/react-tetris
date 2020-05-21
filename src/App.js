import React, { useState, useMemo, useEffect } from "react";

import Display from "./components/Display";
import { randomTetrimino } from "./tetriminos";

const App = () => {
  // moveLeft, moveRight, moveDown, rotation, dropTetrimino, collision, clearRow, updateActiveCells, updateScore
  const [activeTetrimino, setActiveTetrimino] = useState({
    pos: { x: 0, y: 3 },
    tetrimino: randomTetrimino().shape,
  });
  const [nextTetrimino, setNextTetrimino] = useState({
    tetrimino: randomTetrimino().shape,
  });
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !pause &&
        activeTetrimino.pos.x + activeTetrimino.tetrimino.length - 1 < 19
      ) {
        setActiveTetrimino({
          pos: { x: activeTetrimino.pos.x + 1, y: activeTetrimino.pos.y },
          tetrimino: activeTetrimino.tetrimino,
        });
      }
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [activeTetrimino, pause]);

  const activeCells = useMemo(() => {
    // Create an empty 2D array of 20 X 10
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr[i] = [];
      for (let j = 0; j < 10; j++) {
        arr[i].push(0);
      }
    }
    // Update values with activeTetrimino shape at it's position
    // Edge Case: Handle empty rows in tetrimino shape
    const n = activeTetrimino.tetrimino.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        arr[activeTetrimino.pos.x + i][activeTetrimino.pos.y + j] =
          activeTetrimino.tetrimino[i][j];
      }
    }
    return arr;
  }, [activeTetrimino]);

  const moveLeft = () => {
    // Edge Case: Handle empty rows in shape
    if (activeTetrimino.pos.y > 0) {
      setActiveTetrimino({
        pos: { x: activeTetrimino.pos.x, y: activeTetrimino.pos.y - 1 },
        tetrimino: activeTetrimino.tetrimino,
      });
    }
    setPause(false);
  };

  const moveRight = () => {
    // Edge Case: Handle empty rows in shape
    if (activeTetrimino.pos.y + activeTetrimino.tetrimino.length - 1 < 9) {
      setActiveTetrimino({
        pos: { x: activeTetrimino.pos.x, y: activeTetrimino.pos.y + 1 },
        tetrimino: activeTetrimino.tetrimino,
      });
    }
    setPause(false);
  };

  const moveDown = () => {
    // Edge Case: Handle empty rows in shape
    if (activeTetrimino.pos.x + activeTetrimino.tetrimino.length - 1 < 19) {
      setActiveTetrimino({
        pos: { x: activeTetrimino.pos.x + 1, y: activeTetrimino.pos.y },
        tetrimino: activeTetrimino.tetrimino,
      });
    }
    setPause(false);
  };

  const handleRotation = () => {
    // Transpose of a matrix
    const flipMatrix = (matrix) =>
      matrix[0].map((column, index) => matrix.map((row) => row[index]));

    // Receive 90deg clockwise rotated matrix
    const rotateMatrix = (matrix) =>
      flipMatrix(activeTetrimino.tetrimino.reverse());

    setActiveTetrimino({ pos: activeTetrimino.pos, tetrimino: rotateMatrix() });
    setPause(false);
  };

  return (
    <div
      className="h-screen max-w-lg pt-4 pb-64 mx-auto shadow-lg"
      style={{ backgroundColor: "#efcc19", borderRadius: "20px" }}
    >
      <div className="px-16">
        <div className="mt-2">
          <div className="flex items-center justify-between -mb-4">
            <div className="-mb-4">
              <div className="w-2 h-10 -mb-10 bg-black"></div>
              <div className="w-24 h-2 ml-2 bg-black"></div>
            </div>
            <div className="flex flex-row-reverse -mb-4">
              <div className="w-2 h-10 -mb-10 bg-black"></div>
              <div className="w-24 h-2 bg-black"></div>
            </div>
          </div>
          <div className="pt-1 -mb-6 text-2xl text-center text-gray-700">
            T E T R I S
          </div>
        </div>
        <div className="px-8 mb-4 border-b-8 border-l-8 border-r-8 border-black">
          <Display activeCells={activeCells} nextTetrimino={nextTetrimino} />
        </div>
      </div>
      <div className="px-12">
        <div className="flex mb-8 -ml-4">
          <div className="flex-col">
            <div
              className="w-12 h-12 ml-2 bg-green-500 border border-black rounded-full"
              style={{ boxShadow: "inset 0 3px 6px hsla(0,0%,100%,.8)" }}
              onClick={() => {
                setPause(!pause);
              }}
            ></div>
            <span className="text-sm text-gray-700">Pause(P)</span>
          </div>
          <div className="ml-2">
            <div
              className="w-12 h-12 ml-2 bg-green-500 border border-black rounded-full"
              style={{ boxShadow: "inset 0 3px 6px hsla(0,0%,100%,.8)" }}
            ></div>
            <span className="text-sm text-gray-700">Sound(S)</span>
          </div>
          <div className="ml-2">
            <div
              className="w-12 h-12 ml-2 bg-red-700 border border-black rounded-full"
              style={{ boxShadow: "inset 0 3px 6px hsla(0,0%,100%,.8)" }}
            ></div>
            <span className="ml-1 text-sm text-gray-700">Reset(R)</span>
          </div>
        </div>
        <div className="flex ml-64 -mt-24">
          <div
            className="w-20 h-20 border border-black rounded-full"
            style={{
              backgroundColor: "#5a65f1",
              boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
            }}
            onClick={handleRotation}
          ></div>
          <span className="mt-8 ml-2 text-sm text-gray-700">Rotation</span>
        </div>
        <div className="flex items-center justify-between w-48 ml-48 ">
          <div>
            <div
              className="w-20 h-20 -ml-2 border border-black rounded-full"
              style={{
                backgroundColor: "#5a65f1",
                boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
              }}
              onClick={moveLeft}
            ></div>
            <span className="ml-6 text-sm text-gray-700">Left</span>
          </div>
          <div>
            <div
              className="w-20 h-20 -mr-12 border border-black rounded-full"
              style={{
                backgroundColor: "#5a65f1",
                boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
              }}
              onClick={moveRight}
            ></div>
            <span className="ml-6 text-sm text-gray-700">Right</span>
          </div>
        </div>
        <div className="ml-64 -mt-6">
          <div
            className="w-20 h-20 border border-black rounded-full"
            style={{
              backgroundColor: "#5a65f1",
              boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
            }}
            onClick={moveDown}
          ></div>
          <span className="ml-6 text-sm text-gray-700">Down</span>
        </div>
        <div
          className="w-32 h-32 -mt-40 border border-black rounded-full"
          style={{
            backgroundColor: "#5a65f1",
            boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
          }}
        ></div>
        <span className="ml-4 text-sm text-gray-700">Drop(SPACE)</span>
      </div>
    </div>
  );
};

export default App;
