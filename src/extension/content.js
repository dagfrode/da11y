chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "toggleGreyScale") {
    toggleGreyScale();
  }
});

const baseFontSize = parseInt(
  getComputedStyle(document.documentElement, null)["font-size"]
);

const state = {
  greyscale: false,
  controlsOpen: false,
  fontScale: 100,
  baseFontSize,
  elementType: false,
  disableStyles: false,
  blur: "",
  dysletic: true,
  dysleticInitiated: false,
};

const toggleProperty = (property) => {
  console.log("test", document.body);
  if (state[property]) {
    document.body.classList.remove(property);
  } else {
    document.body.classList.add(property);
  }
  state[property] = !state[property];
};

const toggleGreyScale = () => {
  toggleProperty("greyscale");
};

const style = document.createElement("style");
style.id = "derp";
style.innerHTML = `


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

document.head.appendChild(style);

document.addEventListener("wheel", this.handleKeyDown);
document.addEventListener("keyup", this.handleKeyUp);
