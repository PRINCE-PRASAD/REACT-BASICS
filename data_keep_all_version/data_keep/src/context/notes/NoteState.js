//  import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
// import { useState } from "react";
const NoteState = (props) => {
 const notesInitial= [
    {
      "_id": "62e3ab0181d3b73bb97a2f6b",
      "user": "62e0291bdb2db06630ba41c5",
      "title": "My Title",
      "description": "Here is my first desceiption",
      "tag": "Personal1",
      "date": "2022-07-29T09:40:17.663Z",
      "__v": 0
    },
    {
      "_id": "62e3ab0181d3b73bb97a2f6b1",
      "user": "62e0291bdb2db06630ba41c5",
      "title": "My Title",
      "description": "Here is my first desceiption",
      "tag": "Personal1",
      "date": "2022-07-29T09:40:17.663Z",
      "__v": 0
    },
    {
      "_id": "62e3ab0181d3b73bb97a2f6b2",
      "user": "62e0291bdb2db06630ba41c5",
      "title": "My Title",
      "description": "Here is my first desceiption",
      "tag": "Personal1",
      "date": "2022-07-29T09:40:17.663Z",
      "__v": 0
    },
    {
      "_id": "62e3ab0181d3b73bb97a2f6b3",
      "user": "62e0291bdb2db06630ba41c5",
      "title": "My Title",
      "description": "Here is my first desceiption",
      "tag": "Personal1",
      "date": "2022-07-29T09:40:17.663Z",
      "__v": 0
    },
    {
      "_id": "62e3ab0181d3b73bb97a2f6b4",
      "user": "62e0291bdb2db06630ba41c5",
      "title": "My Title",
      "description": "Here is my first desceiption",
      "tag": "Personal1",
      "date": "2022-07-29T09:40:17.663Z",
      "__v": 0
    }
  ]
const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
