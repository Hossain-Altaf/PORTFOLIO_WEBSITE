
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


  document.getElementById("read-more-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const moreText = document.getElementById("more-text");
    const btn = this;

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    }
  });

  document.getElementById('photo').addEventListener('click', function() {
    const list = document.getElementById('photography');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('traveling-item').addEventListener('click', function() {
    const list = document.getElementById('traveling-list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('reading-item').addEventListener('click', function() {
    const list = document.getElementById('reading-list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });

  document.getElementById('cinema-item').addEventListener('click', function() {
    const list = document.getElementById('cinema-list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });


  document.addEventListener("DOMContentLoaded", function () {
  const span = document.querySelector(".intro-text h1 span");
  const fullText = span.textContent; // store original text
  span.textContent = ""; // clear text before typing

  let i = 0;
  function typeWriter() {
    if (i < fullText.length) {
      span.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 30); // typing speed
    } else {
      span.style.borderRight = "none"; // remove cursor after typing
    }
  }

  typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
  const span = document.querySelector(".intro-text h2 span");
  const fullText = span.textContent; // store original text
  span.textContent = ""; // clear text before typing

  let i = 0;
  function typeWriter() {
    if (i < fullText.length) {
      span.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // typing speed
    } else {
      span.style.borderRight = "none"; // remove cursor after typing
    }
  }

  typeWriter();
});

const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('imageModal');
const fullImage = document.getElementById('fullImage');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open modal on image click
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    fullImage.src = img.src;
    currentIndex = index;
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Navigate previous
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent modal close
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  fullImage.src = images[currentIndex].src;
});

// Navigate next
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent modal close
  currentIndex = (currentIndex + 1) % images.length;
  fullImage.src = images[currentIndex].src;
});

// Close when clicking outside image (but not arrows)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Optional: Navigate with keyboard arrows
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      fullImage.src = images[currentIndex].src;
    }
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      fullImage.src = images[currentIndex].src;
    }
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  }
});
