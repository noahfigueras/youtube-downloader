// Listen to requests
let arr = [];

function listener(details) {
  let url = details.url;
  let id = details.originUrl;
  if(url.includes("mime=audio%2Fwebm")){
		console.log("himin")
		browser.tabs.executeScript(2, {file: "content-script.js"})
		.then(console.log("executed"))
		.catch(console.log("error"));
		console.log("himax")
    url = url.split("&range=")[0];
    if(!arr.includes(url)){
      arr.push(url);
    }
  }
};

function handleMessage(request, sender, sendResponse) {
	console.log("Window Object:", request.obj);
	if(arr.length > 0) {
		browser.downloads.download({url: arr[0]});
  	sendResponse({response: "Download Started"});
	}
  sendResponse({response: "Failed Download please reload page"});
}

// Listen on Download Button from injected script
browser.runtime.onMessage.addListener(handleMessage);

// Listen to Youtube Video Url Links
browser.webRequest.onSendHeaders.addListener(
  listener,
  {
    urls: ["https://*.googlevideo.com/videoplayback?expire=*"],
  },["requestHeaders"]);

console.log("background script");
