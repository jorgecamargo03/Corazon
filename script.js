const korazon = document.getElementById('korazon');
let intervalId = null;

korazon.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    intervalId = setInterval(createHeart, 500);
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const randomX = Math.random() * window.innerWidth;
  heart.style.left = `${randomX}px`;

  // Adiciona dentro da div container
  const container = document.querySelector('.coracoes-container');
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
