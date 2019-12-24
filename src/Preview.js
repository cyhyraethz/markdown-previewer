import React from "react";
import marked from "marked";

export const Preview = props => {
  return (
    <div id="preview" class="d-block jumbotron">
      {marked(props.input)}
    </div>
  );
};
