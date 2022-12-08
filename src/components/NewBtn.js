import { Link } from "react-router-dom";
import React from "react";

function NewBtn() {
  return (
    <Link to="/new">
      <button className="new">New +</button>
    </Link>
  );
}

export default NewBtn;
