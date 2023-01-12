import React from "react";
import Directory from "./Directory";

const Display = (props) => {
  // takes up available width and has an image of a brain in the center of this display
  // div will be full available width and height

  const object = props.object;

  return (
    <div className="flex flex-col h-full w-full">
      <Directory
        directory={props.directory}
        getObjectSet={props.getObjectSet}
      />
      {/* display title */}
      <div className="flex flex-row items-center h-16 bg-gray-200">
        <div className="flex flex-row items-center ml-4">{object.name}</div>
        {/* display the object.imageUrl */}
      </div>
      <div className="h-full w-full bg-gray-200">
        <img className="w-full" src={object.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Display;
