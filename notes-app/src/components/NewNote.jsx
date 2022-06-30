import React, { useRef } from "react";
import { BsPlusCircle, BsJournalCheck } from "react-icons/bs";
import { toast } from "react-toastify";

function NewNote({ editId = "", noteToBeEdited, addNote, updateNote }) {
  const notifyError = (msg) => toast.error(`${msg}!`);
  const notifySuccess = (msg) => toast.success(`${msg}`);
  const titleRef = useRef();
  const bodyRef = useRef();
  if (titleRef.current && bodyRef.current) {
    titleRef.current.value = "";
    bodyRef.current.value = "";
  }
  if (editId !== "") {
    titleRef.current.value = noteToBeEdited[0].title;
    bodyRef.current.value = noteToBeEdited[0].note;
  }
  const handleAddClick = () => {
    if (titleRef.current.value.length < 1) {
      notifyError("Title cannot be empty");
    } else if (bodyRef.current.value.length < 1) {
      notifyError("Note cannot be empty");
    } else {
      addNote(titleRef.current.value, bodyRef.current.value);
      titleRef.current.value = "";
      bodyRef.current.value = "";
      notifySuccess("Note added successfully");
    }
  };
  const handleUpdateClick = () => {
    if (titleRef.current.value.length < 1) {
      notifyError("Title cannot be empty");
    } else if (bodyRef.current.value.length < 1) {
      notifyError("Note cannot be empty");
    } else {
      updateNote(editId, titleRef.current.value, bodyRef.current.value);
      titleRef.current.value = "";
      bodyRef.current.value = "";
      notifySuccess("Note updated successfully");
    }
  };
  return (
    <div className="note newNote">
      <div className="note-data">
        <input
          className="note-title"
          placeholder="Add Title"
          ref={titleRef}
        ></input>
        <textarea
          className="note-body"
          placeholder="Add Note"
          ref={bodyRef}
        ></textarea>
      </div>
      <div className="note-footer">
        {editId === "" ? (
          <BsPlusCircle onClick={handleAddClick} />
        ) : (
          <BsJournalCheck onClick={handleUpdateClick} />
        )}
      </div>
    </div>
  );
}

export default NewNote;
