import "./App.css";
import NotesGrid from "./components/NotesGrid";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconContext } from "react-icons";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [notesList, setNotesList] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [editId, setEditId] = useState("");

  const searchText = (text) => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(text.toLowerCase()) ||
        note.note.toLowerCase().includes(text.toLowerCase())
    );
    setNotesList(notes);
    setEditId("");
  };
  const addItem = (title, note) => {
    let notes = notesList;
    notes = [
      ...notes,
      {
        id: v4(),
        title: title,
        note: note,
      },
    ];
    localStorage.setItem("notes", JSON.stringify(notes));
    setNotesList(notes);
  };
  const deleteItem = (deleteId) => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter((note) => {
      return note.id !== deleteId;
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    setNotesList(notes);
  };
  const handleEditClicked = (id) => {
    setEditId(id);
  };
  const updateNote = (id, title, note) => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((element) => {
      if (element.id === id) {
        element.title = title;
        element.note = note;
      }
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    setNotesList([...notes]);
    setEditId("");
  };

  return (
    <IconContext.Provider value={{ color: "white", size: "20px" }}>
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ width: "18rem", top:"0.5em", right:"0.5em", left:"auto" }}
        />
        <SearchBar searchText={searchText} />
        <NotesGrid
          notes={notesList}
          deleteNote={deleteItem}
          addNote={addItem}
          handleEditClicked={handleEditClicked}
          editId={editId}
          updateNote={updateNote}
        />
      </div>
    </IconContext.Provider>
  );
}

export default App;
