import React from "react";
import { createPortal } from "react-dom";
import { CheckList } from "./CheckList";

class Control extends React.Component {
  constructor(props: any) {
    super(props);
    // STEP 1: create a container <div>
    this.containerEl = document.createElement("div");
    this.containerEl.id = "test";
    this.externalWindow = null;
  }

  componentDidMount() {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open("", "", "width=1024,height=700");

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl);
  }

  render() {
    return createPortal(
      <>
        <CheckList />
        <button onClick={this.props.toggleGreyScale}>greyscale</button>
        <button onClick={this.props.toggleElementType}>elementType</button>
        <button onClick={this.props.toggleDisableStyles}>disableStyles</button>
      </>,
      this.containerEl
    );
  }

  componentWillUnmount() {
    // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by closing the window
    this.externalWindow.close();
  }
}

export default Control;
