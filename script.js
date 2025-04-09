const korazon = document.getElementById('korazon'); // ou .querySelector, dependendo
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

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
