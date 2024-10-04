import React from "react";
import Control from "./Control";
import { TestOverview } from "./Test";

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

class App extends React.Component {
  constructor(props: any) {
    super(props);
    const baseFontSize = parseInt(
      getComputedStyle(document.documentElement, null)["font-size"]
    );

    this.style = document.createElement("style");
    this.style.innerHTML = `

    .blur25{
      filter:blur(1px);
    }

    .blur30{
      filter:blur(3px);
    }

    .blur40{
      filter:blur(6px);
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
      blur: "",
      dysletic: true,
      dysleticInitiated: false,
    };
  }

  componentDidMount() {
    document.addEventListener("wheel", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
    document.head.appendChild(this.style);

    // this.simulateDyslexia();

    console.log("mount");
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

  initiateSimulateDyslexia = () => {
    const texts = document.querySelectorAll(
      "a, h1, h2, h3, h4, h5, h6, p, button, label, li"
    );
    this.setState({ ...this.state, dysleticInitiated: true });

    console.log("init");
    texts.forEach((n) => {
      n.setAttribute("data-text", n.innerText);
    });
  };

  resetSimulateDyslexia = () => {
    const texts = document.querySelectorAll(
      "a, h1, h2, h3, h4, h5, h6, p, button, label, li"
    );
    texts.forEach((n) => {
      n.innerText = n.getAttribute("data-text");
    });
  };

  simulateDyslexia = () => {
    if (!this.state.dysleticInitiated) {
      this.initiateSimulateDyslexia();
      setTimeout(this.simulateDyslexia, 2000);
      return;
    }
    const texts = document.querySelectorAll(
      "a, h1, h2, h3, h4, h5, h6, p, button, label, li"
    );

    texts.forEach((n) => {
      let text = n.getAttribute("data-text");

      if (text?.trim()) {
        let letter1pos, letter2pos, letter1, letter2;
        do {
          letter1pos = Math.floor(text.length * Math.random());
          letter2pos = Math.floor(text.length * Math.random());
          letter1 = text.charAt(letter1pos);
          letter2 = text.charAt(letter2pos);
          console.log(letter1, letter2);
        } while (letter1 === " " || letter2 === " ");
        text = text.replaceAt(letter1pos, letter2);
        text = text.replaceAt(letter2pos, letter1);
      }
      n.innerText = text;
    });

    if (this.state.dysletic) {
      setTimeout(this.simulateDyslexia, 400);
    } else {
      resetSimulateDyslexia();
    }
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

  toggleBlur = () => {
    if (this.state.blur) {
      document.body.classList.remove(this.state.blur);
    }
    switch (this.state.blur) {
      case "":
        this.setState({ ...this.state, blur: "blur25" });
        document.body.classList.add("blur25");
        break;
      case "blur25":
        this.setState({ ...this.state, blur: "blur30" });
        document.body.classList.add("blur30");
        break;
      case "blur30":
        this.setState({ ...this.state, blur: "blur40" });
        document.body.classList.add("blur40");
        break;
      case "blur40":
        this.setState({ ...this.state, blur: "" });
        break;
    }
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
        {/* {this.state.controlsOpen && ( */}
        <TestOverview />
        <Control
          toggleGreyScale={this.toggleGreyScale}
          toggleElementType={this.toggleElementType}
          toggleDisableStyles={this.toggleDisableStyles}
          toggleBlur={this.toggleBlur}
        />
        {/* // )} */}
      </div>
    );
  }
}

export default App;
