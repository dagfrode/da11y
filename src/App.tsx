import React from "react";
import Control from "./Control";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    const baseFontSize = parseInt(
      getComputedStyle(document.documentElement, null)["font-size"]
    );

    this.style = document.createElement("style");
    this.style.innerHTML = `
    body {
      color: red;
    }
    .greyscale {
      filter: grayscale(1);
    }

    .elementType h1::before{
      content: '<H1>'
    }
    .elementType h2::before{
      content: '<H2>'
    }   
    .elementType h3::before{
      content: '<H3>'
    }
    .elementType h4::before{
      content: '<H4>'
    }
    .elementType h5::before{
      content: '<H5>'
    }
    .elementType h6::before{
      content: '<H6>'
    }
    .elementType a::before{
      content: '<A(Link)>'
    }
    .elementType button::before{
      content: '<Button>'
    }
    .elementType ul::before{
      content: '<UnorderedList>'
    }
    .elementType li::before{
      content: '<ListItem>'
    }
    .elementType ol::before{
      content: '<OrderedList>'
    }
    .elementType p::before{
      content: '<P>'
    }
    .elementType label::before{
      content: '<Label>'
    }
    .elementType select::before{
      display:block;
      content: '<Select>'
    }
    .elementType input::before{
      content: '<Input>'
    }
    .elementType textarea::before{
      content: '<Teatarea>'
    }
    .elementType table::before{ // works?
      content: '<Table>'
    }
    .elementType section::before{
      content: '<Section>'
    }
  `;

    this.state = {
      greyscale: false,
      controlsOpen: true,
      fontScale: 100,
      baseFontSize,
      elementType: false,
      disableStyles: false,
    };
  }

  componentDidMount() {
    document.addEventListener("wheel", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
    document.head.appendChild(this.style);
  }

  // TODO - show feedback in main window
  // fill out the rest of the checklist from the video

  handleKeyDown = (event: WheelEvent) => {
    if (!event.shiftKey) return;
    event.preventDefault();

    let scale = this.state.fontScale;
    if (event.wheelDelta > 0) {
      scale += 25;
    } else {
      scale -= 25;
    }

    this.setState({ ...this.state, fontScale: scale });

    console.log("Font scale", (this.state.baseFontSize * scale) / 100 + "px");

    document.documentElement.style.fontSize =
      (this.state.baseFontSize * scale) / 100 + "px";

    // el.innerHTML = `${scaling.toString()}%`;
    // document.body.appendChild(el);
    // timer = Date.now();
    // setTimeout(() => {
    //   if (Date.now() - timer > 800 && document.body.contains(el)) {
    //     document.body.removeChild(el);
    //   }
    // }, 1000);
  };

  toggleDisableStyles = () => {
    if (this.state.disableStyles) {
      document
        .querySelectorAll('style, link[rel="stylesheet"]')
        .forEach((e) => e.removeAttribute("disabled"));
    } else {
      document
        .querySelectorAll('style, link[rel="stylesheet"]')
        .forEach((e) => e.setAttribute("disabled", "disabled"));
    }
    this.setState({
      ...this.state,
      disableStyles: !this.state.disableStyles,
    });
  };

  toggleGreyScale = () => {
    this.toggleProperty("greyscale");
  };

  toggleElementType = () => {
    this.toggleProperty("elementType");
  };

  toggleProperty = (property: "elementType" | "greyscale") => {
    if (this.state[property]) {
      document.body.classList.remove(property);
    } else {
      document.body.classList.add(property);
    }
    this.setState({
      ...this.state,
      [property]: !this.state[property],
    });
  };

  handleKeyUp = (event: KeyboardEvent) => {
    console.log("Key pressed: ", event.key, event.ctrlKey, event.shiftKey);
    if (event.ctrlKey && event.shiftKey && event.key === "U") {
      this.setState({ ...this.state, controlsOpen: !this.state.controlsOpen });
    }
  };

  render() {
    return (
      <div>
        Press any key!
        {this.state.controlsOpen && (
          <Control
            toggleGreyScale={this.toggleGreyScale}
            toggleElementType={this.toggleElementType}
            toggleDisableStyles={this.toggleDisableStyles}
          />
        )}
      </div>
    );
  }
}

export default App;
