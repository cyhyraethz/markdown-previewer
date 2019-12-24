import React from "react";
import { Editor } from "./Editor";
import { Preview } from "./Preview";

export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# Markdown Previewer"
    };
    this.handleChange = this.handleChange.bind(this);
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
              <Editor
                input={this.state.input}
                handleChange={this.handleChange}
              />
              <Preview input={this.state.input} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
