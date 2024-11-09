import React, { useState } from "react";
import Draggable from "react-draggable";

function Notes({ notes, addNote, deleteNote }) {
  const [noteText, setNoteText] = useState("");
  const [noteHeight, setNoteHeight] = useState(100); // Default height
  const [noteColor, setNoteColor] = useState("#FFFFFF"); // Default color

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote(noteText, noteHeight, noteColor);
      setNoteText("");
      setNoteHeight(100); // Reset height to default
      setNoteColor("#FFFFFF"); // Reset color to default
    }
  };

  const colors = ["#FFFFFF", "#4a4a4a", "#555555", "#2c2c2c", "#1a1a1a"]; // Dark color options

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Your Notes</h2>
      <div>
        <input
          type="text"
          placeholder="Write a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height in pixels"
          value={noteHeight}
          onChange={(e) => setNoteHeight(parseInt(e.target.value, 10))}
          min="50"
          style={{ marginLeft: "5px", width: "100px" }}
        />
        <select
          value={noteColor}
          onChange={(e) => setNoteColor(e.target.value)}
          style={{ marginLeft: "5px", padding: "5px" }}
        >
          {colors.map((color) => (
            <option key={color} value={color} style={{ backgroundColor: color, color: "#fff" }}>
              {color}
            </option>
          ))}
        </select>
        <button onClick={handleAddNote} style={{ marginLeft: "5px" }}>Add Note</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {notes.map((note) => (
          <Draggable key={note.id}>
            <div
              style={{
                backgroundColor: note.color,
                padding: "10px",
                width: "150px",
                height: `${note.height}px`,
                boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
                position: "absolute",
                borderRadius: "5px",
                cursor: "move",
                color: "#fff",
              }}
            >
              <p>{note.text}</p>
              <button
                onClick={() => deleteNote(note.id)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "red",
                }}
              >
                &times;
              </button>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default Notes;