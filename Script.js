/* ----------------------------
   Step 3: Basic Interactivity
------------------------------- */

// Toggle navigation menu (for mobile hamburger menu)
function toggleMenu() {
  const nav = document.querySelector('header nav ul');
  nav.classList.toggle('show');
}

// Smooth scrolling for nav links
document.querySelectorAll('header nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ----------------------------
   Step 4: Portfolio Section Interactivity
------------------------------- */

// Filter projects by category
function filterProjects(category) {
  const projects = document.querySelectorAll('#projects article');
  projects.forEach(project => {
    if (category === 'all' || project.dataset.category === category) {
      project.style.display = 'flex';
    } else {
      project.style.display = 'none';
    }
  });
}

// Lightbox for project images
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('#projects article img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

/* ----------------------------
   Step 5: Contact Form Validation
------------------------------- */

const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.querySelector('#contact input[name="name"]');
  const email = document.querySelector('#contact input[name="email"]');
  const message = document.querySelector('#contact textarea[name="message"]');

  let isValid = true;

  if (!name.value.trim()) {
    alert('Please enter your name.');
    isValid = false;
  }

  if (!email.value.trim() || !email.value.includes('@')) {
    alert('Please enter a valid email.');
    isValid = false;
  }

  if (!message.value.trim()) {
    alert('Please enter a message.');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    contactForm.reset();
  }
});

/* ----------------------------
   Step 6: Optional Debugging Helper
------------------------------- */
console.log('Portfolio JavaScript loaded successfully.');
