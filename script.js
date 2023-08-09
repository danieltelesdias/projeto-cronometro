// Variáveis globais
let timerInterval;
let running = false;
let seconds = 0;
let minutes = 0;

// Função para atualizar o cronômetro
function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
}

// Iniciar o cronômetro
function startTimer() {
  if (!running) {
    running = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// Parar o cronômetro
function stopTimer() {
  running = false;
  clearInterval(timerInterval);
}

// Resetar o cronômetro
function resetTimer() {
  running = false;
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  document.getElementById("seconds").textContent = "00";
  document.getElementById("minutes").textContent = "00";
}

// Event Listeners
document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);