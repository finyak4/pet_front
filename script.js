document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav__links");
  const navContact = document.querySelector(".nav__contact");
  const navSocials = document.querySelector(".nav__socials");
  const body = document.querySelector("body");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    navContact.classList.toggle("show");
    navSocials.classList.toggle("show");
    body.classList.toggle("no-scroll");
  });
});



// carousel


document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    `
    <div class="carousel-slide">
      <p class="carousel-item">
        "One of the best stays in Milan so far! The hotel is renovated and
        looks stunning, and the staff is very helpful and nice."
      </p>
      <p class="carousel-item-description">Ella Mendex, Mexico</p>
    </div>
    `,
    `
    <div class="carousel-slide">
      <p class="carousel-item">
        "The hotel room was so comfortable and stylish that we didn't want to
        leave it at all! This hotel is definitely the best choice in Milan."
      </p>
      <p class="carousel-item-description">Jane Avodicate, Nebraska, USA</p>
    </div>
    `,
    `
    <div class="carousel-slide">
      <p class="carousel-item">
        "The hotel went above and beyond to make our experience a good one. I
        would 100% recommend staying here when visiting Milan."
      </p>
      <p class="carousel-item-description">Oliver Whinestone, Canada</p>
    </div>
    `,
  ];

  let currentIndex = 0;
  
  const carouselContainer = document.querySelector(".carousel-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (!carouselContainer) {
    console.error("Carousel container not found!");
    return;
  }

  carouselContainer.innerHTML = slides[currentIndex];

  function updateCarousel() {
    carouselContainer.innerHTML = slides[currentIndex];
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });
});
