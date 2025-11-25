function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 100; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.getElementById("bubble-bottom").innerHTML = clutter;
}

const timer=60;
function runTimer() {
  let timeLeft = timer;
  const timerElement = document.getElementById("timer");
  const interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.textContent = `${timeLeft}s`;
      
      
      
    } else {
      clearInterval(interval);
      alert("Game Over");

    }
  }, 1000);
};

function getNewHit() {
  const hitElement = document.getElementById("hit");
  const currentHit = Math.floor(Math.random() * 10);
  hitElement.textContent = currentHit.toString();
  
};

let score = 0;
function increaseScore() {
  score+=10;
  document.getElementById("score").textContent = score.toString();
};

document.getElementById("bubble-bottom").addEventListener("click", function (event) {
  if (event.target.classList.contains("bubble")) {
    const bubbleValue = parseInt(event.target.textContent);
    const currentHit = parseInt(document.getElementById("hit").textContent);
    if (bubbleValue === currentHit) {
      increaseScore();
      getNewHit();
      event.target.remove();
    }
  }
});

increaseScore();
getNewHit();

runTimer();

makeBubble();