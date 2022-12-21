import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = () => {
  return (
    <>
      <div className="note">
        <h1> tittle </h1>
        <br />
        <p>hello world</p>
        <button className="btn">
          <DeleteIcon className="deleteIcon" />
        </button>
      </div>
    </>
  );
};

export default Note;
