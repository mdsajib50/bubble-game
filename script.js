function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 100; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.getElementById("bubble-bottom").innerHTML = clutter;
}

const timer=6;
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
}

runTimer();

makeBubble();