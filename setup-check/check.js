// This file loaded, so the JavaScript check passes
const js = document.getElementById("js");
js.textContent = "PASS";
js.classList.remove("fail");
document.getElementById("msg").textContent = "All 3 PASS? Your setup works!";
console.log("CS10 setup check: JavaScript works!");
