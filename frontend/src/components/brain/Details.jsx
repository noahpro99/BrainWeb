import { collection, doc, getDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";

const Details = (props) => {
  const object = props.object;
  const getObjectSet = props.getObjectSet;

  function handleChildClick(childId) {
    // go to that child object from firestore
    // set the object state variable to this object

    getObjectSet(childId);
  }
  if (!object.children) {
    return <div className="flex flex-col h-full bg-gray-100 w-52"></div>;
  }
  const childrenJSX = object.children.map((child) => {
    return (
      <li key={child.id}>
        <button
          className="my-2 p-2 rounded shadow bg-gray-200 hover:bg-gray-300"
          onClick={() => handleChildClick(child.id)}
        >
          {child.name}
        </button>
      </li>
    );
  });

  console.log(object.children);
  return (
    <div className="flex flex-col h-auto bg-gray-100 w-full justify-start md:w-72">
      {/* details title */}
      <div className="text-2xl font-bold text-center p-2 my-2">
        {object.name}
      </div>
      {/* all of the children buttons rounded and shadows and hover very pretty */}
      <ul className="flex flex-col justify-start items-center my-5">
        {childrenJSX}
      </ul>

      <p className="text-sm text-gray-500 p-4 my-2 overflow-y-auto h-96 text-left break-words">
        {object.details}
      </p>
    </div>
  );
};

export default Details;
