
var canvas = document.getElementById("canvas1");
if (canvas.getContext)
{
  context = canvas.getContext('2d');
}

function drawCurve()
{
  context.beginPath();
  context.fillStyle="rgb(138, 9, 8)";
  context.moveTo(180,120);
  context.quadraticCurveTo(235,20, 250, 120);
  context.fill();
}

drawCurve();

var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");
ctx1.beginPath();
ctx1.strokeStyle = "#00F";
ctx1.moveTo(180, 120); // pick up "pen," reposition at 500 (horiz), 0 (vert)
ctx1.lineTo(210, 250); // draw straight down by 200px (200 + 200)
ctx1.lineTo(250, 120); // draw up toward left (100 less than 300, so left)
ctx1.fill(); // connect and fill
ctx1.strokeStyle="blue";
ctx1.lineWidth="2";
ctx1.fillStyle="rgb(170, 101, 34)";
ctx1.fill();
