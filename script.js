// Typing effect
const texts = ["Software Developer", "Frontend Designer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // Delay between words
  } else {
    setTimeout(type, 100); // Typing speed
  }
})();

// Loader animation sequence
document.addEventListener('DOMContentLoaded', () => {
  const loaderWrapper = document.getElementById('loader-wrapper');
  const balls = document.getElementById('bouncing-balls');
  const triangle = document.getElementById('triangle');

  // Step 1: Show bouncing balls for 4 seconds
  setTimeout(() => {
    balls.style.display = 'none';

    // Step 2: Show triangle with scale in
    triangle.style.display = 'block';
    requestAnimationFrame(() => {
      triangle.classList.add('show');
    });

    // Step 3: After 2 seconds, fade out triangle
    setTimeout(() => {
      triangle.classList.remove('show');
      triangle.classList.add('fadeout');

      // Step 4: After 1 more second, hide loader and show main content
      setTimeout(() => {
        loaderWrapper.style.display = 'none';
        document.body.style.overflow = 'auto'; // re-enable scroll
      }, 1000);

    }, 2000);

  }, 4000);
});
