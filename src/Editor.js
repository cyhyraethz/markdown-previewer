import React from "react";

export const Editor = props => {
  return (
    <textarea
      id="editor"
      class="d-block form-control"
      rows="5"
      onChange={props.handleChange}
    >
      {props.input}
    </textarea>
  );
};
