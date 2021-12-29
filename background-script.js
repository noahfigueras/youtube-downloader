// Listen to requests
let arr = [];

function listener(details) {
  let url = details.url;
  let id = details.originUrl;
  if(url.includes("mime=audio%2Fwebm")){
    url = url.split("&range=")[0];
    if(!arr.includes(url)){
      arr.push(url);
      browser.downloads.download({url: url});
    }
  }
};

browser.webRequest.onSendHeaders.addListener(
  listener,
  {
    urls: ["https://*.googlevideo.com/videoplayback?expire=*"],
  },["requestHeaders"]);
