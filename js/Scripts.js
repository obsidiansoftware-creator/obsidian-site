
document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section");

  /* ===============================
     ALTURA DINÁMICA DEL NAVBAR
  ================================ */
  function setNavHeight() {
    document.documentElement.style.setProperty(
      "--nav-height",
      navbar.offsetHeight + "px"
    );
  }

  setNavHeight();
  window.addEventListener("resize", setNavHeight);

  /* ===============================
     SMOOTH SCROLL PRO
  ================================ */
  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetID = link.getAttribute("href");
      if (!targetID.startsWith("#")) return;

      const target = document.querySelector(targetID);
      if (!target) return;

      e.preventDefault();

      const y =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navbar.offsetHeight +
        5;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });

      // cerrar menú mobile
      document.querySelector(".navbar-collapse")?.classList.remove("show");
    });
  });

  /* ===============================
     LINK ACTIVO AL SCROLL
  ================================ */
  function activateLink() {
    let scrollPos = window.scrollY + navbar.offsetHeight + 10;

    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        links.forEach(link => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.navbar-nav .nav-link[href="#${section.id}"]`
        );

        activeLink?.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateLink);
});


document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-obsidian');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

  const steps = document.querySelectorAll('.process-step');

  window.addEventListener('load', () => {
    steps.forEach((step, i) => {
      setTimeout(() => {
        step.classList.add('show');
      }, i * 150);
    });
  });

  steps.forEach((step, index) => {
    step.addEventListener('mouseenter', () => {
      steps.forEach((s, i) => {
        s.style.opacity = i <= index ? '1' : '0.3';
      });
    });

    step.addEventListener('mouseleave', () => {
      steps.forEach(s => s.style.opacity = '1');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

  const fadeItems = document.querySelectorAll('.fade-item');

  if (!fadeItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 150);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeItems.forEach(item => observer.observe(item));

});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section-portfolio');

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(section => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", () => {

  // ===== SLIDER AUTOMÁTICO =====
  const slides = document.querySelectorAll(".testimonial-slide");
  let currentSlide = 0;

  if (slides.length > 0) {
    slides[0].classList.add("active");

    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 6000);
  }

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));

});

document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".testimonial-slide");
  const progress = document.querySelector(".testimonial-progress span");
  let current = 0;
  const duration = 6000;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    progress.style.animation = "none";
    progress.offsetHeight; 
    progress.style.animation = `progress ${duration}ms linear infinite`;
  }

  if (slides.length > 0) {
    showSlide(current);

    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, duration);
  }

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));

});

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".reveal-footer");

  if (!footer) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(footer);
});