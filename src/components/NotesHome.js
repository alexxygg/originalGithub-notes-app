import React, { useEffect } from "react";

// npm install react-bootstrap bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultNotes from "./DefaultNotes";

import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import NewBtn from "./NewBtn";
import Footer from "./Footer";
function Home() {
  let history = useNavigate();

  const handleEdit = (id, title, date, note) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("date", date);
    localStorage.setItem("note", note);
  };

  const handleDelete = (id) => {
    let index = DefaultNotes.map(function (each) {
      return each.id;
    }).indexOf(id);

    DefaultNotes.splice(index, 1);
    history("/");
  };

  //For dynamic onhover

  const redBackground1 = (e) => {
    let parent = e.target.parentNode;
    let grandparent = parent.parentNode;
    grandparent.classList.toggle("redDivBg");
    e.target.innerText = "Delete?";
    let current = document.querySelector(".current");
    let prevSiblings = current.previousElementSibling;
    prevSiblings.classList.toggle("redDivBg");
  };
  const redBackground2 = (e) => {
    let parent = e.target.parentNode;
    let grandparent = parent.parentNode;
    grandparent.classList.toggle("redDivBg");
    e.target.innerText = "Delete";
  };

  const yellowBackground1 = (e) => {
    let parent = e.target.parentNode;
    let grandparent = parent.parentNode;
    let grandparent2 = grandparent.parentNode;
    grandparent2.classList.toggle("yellowDivBg");
    e.target.innerText = "Edit?";
  };
  const yellowBackground2 = (e) => {
    let parent = e.target.parentNode;
    let grandparent = parent.parentNode;
    let grandparent2 = grandparent.parentNode;
    grandparent2.classList.toggle("yellowDivBg");
    e.target.innerText = "Edit";
  };

  const copy1 = (e) => {
    let parent = e.target.parentNode;
    let grandparent = parent.parentNode;
    grandparent.classList.toggle("greenDivBg");
    e.target.innerText = "Copy?";
  };
  const copy2 = (e) => {
    let parent = e.target.parentNode;
    let grandparent = parent.parentNode;
    grandparent.classList.toggle("greenDivBg");
    e.target.innerText = "Copy";
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "m") {
        alert("You pressed m");
      }
    });
  });

  function showAlert(id) {
    var sb = document.getElementById(id);

    //this is where the class name will be added & removed to activate the css
    sb.className = "show";

    setTimeout(() => {
      sb.className = sb.className.replace("show", "");
    }, 3000);
  }

  let dt = new Date();
  let dt2 =
    ("0" + (dt.getMonth() + 1)).slice(-2) +
    "." +
    ("0" + dt.getDate()).slice(-2) +
    "." +
    +dt.getFullYear() +
    " " +
    "at " +
    ("0" + dt.getHours()).slice(-2) +
    ":" +
    ("0" + dt.getMinutes()).slice(-2) +
    ".";

  const blank = () => {
    return "-------";
  };
  return (
    <>
      <NewBtn />
      <span id="editConformation">Note Saved</span>
      <span id="copiedButton">Note Copied Successfully</span>
      <span id="deleteConfirmation">Note Deleted Successfully</span>
      <div className="all">
        <div className="backgroundDiv">
          <h1 className="text-center gradientText">Notes++</h1>
        </div>
        {DefaultNotes && DefaultNotes.length > 0
          ? DefaultNotes.map((note) => {
              return (
                <div className="noteRow" id={uuid()}>
                  <div className=" idDIv">
                    <span className="headerTitle">ID:</span>
                    {note.id}
                  </div>
                  <div className="dateDiv">
                    <span className="headerTitle">Date:</span>
                    {note.date || "Created on " + dt2}
                  </div>
                  <div className="titleDiv">
                    <span className="headerTitle" id="titleTitle">
                      Title:
                    </span>
                    {note.title || blank()}
                  </div>

                  <div className="noteDiv">
                    <span className="headerTitle">Note:</span>
                    {note.note || blank()}
                  </div>
                  <div id="actionsDiv">
                    <Link to={"/edit"} className="button">
                      <button
                        onClick={() => {
                          handleEdit(note.id, note.title, note.date, note.note);
                        }}
                        onMouseEnter={yellowBackground1}
                        onMouseLeave={yellowBackground2}
                        id="edit"
                        className="edit"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      id="copyButton"
                      className="copyButton"
                      onMouseEnter={copy1}
                      onMouseLeave={copy2}
                      onClick={() => {
                        navigator.clipboard.writeText(note.note);
                        showAlert("copiedButton");
                      }}
                    >
                      Copy
                    </button>
                    <button
                      id="delete"
                      className="delete"
                      onMouseEnter={redBackground1}
                      onMouseLeave={redBackground2}
                      onClick={() => {
                        if (window.confirm("Delete note permanently?")) {
                          handleDelete(note.id);
                          showAlert("deleteConfirmation");
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          : "No data available."}{" "}
      </div>{" "}
      <Footer />
    </>
  );
}

export default Home;
