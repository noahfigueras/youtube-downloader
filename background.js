let div = document.createElement('div');

div.innerHTML = "<button>Download</button>";
// better to use CSS though - just set class
// div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css

//div.addEventListener("click", function(e) {console.log("hello world")});
document.getElementById("top-level-buttons-computed").appendChild(div);
