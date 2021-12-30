let div = document.createElement("div");
div.innerHTML = "<button>Download</button>";

function handleResponse(message) {
	console.log(message);
};

function handleError(error) {
    console.log(`Error: ${error}`);
};

function download (e) {
  let sending = browser.runtime.sendMessage({
    obj: "hi"
  });
  sending.then(handleResponse, handleError);
};
div.addEventListener("click", download);
document.getElementById("top-level-buttons-computed").appendChild(div);
