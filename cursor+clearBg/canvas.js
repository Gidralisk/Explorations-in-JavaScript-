//CANVAS START


const canvasTag = document.querySelector("canvas.in");
  let mouseDown = false;

setUpCanvas = canvas => {
  const windowWidth = window.innerWidth;
  const windowHeight = document.querySelector("body").scrollHeight; // Height of the whole <body> element
  
  const dpi = window.devicePixelRatio; //retina screen calculation
  canvas.width = windowWidth * dpi;   // canvas size in js has equal size in css (windowWidth and windowHeight)
  canvas.height = windowHeight * dpi; 

  canvas.style.width = windowWidth + "px";
  canvas.style.height = windowHeight + "px"

  //define canvas
  const context = canvas.getContext("2d");
  context.scale(dpi, dpi);
  // context.fillStyle = "blue";
  context.strokeStyle = "red";
  context.lineWidth = 80;
  context.lineCap = "round";
  context.lineJoin = "round";


  startDraw = (x, y) => { 
  console.log("click!");
  const colors = ["red", "yellow", "blue"];
  const random = Math.floor(Math.random()*colors.length);
  context.strokeStyle = colors[random];  
  context.moveTo(x, y);
  context.beginPath();
  }
  
  moveDraw = (x, y) => {
    if (mouseDown) {
    context.lineTo(x,y);
    context.stroke();
    }
  }


  document.addEventListener("mousedown", (mouseCoord) => { 
    mouseDown = true;
    startDraw(mouseCoord.pageX, mouseCoord.pageY);    
    }) 

  document.addEventListener("mouseup", () => {
    mouseDown = false; 
  })

  document.addEventListener("mousemove", (mouseCoord) => {
    moveDraw(mouseCoord.pageX, mouseCoord.pageY)
  })

}


setUpCanvas(canvasTag)



//CANVAS END





