import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <div
        style={{ width: "100%", height: "100%", backgroundColor: "lightGreen" }}
      >
        Error, Page not found :c
      </div>
      <Link to={"/"}>Home</Link>{" "}
    </>
  );
}

export default Error404;
