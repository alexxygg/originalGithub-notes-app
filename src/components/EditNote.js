import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultNotes from "./DefaultNotes";
import { Link, useNavigate } from "react-router-dom";

function EditNote() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  let history = useNavigate();

  let index = DefaultNotes.map(function (aNote) {
    return aNote.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = DefaultNotes[index];
    a.id = id;
    a.title = title;
    a.date = date;
    a.note = note;
    history("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setDate(localStorage.getItem("date"));
    setNote(localStorage.getItem("note"));
  }, []);

  return (
    <div className="col-10 editAndNewForm">
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Control
            type="text"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formNote">
          <Form.Control
            type="text"
            placeholder="Enter Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          className="mt-5 w-100"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Update
        </Button>
        <Link className="home" to={"/"}>
          Home
        </Link>
      </Form>
    </div>
  );
}

export default EditNote;
