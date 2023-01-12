import React from "react";

const Directory = (props) => {
  // for each {id:"xyroRpIwWfXYduFJOEEQ", name:"Brain"} in directory
  // display a div with the name of the object and a right arrow icon

  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  const dirIcons = props.directory.map((dir) => {
    return (
      <li key={dir.id}>
        <button
          className="flex flex-row items-center"
          onClick={() => props.getObjectSet(dir.id)}
        >
          <div className="text-xl font-bold">{dir.name}</div>
          <div className="ml-2">{rightArrow}</div>
        </button>
      </li>
    );
  });

  return (
    <div className="justify-start w-full overflow-x-scroll">
      <ul className="flex flex-row items-center">{dirIcons}</ul>
    </div>
  );
};

export default Directory;