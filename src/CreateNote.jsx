import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Note from "./Note";
import { Input } from "@mui/material";

const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = () => {
     setNote((prevData) => {
        return {}
    });
  };

  return (
    <div className="main_note">
      <form>
        <input
          type="text"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          value={note.content}
          onChange={InputEvent}
          cols="30"
          rows="2"
          placeholder="Write a note..."
        ></textarea>
        <Button>
          <AddIcon className="plus_sign" />
        </Button>
      </form>
    </div>
  );
};

export default CreateNote;
