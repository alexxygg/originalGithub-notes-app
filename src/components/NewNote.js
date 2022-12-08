import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultNotes from "./DefaultNotes";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    //To only keep 8 digits, too long...
    let uniqueId = ids.slice(0, 8);

    let a = title,
      b = date,
      c = note;
    DefaultNotes.unshift({ id: uniqueId, title: a, date: b, note: c });

    history("/");
  };
  return (
    <div className="editAndNewForm">
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control
            required
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Control
            type="text"
            placeholder="Enter Date"
            required
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNote">
          <Form.Control
            type="text"
            placeholder="Enter Note"
            required
            onChange={(e) => setNote(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          className="mt-5 w-100"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Submit
        </Button>
        <Link className="home" to={"/"}>
          Home
        </Link>
      </Form>
    </div>
  );
}

export default Add;
