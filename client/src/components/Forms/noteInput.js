import React from "react";

const NoteInput = props => (
  <textarea className="form-control sticky-note-textarea" {...props} row="6"/>
);

export default NoteInput;