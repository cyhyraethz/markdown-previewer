import React from "react";

const Editor = () => {
  <textarea
    id="editor"
    class="d-block form-control"
    rows="5"
    onChange={this.handleChange.bind(this)}
  >
    {this.state.input}
  </textarea>;
};
