chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  await chrome.sidePanel.setOptions({
    tabId,
    path: "sidepanel.html",
    enabled: true,
  });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "toggleGreyScale") {
    toggleGreyScale();
  }
});

const state = {};

console.log("derp");

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
  console.log("does this work?");
  toggleProperty("greyscale");
};

window.onload = () => {
  const style = document.createElement("style");
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
  document.head.appendChild(this.style);
};
