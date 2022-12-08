import React, { useState } from "react";

// npm install react-bootstrap bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultNotes from "./DefaultNotes";

import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, title, date, note) => {
    localStorage.setItem("title", title);
    localStorage.setItem("date", date);
    localStorage.setItem("id", id);
    localStorage.setItem("note", note);
  };

  const handleDelete = (id) => {
    let index = DefaultNotes.map(function (each) {
      return each.id;
    }).indexOf(id);

    DefaultNotes.splice(index, 1);

    history("/");
  };

  return (
    <>
     
            {DefaultNotes && DefaultNotes.length > 0
              ? DefaultNotes.map((note) => {
                  return (<div id="actions">
                        <Link className="button" to={"/edit"}>
                          <button
                            className="edit"
                            onMouseEnter={greenBackground1}
                            onMouseLeave={greenBackground2}
                            onClick={() =>
                              handleEdit(
                                note.id,
                                note.title,
                                note.date,
                                note.note
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          className="delete"
                          onMouseEnter={redBackground1}
                          onMouseLeave={redBackground2}
                          onClick={() => handleDelete(note.id)}
                        >
                          Delete
                        </button>
                      </div>
                   
                  )})}
                        
    </>
  );
}

export default Home;
