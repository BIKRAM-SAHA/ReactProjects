import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";

function NotesGrid({
  notes,
  deleteNote,
  addNote,
  handleEditClicked,
  editId,
  updateNote,
}) {
  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <Note
            id={note.id}
            title={note.title}
            editId={editId}
            body={note.note}
            key={note.id}
            deleteNote={deleteNote}
            handleEditClicked={handleEditClicked}
          />
        );
      })}
      <NewNote
        addNote={addNote}
        editId={editId}
        noteToBeEdited={
          editId !== "" ? notes.filter((note) => editId === note.id) : ""
        }
        updateNote={updateNote}
      />
    </div>
  );
}

export default NotesGrid;
