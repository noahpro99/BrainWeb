import React from "react";

const Filters = () => {
  // vertical menu which has the height of the screen and contains the filters
  return (
    <div className="flex flex-col h-full bg-slate-600 w-52">
      {/* filter title */}
      <div className="flex flex-row items-center ml-4 text-center py-4 px-8">
        Filters
      </div>
      {/* filter content */}
      {/* each will be a rounded drop down button */}
      <div className="flex flex-col h-full bg-slate-400 items-center text-center text-white">
        <div className="my-2 rounded-full bg-gray-700 px-5 py-3">Filter 1</div>
        <div className="my-2 rounded-full bg-gray-700 px-5 py-3">Filter 2</div>
        <div className="my-2 rounded-full bg-gray-700 px-5 py-3">Filter 3</div>
      </div>
    </div>
  );
};

export default Filters;
