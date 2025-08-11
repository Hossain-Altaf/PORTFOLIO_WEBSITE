
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

//about sec
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

  //interests
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


  //intro name
  document.addEventListener("DOMContentLoaded", function () {
  const span = document.querySelector(".intro-text h1 span");
  const fullText = span.textContent; 
  span.textContent = ""; 

  let i = 0;
  function typeWriter() {
    if (i < fullText.length) {
      span.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 30); 
    } else {
      span.style.borderRight = "none"; 
    }
  }

  typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
  const span = document.querySelector(".intro-text h2 span");
  const fullText = span.textContent; 
  span.textContent = ""; 

  let i = 0;
  function typeWriter() {
    if (i < fullText.length) {
      span.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 100); 
    } else {
      span.style.borderRight = "none"; 
    }
  }

  typeWriter();
});

//photography
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('imageModal');
const fullImage = document.getElementById('fullImage');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;


images.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    fullImage.src = img.src;
    currentIndex = index;
  });
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


prevBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  fullImage.src = images[currentIndex].src;
});


nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  fullImage.src = images[currentIndex].src;
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


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


