import React from "react";

import Header from "../components/brain/Header";
import Filters from "../components/brain/Filters";
import Display from "../components/brain/Display";
import Details from "../components/brain/Details";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const Brain = () => {
  const [object, setObject] = React.useState({});
  const [filters, setFilters] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [directory, setDirectory] = React.useState([]);

  const getObjectSet = async (id) => {
    const docRef = doc(collection(db, "objects"), id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setObject(docSnap.data());
      console.log("Document data:", docSnap.data());
      setDirectory((directory) => [
        ...directory,
        { id: docSnap.id, name: docSnap.data().name },
      ]);
    } else {
      setError("No such document!");
    }
  };

  // load up the brain object document from the objects collection from firestore first time
  // it's id is xyroRpIwWfXYduFJOEEQ use this id to get the document
  // then set the object state variable to this object
  React.useEffect(() => {
    // load up the brain object document from the objects collection from firestore first time
    getObjectSet("xyroRpIwWfXYduFJOEEQ");
    console.log("useEffect");
  }, []);

  return (
    <div className="min-h-screen flex flex-col max-w-screen">
      <Header />
      {/* flex row takes up the rest of the screen */}
      <div className="flex flex-col md:flex-row">
        <Filters object={object} setFilters={setFilters} />
        <Display
          object={object}
          filters={filters}
          getObjectSet={getObjectSet}
          directory={directory}
          setDirectory={setDirectory}
        />
        <Details object={object} getObjectSet={getObjectSet} />
      </div>
    </div>
  );
};

export default Brain;
