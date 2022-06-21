chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.name == "message") {
      // log info to console for testing purposes
    console.log("message received");
    sendResponse({text: "Awaiting reposnse...."});
  }
});