import React from "react";
import Directory from "./Directory";

const Display = (props) => {
  // takes up available width and has an image of a brain in the center of this display
  // div will be full available width and height

  const object = props.object;

  return (
    <div className="flex flex-col grow">
      <Directory
        directory={props.directory}
        getObjectSet={props.getObjectSet}
        setDirectory={props.setDirectory}
      />
      {/* display title */}
      <div className="flex flex-row justify-center items-center h-16 bg-gray-200 text-2xl font-bold">
        <div className="flex flex-row ml-4">{object.name}</div>
        {/* display the object.imageUrl */}
      </div>
      <div className="h-full mx-auto">
        <img className="" src={object.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Display;
