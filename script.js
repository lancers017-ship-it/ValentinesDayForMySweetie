const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

const tileSize = 50;
const rows = 10;
const cols = 10;

let player = { x: 0, y: 0 };
let letter = { x: 9, y: 9 };

let maze = [
    [0,0,0,1,0,0,0,0,0,0],
    [1,1,0,1,0,1,1,1,1,0],
    [0,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,1,0],
    [0,0,0,0,0,0,1,0,1,0],
    [0,1,1,1,1,0,1,0,1,0],
    [0,0,0,0,1,0,0,0,1,0],
    [1,1,1,0,1,1,1,0,1,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,1,1,1,1,0,0,0,1,0],
];

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (maze[y][x] === 1) {
                ctx.fillStyle = "hotpink";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }

    ctx.fillStyle = "red";
    ctx.fillRect(player.x * tileSize + 10, player.y * tileSize + 10, 30, 30);

    ctx.fillStyle = "gold";
    ctx.fillText("💌", letter.x * tileSize + 15, letter.y * tileSize + 35);
}

document.addEventListener("keydown", (e) => {
    let newX = player.x;
    let newY = player.y;

    if (e.key === "ArrowUp") newY--;
    if (e.key === "ArrowDown") newY++;
    if (e.key === "ArrowLeft") newX--;
    if (e.key === "ArrowRight") newX++;

    if (maze[newY] && maze[newY][newX] === 0) {
        player.x = newX;
        player.y = newY;
    }

    if (player.x === letter.x && player.y === letter.y) {
        document.getElementById("question-screen").classList.remove("hidden");
        canvas.classList.add("hidden");
        document.getElementById("title").classList.add("hidden");
        document.getElementById("instructions").classList.add("hidden");
    }

    drawMaze();
});

drawMaze();

const noBtn = document.getElementById("no-btn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

document.getElementById("yes-btn").addEventListener("click", () => {
    document.getElementById("question-screen").classList.add("hidden");
    document.getElementById("final-screen").classList.remove("hidden");
    document.getElementById("bg-music").play();
});
