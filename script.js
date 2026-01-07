// highlight active nav link on scroll

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

// project cards animation on scroll

  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // restart animation
          entry.target.classList.remove("show");
          void entry.target.offsetWidth; // force reflow
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  cards.forEach((card) => observer.observe(card));

  //contact animation on scroll

  const contactCard = document.querySelector(".contact-card");

  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // re-animate on scroll
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  contactObserver.observe(contactCard);
  
// contact form submission handling


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `Portfolio Contact from ${name}`;
    const body =
      `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href =
      `mailto:tamilvanan8643@gmail.com?subject=${subject}&body=${body}`;
  });


