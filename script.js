function makeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//console.log(makeColor())
let colors = [];
let match = false;
let squareArr = document.querySelectorAll(".square");

function init() {
  match=false
  document.querySelector(".msg").innerHTML = "";
  colors = [];
  document.querySelector("h1").style.backgroundColor = "white";
  for (let obj of squareArr) {
    //console.log(obj)
    let color = makeColor();
    obj.style.backgroundColor = color;
    colors.push(color);
  }
  let index = Math.floor(Math.random() * 6);
  document.getElementById("color").innerHTML = colors[index];
}

init();

console.log(colors);



function verify(e) {
  if (!match) {
    console.log(e.target.style.backgroundColor);
    let clickedColor = e.target.style.backgroundColor;
    let c = document.getElementById("color").textContent;
    console.log(clickedColor, c);
    console.log(clickedColor.length, c.length);
    if (clickedColor == c) {
      document.querySelector("h1").style.backgroundColor = clickedColor;
      document.querySelector(".msg").innerHTML = "😍";
      match = true;
    } else {
      document.querySelector(".msg").innerHTML = "🤔";
    }
  }
}
