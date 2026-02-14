let score = 0;
const heart = document.getElementById("heart");
const scoreDisplay = document.getElementById("score");
const finalScreen = document.getElementById("final-screen");
const music = document.getElementById("bg-music");
const noBtn = document.getElementById("no-btn");

function moveHeart() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * 300;
    heart.style.left = x + "px";
    heart.style.top = y + "px";
}

heart.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    moveHeart();

    if (score >= 10) {
        document.getElementById("game-area").classList.add("hidden");
        document.getElementById("title").classList.add("hidden");
        scoreDisplay.classList.add("hidden");
        finalScreen.classList.remove("hidden");
        music.play();
    }
});

moveHeart();

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
