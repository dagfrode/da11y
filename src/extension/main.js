const toggleGreyScale = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "toggleGreyScale" });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("toggleGreyScale")
    .addEventListener("click", toggleGreyScale);
});
