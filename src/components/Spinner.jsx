import React from "react";
import { ReactComponent as Loader } from "./bars.svg";

const Spinner = () => {
  return (
    <div className="spinner text-center" style={{ height: "20px" }}>
      <Loader />
    </div>
  );
};

export default Spinner;
