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
    return <div className="flex flex-col h-full bg-gray-100 w-96"></div>;
  }
  const childrenJSX = object.children.map((child) => {
    return (
      <li key={child.id}>
        <button
          className="m-2 p-2 rounded shadow hover:bg-gray-200"
          onClick={() => handleChildClick(child.id)}
        >
          {child.name}
        </button>
      </li>
    );
  });

  console.log(object.children);
  return (
    <div className="flex flex-col h-full bg-gray-100 max-w-96 w-96">
      {/* details title */}
      <div className="text-2xl font-bold text-center p-2 my-2">
        {object.name}
      </div>
      {/* all of the children buttons rounded and shadows and hover very pretty */}
      <ul>{childrenJSX}</ul>
    </div>
  );
};

export default Details;
