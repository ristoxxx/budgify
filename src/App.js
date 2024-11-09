import React, { useState } from "react";
import Login from "./Login";
import Notes from "./Notes";
import InstructionsPanel from "./InstructionsPanel";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [notes, setNotes] = useState([]);

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setNotes([]);
  };

  const addNote = (text, height) => {
    const newNote = { id: Date.now(), text, height, x: 0, y: 0 };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNotePosition = (id, x, y) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, x, y } : note))
    );
  };

  return (
    <div style={{ display: "flex" }}>
      
      <div style={{ marginLeft: "20vw", padding: "20px", width: "80vw", textAlign: "center" }}>
        {isAuthenticated ? (
          <>
            <h1>Welcome, {username}!</h1>
            <InstructionsPanel />
            <button onClick={handleLogout}>Logout</button>
            <Notes
              notes={notes}
              addNote={addNote}
              deleteNote={deleteNote}
              updateNotePosition={updateNotePosition}
            />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default App;
