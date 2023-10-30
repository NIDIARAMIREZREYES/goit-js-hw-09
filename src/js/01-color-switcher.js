
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let intervalId;

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.addEventListener('click', startColorChange);
  stopButton.addEventListener('click', stopColorChange);
});

function startColorChange() {
  const body = document.querySelector('body');
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
}

function stopColorChange() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
}
