import React from "react";

function App() {
  return (
    <div
      className="max-w-xl mx-auto h-screen rounded-lg shadow-lg px-32 pt-4 pb-64"
      style={{ backgroundColor: "#efcc19" }}
    >
      <div className="text-center text-2xl text-gray-700 mb-4">T E T R I S</div>
      <div
        className="w-full mx-auto mb-8 shadow-inner border border-gray-700"
        style={{ height: "400px", backgroundColor: "#9ead86" }}
      ></div>
      <div className="flex -ml-8 mb-8">
        <div className="flex-col">
          <div
            className="rounded-full w-10 h-10 border border-black ml-2 bg-green-500"
            style={{ boxShadow: "inset 0 3px 6px hsla(0,0%,100%,.8)" }}
          ></div>
          <span className="text-gray-700 text-sm">Pause(P)</span>
        </div>
        <div className="ml-2">
          <div
            className="rounded-full w-10 h-10 ml-2 border border-black bg-green-500"
            style={{ boxShadow: "inset 0 3px 6px hsla(0,0%,100%,.8)" }}
          ></div>
          <span className="text-gray-700 text-sm">Sound(S)</span>
        </div>
        <div className="ml-2">
          <div
            className="rounded-full w-10 h-10 ml-2 border border-black bg-red-700"
            style={{ boxShadow: "inset 0 3px 6px hsla(0,0%,100%,.8)" }}
          ></div>
          <span className="text-gray-700 text-sm ml-1">Reset(R)</span>
        </div>
      </div>
      <div
        className="w-20 h-20 rounded-full border border-black ml-56 -mt-16"
        style={{
          backgroundColor: "#5a65f1",
          boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
        }}
      ></div>
      <div className="flex items-center justify-between w-56 ml-40 -mt-4 pr-4 ">
        <div
          className="w-20 h-20 rounded-full border border-black"
          style={{
            backgroundColor: "#5a65f1",
            boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
          }}
        ></div>
        <div
          className="w-20 h-20 rounded-full border border-black"
          style={{
            backgroundColor: "#5a65f1",
            boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
          }}
        ></div>
      </div>
      <div
        className="w-20 h-20 rounded-full ml-56 -mt-4 border border-black"
        style={{
          backgroundColor: "#5a65f1",
          boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
        }}
      ></div>
      <div
        className="w-32 h-32 rounded-full -mt-40 -ml-8 border border-black"
        style={{
          backgroundColor: "#5a65f1",
          boxShadow: "inset 0 5px 10px hsla(0,0%,100%,.8)",
        }}
      ></div>
      <span className="text-gray-700 text-sm -ml-2">Drop(SPACE)</span>
    </div>
  );
}

export default App;
