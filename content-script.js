function handleResponse(message) {
	console.log(message);
};

function handleError(error) {
    console.log(`Error: ${error}`);
};

function download (e) {
  let sending = browser.runtime.sendMessage({
    obj: "audio"
  });
  sending.then(handleResponse, handleError);
};

document.getElementById('audio').addEventListener("click", download);
console.log("Fuck you");
