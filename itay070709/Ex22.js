var div = document.getElementById("aElement"); //targil 1
var aEl = document.createElement("a");
aEl.setAttribute("href", "http://www.google.com");
aEl.innerHTML = "GOOGLE";
div.appendChild(aEl);
