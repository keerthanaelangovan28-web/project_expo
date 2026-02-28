// ========== DEPARTMENT DATA ==========
const departments = {
  sh: {
    name: 'Science and Humanities (S&H)',
    icon: '🔬',
    logo: '/logos/sh.png',
    domains: ['SDG Goals', 'Web & App Development', 'Cyber Security', 'Robotics & Automation', 'Data Science', 'Open Innovation'],
    coordinator: 'Dr. A. Touseef Ahmed',
    hod: 'To be announced'
  },
  cse: {
    name: 'Computer Science and Engineering (CSE)',
    icon: '💻',
    logo: '/logos/cse.png',
    domains: ['Data Science', 'Web & App Development', 'Cyber Security', 'Blockchain', 'SDG Goals', 'Open Innovation'],
    coordinator: 'Dr. Getsy S Sara',
    hod: 'To be announced'
  },
  csbs: {
    name: 'Computer Science and Business Systems (CSBS)',
    icon: '📊',
    logo: '/logos/csbs.png',
    domains: ['FinTech Applications', 'Business Analytics', 'E-Commerce Platforms', 'AI for Business Solutions', 'SDG Goals', 'Open Innovation'],
    coordinator: 'Dr. E. Divya',
    hod: 'To be announced'
  },
  ece: {
    name: 'Electronics and Communication Engineering (ECE)',
    icon: '📡',
    logo: '/logos/ece.png',
    domains: ['IoT Systems', 'Embedded Systems', 'Robotics & Automation', 'Drone Technology'],
    coordinator: 'Dr. S. R. Surem Samuel',
    hod: 'To be announced'
  },
  aids: {
    name: 'Artificial Intelligence and Data Science (AIDS)',
    icon: '🤖',
    logo: '/logos/aids.png',
    domains: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analytics', 'Open Innovation'],
    coordinator: 'Dr. J.P. Nivash Jeevanandham',
    hod: 'To be announced'
  },
  it: {
    name: 'Information Technology (IT)',
    icon: '🌐',
    logo: '/logos/it.png',
    domains: ['Cloud Computing', 'Web Technologies', 'Mobile Applications', 'Network Security', 'DevOps', 'Open Innovation'],
    coordinator: 'Dr. M. Vasumathy',
    hod: 'To be announced'
  },
  mech: {
    name: 'Mechanical Engineering (MECH)',
    icon: '⚙️',
    logo: '/logos/mech.png',
    domains: ['CAD/CAM', 'Renewable Energy', '3D Printing', 'Automation', 'Thermal Systems', 'Open Innovation'],
    coordinator: 'Mr. S. Rudramoorthy',
    hod: 'To be announced'
  },
  mba: {
    name: 'Master of Business Administration (MBA)',
    icon: '📈',
    logo: '/logos/mba.png',
    domains: ['Business Plan', 'Marketing Strategy', 'Financial Modeling', 'HR Analytics', 'Startup Pitch', 'Open Innovation'],
    coordinator: 'Mrs. M. Mavitha',
    hod: 'To be announced'
  }
};

// ========== COUNTDOWN TIMER ==========
function initCountdown() {
  const target = new Date('2026-03-28T09:00:00+05:30').getTime();
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  function update() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ========== NAVBAR SCROLL EFFECT ==========
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Glassmorphism on scroll
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const links = document.querySelectorAll('.drawer-link');

  function toggle() {
    hamburger.classList.toggle('active');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);
  links.forEach(link => link.addEventListener('click', () => {
    if (drawer.classList.contains('open')) toggle();
  }));
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation slightly for elements appearing together
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ========== DEPARTMENT MODAL ==========
function initDeptModal() {
  const modal = document.getElementById('deptModal');
  const modalClose = document.getElementById('modalClose');
  const cards = document.querySelectorAll('.dept-card');
  const btns = document.querySelectorAll('.dept-btn');

  function openModal(deptKey) {
    const dept = departments[deptKey];
    if (!dept) return;

    document.getElementById('modalIcon').innerHTML = `<img src="${dept.logo}" alt="${dept.name}" class="dept-logo" style="width:80px;height:80px;" />`;
    document.getElementById('modalTitle').textContent = dept.name;
    document.getElementById('modalCoordinator').textContent = dept.coordinator;
    document.getElementById('modalHOD').textContent = dept.hod;

    const domainsList = document.getElementById('modalDomains');
    domainsList.innerHTML = dept.domains.map(d => `<li>${d}</li>`).join('');

    // Pre-select department in registration form
    const registerBtn = document.getElementById('modalRegister');
    registerBtn.addEventListener('click', () => {
      closeModal();
      const deptSelect = document.getElementById('department');
      // Match based on department key
      const mapping = { sh: 'S&H', cse: 'CSE', csbs: 'CSBS', ece: 'ECE', aids: 'AIDS', it: 'IT', mech: 'MECH', mba: 'MBA' };
      if (mapping[deptKey]) {
        deptSelect.value = mapping[deptKey];
      }
    }, { once: true });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.dept-btn')) return;
      openModal(card.dataset.dept);
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.dept);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ========== REGISTRATION FORM ==========
function initForm() {
  const form = document.getElementById('registrationForm');
  const submitBtn = document.getElementById('submitBtn');
  const successModal = document.getElementById('successModal');
  const successClose = document.getElementById('successClose');

  const requiredFields = ['leaderName', 'email', 'department', 'year', 'teamName', 'projectTitle', 'problemStatement', 'member2'];

  function validateField(field) {
    const el = document.getElementById(field);
    let valid = true;

    if (!el.value.trim()) {
      valid = false;
    }

    if (field === 'email' && el.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      valid = emailRegex.test(el.value.trim());
    }

    if (valid) {
      el.classList.remove('error');
    } else {
      el.classList.add('error');
    }

    return valid;
  }

  // Real-time validation on blur
  requiredFields.forEach(field => {
    const el = document.getElementById(field);
    el.addEventListener('blur', () => validateField(field));
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all
    let allValid = true;
    requiredFields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) return;

    // Gather data
    const formData = {
      leaderName: document.getElementById('leaderName').value.trim(),
      email: document.getElementById('email').value.trim(),
      department: document.getElementById('department').value,
      year: document.getElementById('year').value,
      teamName: document.getElementById('teamName').value.trim(),
      projectTitle: document.getElementById('projectTitle').value.trim(),
      problemStatement: document.getElementById('problemStatement').value.trim(),
      member2: document.getElementById('member2').value.trim(),
      member3: document.getElementById('member3').value.trim(),
      member4: document.getElementById('member4').value.trim(),
      member5: document.getElementById('member5').value.trim()
    };

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.textContent = '⏳ Submitting...';

    try {
      // Send to Google Apps Script
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkP6uOkYZCiSE3MA35AsoFlufzbxr6xCYwtuu9Zm-QOzUgaWrUoD2-i6qYkkHN1qiX/exec';

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      showSuccess();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.textContent = '🚀 SUBMIT REGISTRATION';
    }
  });

  function showSuccess() {
    submitBtn.classList.remove('loading');
    submitBtn.textContent = '🚀 SUBMIT REGISTRATION';
    form.reset();
    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  successClose.addEventListener('click', () => {
    successModal.classList.remove('open');
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      successModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ========== COSMIC STAR-FIELD BACKGROUND ==========
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let animationId;

  const starColors = [
    { r: 0, g: 229, b: 255 },     // cyan
    { r: 168, g: 85, b: 247 },    // purple
    { r: 255, g: 255, b: 255 },   // white
    { r: 236, g: 72, b: 153 },    // pink
    { r: 56, g: 189, b: 248 },    // light blue
    { r: 34, g: 197, b: 94 },     // green
  ];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createStars() {
    stars = [];
    const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 8000));
    for (let i = 0; i < count; i++) {
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.6 + 0.15,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        alphaSpeed: Math.random() * 0.008 + 0.002,
        color: color,
        glow: Math.random() > 0.7 // 30% of stars have glow
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
      // Move
      s.x += s.vx;
      s.y += s.vy;

      // Wrap around
      if (s.x < -5) s.x = canvas.width + 5;
      if (s.x > canvas.width + 5) s.x = -5;
      if (s.y < -5) s.y = canvas.height + 5;
      if (s.y > canvas.height + 5) s.y = -5;

      // Twinkle
      s.alpha += s.alphaDir * s.alphaSpeed;
      if (s.alpha >= 0.8) { s.alpha = 0.8; s.alphaDir = -1; }
      if (s.alpha <= 0.05) { s.alpha = 0.05; s.alphaDir = 1; }

      // Glow effect for special stars
      if (s.glow && s.radius > 1) {
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 6);
        grad.addColorStop(0, `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${s.alpha * 0.3})`);
        grad.addColorStop(1, `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, 0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Draw star
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${s.alpha})`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(draw);
  }

  resize();
  createStars();
  draw();

  window.addEventListener('resize', () => {
    resize();
    createStars();
  });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initDeptModal();
  initForm();
  initParticles();
  initSmoothScroll();
});
