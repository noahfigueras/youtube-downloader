// Listen to requests
let audio;

function listener(details) {
  let url = details.url;
  let id = details.originUrl;
  if(url.includes("mime=audio%2Fwebm")){
    url = url.split("&range=")[0];
    if(audio !== url){
      audio = url;
      console.log(audio);
    }
  }
};

function handleMessage(request, sender, sendResponse) {
	if(request.obj === 'audio'){
		browser.downloads.download({url: audio, filename: 'download.webm'});
		return sendResponse({response: "Download Started"});
	}
  return sendResponse({response: "Failed Download please reload page"});
}

// Listen on Download Button from injected script
browser.runtime.onMessage.addListener(handleMessage);

// Listen to Youtube Video Url Links
browser.webRequest.onSendHeaders.addListener(
  listener,
  {
    urls: ["https://*.googlevideo.com/videoplayback?expire=*"],
  },["requestHeaders"]);

