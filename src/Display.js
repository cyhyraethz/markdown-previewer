import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# Markdown Previewer"
    };
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div id="app" class="col-6 mx-auto">
            <div class="form-group">
              <Editor />
              <Preview />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
