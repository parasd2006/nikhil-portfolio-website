// Typewriter effect
const roles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Web Designer', 'Freelancer'];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeWriter() {
  const el = document.getElementById('roleDynamic');
  if (!el) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }
  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(typeWriter, isDeleting ? 60 : 100);
}
typeWriter();

// Navbar scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.section, .skill-card, .service-card, .contact-card');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Message Sent!';
    document.getElementById('formSuccess').style.display = 'block';
    e.target.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      document.getElementById('formSuccess').style.display = 'none';
    }, 3000);
  }, 1200);
}
