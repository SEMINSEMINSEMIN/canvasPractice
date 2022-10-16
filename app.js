const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height= 800;


// 1.
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.fill();

// ctx.beginPath();
// ctx.rect(250, 250, 100, 100);
// ctx.fillStyle = 'red';
// ctx.fill();

// 2.
// moveTo: 선을 긋지 않으면서 연필을 움직임
// ctx.moveTo(50, 50); 
// // lineTo: 선을 그으며 연필을 움직임
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// // ctx.stroke();
// ctx.fill();

// 3. ctx는 순서가 있다
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.stroke();
// ctx.lineTo(450, 200);
// ctx.fill();

// 4. 사람 그리기
// ctx.fillRect(210 - 40, 200 - 30, 15, 100);
// ctx.fillRect(350 - 40, 200 - 30, 15, 100);
// ctx.fillRect(260 - 40, 200 - 30, 60, 200);

// // ctx.arc(250, 100, 50, 0, 1.5*Math.PI);
// ctx.arc(250, 100, 50, 0, 2*Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.arc(260 + 10, 80, 8, 1*Math.PI, 2*Math.PI);
// ctx.fill();
// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.arc(220 + 10, 80, 8, 1*Math.PI, 2*Math.PI);
// ctx.fill();

// 5. 캔버스 그림 그리기
ctx.lineWidth = 2;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
]


const 좌표 = [0, 0];
function onClick(event){
    좌표[0] = event.offsetX;
    좌표[1] = event.offsetY;
}

canvas.addEventListener("click", onClick);

function onMove(event){
    ctx.beginPath();
    ctx.moveTo(좌표[0], 좌표[1]);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

// function onClick(event){
//     ctx.moveTo(event.offsetX, event.offsetY);
// }


canvas.addEventListener("mousemove", onMove);
