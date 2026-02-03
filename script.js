 window.addEventListener("load", () => {
    const rightSection = document.querySelector(".right");
    rightSection.classList.add("animate");
  });
  
  document.addEventListener("scroll", () => {
  document.querySelector(".hero").style.transform =
    `translateY(${window.scrollY * 0.2}px)`;
});
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
const skills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  skills.forEach(bar => {
    const position = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if(position < screenPosition){
      bar.style.transition = "1.2s";
      bar.style.width = bar.classList.contains("html") ? "90%" :
                        bar.classList.contains("css") ? "85%" :
                        bar.classList.contains("js") ? "80%" :
                        bar.classList.contains("py") ? "75%" : "70%";
    }
  });
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();   
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  } );
});

// Optional – you can add animations or dynamic features later
console.log("Certifications section loaded");

// optional functionality later
console.log("Contact section loaded");

