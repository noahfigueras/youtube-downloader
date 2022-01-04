function handleResponse(message) {
	console.log(message);
};

function handleError(error) {
    console.log(`Error: ${error}`);
};

function download () {
  let sending = browser.runtime.sendMessage({
    obj: "audio"
  });
  sending.then(handleResponse, handleError);
};

document.getElementById('download').addEventListener("click", download);
