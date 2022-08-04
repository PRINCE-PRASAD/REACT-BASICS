//  import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const s1 = {
    name: " gupta",
    class: " df",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: " prasad",
        class: " 10n",
      });
    }, 5000);
  };

  return (
    <NoteContext.Provider value={{ state: state, update: update }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
