import React from "react";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { toast } from "react-toastify";

function Note({ id, title, body, deleteNote, handleEditClicked, editId }) {
  const notifyWarning = (msg) => toast.warn(`${msg}`);
  return (
    <div className="note">
      <div className="note-data">
        <h3 className="note-title">{title}</h3>
        <div className="note-body">{body}</div>
      </div>
      <div className="note-footer">
        {editId === id ? (
          <BsTrash style={{ color: "grey" }} />
        ) : (
          <BsTrash
            onClick={() => {
              deleteNote(id);
              notifyWarning(`${title} deleted!`);
            }}
          />
        )}
        <BsPencilSquare
          onClick={() => {
            handleEditClicked(id);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
