//CUSTOM CURSOR START

//get cursor css
const cursor = document.querySelector('div.cursor');
const cursorSmall = document.querySelector('div.cursorSmall'); 

//click events
document.addEventListener("mousedown", () => { 
	cursor.classList.add("is-down"); 
	cursorSmall.classList.add("is-down")}) 

document.addEventListener("mouseup", () => {
	cursor.classList.remove("is-down"); 
	cursorSmall.classList.remove("is-down")})

//follow mouse without dellay 
 /* document.addEventListener("mousemove", (mouseCoord) => {
	cursor.style.left = mouseCoord.pageX + "px"
	cursor.style.top = mouseCoord.pageY + "px"
}) */


//follow mouse with dellay 

let mouseX = 0;
let mouseY = 0;

let pointX = 0;
let pointY = 0;

let speed = 0.3; //Delay speed

//Calculating dellay
animate = () => {
  let distX = mouseX - pointX;
  let distY = mouseY - pointY;
  
  pointX = pointX + (distX * speed);
  pointY = pointY + (distY * speed); 
  
  cursor.style.left = pointX + "px";
  cursor.style.top = pointY + "px";

  cursorSmall.style.left = mouseX + "px";
  cursorSmall.style.top = mouseY + "px";
  
  requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove", (mouseCoord) => {
	mouseX = mouseCoord.pageX;
	mouseY = mouseCoord.pageY;
})


//CUSTOM CURSOR END

