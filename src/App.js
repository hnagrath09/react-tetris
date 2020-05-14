import React from "react";

const App = () => {
  const renderCells = () => {
    const arr = [];
    let h = 0;
    for (let i = 0; i < 20; i++) {
      arr[i] = [];
      for (let j = 0; j < 10; j++) {
        arr[i].push(h);
        h++;
      }
    }
    return arr;
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
          <div
            className="w-full p-2 mx-auto mt-8 mb-8 border border-gray-700 shadow-inner"
            style={{ height: "390px", backgroundColor: "#9ead86" }}
          >
            <div className="w-2/3 h-full p-1 border-2 border-black">
              {renderCells().map((row) => (
                <div className="flex">
                  {row.map((x) => (
                    <div
                      className="border border-black opacity-25"
                      style={{ padding: "2px", margin: "0 2px 2px 0" }}
                    >
                      <div
                        key={x}
                        className="bg-black"
                        style={{
                          width: "10px",
                          height: "10px",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-12">
        <div className="flex mb-8 -ml-4">
          <div className="flex-col">
            <div
              className="w-12 h-12 ml-2 bg-green-500 border border-black rounded-full"
              style={{ boxShadow: "inset 0 3px 6px hsla(0,0%,100%,.8)" }}
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
