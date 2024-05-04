const canvas = document.getElementById('chessbox');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.strokeStyle = 'brown';
ctx.fillStyle = 'transparent';
ctx.fillRect(0, 0, 100, 440);
ctx.lineWidth = 10;
ctx.strokeRect(5, 5, 810, 810);

const squareSize = 100;


for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const x = 10 + (squareSize ) * i;
    const y = 10 + (squareSize ) * j;

    // Use a ternary operator to alternate between black and white
    ctx.fillStyle = (i + j) % 2 === 0 ? 'black' : 'white';
    
    ctx.fillRect(x, y, squareSize, squareSize);
  }
}
