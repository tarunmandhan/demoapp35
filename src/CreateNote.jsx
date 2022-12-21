import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.value;

    const { name, value } = event.target; //object destructuring

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({ title: "", content: "" });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const minimizeIt = () => {
    setExpand(false);
  };

  return (
    <div className="main_note">
      <form>
        {expand ? (
          <input
            name="title"
            value={note.title}
            onChange={InputEvent}
            type="text"
            placeholder="Title"
            autoComplete="off"
            onDoubleClick={minimizeIt}
          />
        ) : null}

        <textarea
          name="content"
          value={note.content}
          onChange={InputEvent}
          cols="30"
          rows="2"
          placeholder="Write a note..."
          onClick={expandIt}
          onDoubleClick={minimizeIt}
        ></textarea>

        {expand ? (
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
