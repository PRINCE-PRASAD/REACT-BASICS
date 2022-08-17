//  import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
// import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all nodes
  const getNotes = async () => {
    // for api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMDI5MWJkYjJkYjA2NjMwYmE0MWM1In0sImlhdCI6MTY1ODk0NjU5OH0.nISdKzoQYNOJ2D-JGJWUnKj4Mmi_-bEXdyuC08ngDxw",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Delete a note
  const deleteNote = (id) => {
    console.log("node is deleted eith id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    // for api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMDI5MWJkYjJkYjA2NjMwYmE0MWM1In0sImlhdCI6MTY1ODk0NjU5OH0.nISdKzoQYNOJ2D-JGJWUnKj4Mmi_-bEXdyuC08ngDxw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // logic to edit the client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
