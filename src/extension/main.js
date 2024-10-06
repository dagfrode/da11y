const sendMessage = (message) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: message });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("toggleGreyScale")
    .addEventListener("click", () => sendMessage("toggleGreyScale"));
});
