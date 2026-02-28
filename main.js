// ========== DEPARTMENT DATA ==========
const departments = {
  sh: {
    name: 'Science and Humanities (S&H)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="20" r="8" stroke="#34d399" stroke-width="2.5" fill="rgba(16,185,129,0.15)"/><path d="M20 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/><path d="M26 20l-6 16M38 20l6 16" stroke="#10b981" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="38" r="3" fill="#34d399"/><circle cx="44" cy="38" r="3" fill="#34d399"/><path d="M14 48h36" stroke="#10b981" stroke-width="2" stroke-linecap="round"/><path d="M32 38v10" stroke="#10b981" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="14" r="2" fill="#34d399"/></svg>`,
    abbr: 'S&H',
    colorClass: 'dept-green',
    domains: ['SDG Goals', 'Web & App Development', 'Cyber Security', 'Robotics & Automation', 'Data Science', 'Open Innovation'],
    coordinator: 'Dr. A. Touseef Ahmed'
  },
  cse: {
    name: 'Computer Science and Engineering (CSE)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="48" height="32" rx="4" stroke="#60a5fa" stroke-width="2.5" fill="rgba(59,130,246,0.1)"/><rect x="14" y="18" width="36" height="20" rx="2" fill="rgba(59,130,246,0.08)" stroke="#3b82f6" stroke-width="1.5"/><path d="M22 26l6 4-6 4" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 34h8" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/><path d="M26 48h12" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/><path d="M32 44v4" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/></svg>`,
    abbr: 'CSE',
    colorClass: 'dept-blue',
    domains: ['Data Science', 'Web & App Development', 'Cyber Security', 'Blockchain', 'SDG Goals', 'Open Innovation'],
    coordinator: 'Dr. Getsy S Sara'
  },
  csbs: {
    name: 'Computer Science and Business Systems (CSBS)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="16" width="10" height="28" rx="2" fill="rgba(20,184,166,0.15)" stroke="#2dd4bf" stroke-width="2"/><rect x="27" y="22" width="10" height="22" rx="2" fill="rgba(20,184,166,0.2)" stroke="#2dd4bf" stroke-width="2"/><rect x="42" y="10" width="10" height="34" rx="2" fill="rgba(20,184,166,0.25)" stroke="#2dd4bf" stroke-width="2"/><path d="M10 48h44" stroke="#14b8a6" stroke-width="2" stroke-linecap="round"/><path d="M14 14l18-2 22 -4" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 3"/><circle cx="14" cy="14" r="2.5" fill="#2dd4bf"/><circle cx="32" cy="12" r="2.5" fill="#2dd4bf"/><circle cx="48" cy="8" r="2.5" fill="#2dd4bf"/></svg>`,
    abbr: 'CSBS',
    colorClass: 'dept-teal',
    domains: ['FinTech Applications', 'Business Analytics', 'E-Commerce Platforms', 'AI for Business Solutions', 'SDG Goals', 'Open Innovation'],
    coordinator: 'Dr. E. Divya'
  },
  ece: {
    name: 'Electronics and Communication Engineering (ECE)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="6" stroke="#a78bfa" stroke-width="2.5" fill="rgba(139,92,246,0.15)"/><circle cx="32" cy="32" r="14" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="32" cy="32" r="22" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="3 4" opacity="0.6"/><path d="M32 10v6M32 48v6M10 32h6M48 32h6" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="32" r="2" fill="#a78bfa"/><path d="M42 18l4-4M18 42l4-4M42 46l4 4M18 18l4 4" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    abbr: 'ECE',
    colorClass: 'dept-purple',
    domains: ['IoT Systems', 'Embedded Systems', 'Robotics & Automation', 'Drone Technology'],
    coordinator: 'Dr. S. R. Surem Samuel'
  },
  aids: {
    name: 'Artificial Intelligence and Data Science (AIDS)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="22" r="10" stroke="#fb923c" stroke-width="2" fill="rgba(249,115,22,0.1)"/><path d="M26 22h12" stroke="#fb923c" stroke-width="2" stroke-linecap="round"/><circle cx="28" cy="19" r="1.5" fill="#fb923c"/><circle cx="36" cy="19" r="1.5" fill="#fb923c"/><path d="M28 25a4 4 0 008 0" stroke="#fb923c" stroke-width="1.5" stroke-linecap="round"/><path d="M20 36c0 0 4-4 12-4s12 4 12 4" stroke="#f97316" stroke-width="2" stroke-linecap="round"/><path d="M16 44h6l4-6 4 10 4-8 4 6 4-4h6" stroke="#fb923c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="14" r="2" fill="rgba(249,115,22,0.4)"/><circle cx="46" cy="14" r="2" fill="rgba(249,115,22,0.4)"/><path d="M20 14h2M42 14h2" stroke="#f97316" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    abbr: 'AIDS',
    colorClass: 'dept-orange',
    domains: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analytics', 'Open Innovation'],
    coordinator: 'Dr. Nivash Jeevanandham'
  },
  it: {
    name: 'Information Technology (IT)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="18" stroke="#818cf8" stroke-width="2" fill="rgba(99,102,241,0.08)"/><circle cx="32" cy="32" r="10" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="32" cy="32" r="3" fill="#818cf8"/><circle cx="32" cy="14" r="3" stroke="#818cf8" stroke-width="1.5" fill="rgba(99,102,241,0.2)"/><circle cx="50" cy="32" r="3" stroke="#818cf8" stroke-width="1.5" fill="rgba(99,102,241,0.2)"/><circle cx="14" cy="32" r="3" stroke="#818cf8" stroke-width="1.5" fill="rgba(99,102,241,0.2)"/><circle cx="32" cy="50" r="3" stroke="#818cf8" stroke-width="1.5" fill="rgba(99,102,241,0.2)"/><path d="M32 17v12M32 35v12M35 32h12M17 32h12" stroke="#6366f1" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    abbr: 'IT',
    colorClass: 'dept-indigo',
    domains: ['Cloud Computing', 'Web Technologies', 'Mobile Applications', 'Network Security', 'DevOps', 'Open Innovation'],
    coordinator: 'Dr. M. Vasumathy'
  },
  mech: {
    name: 'Mechanical Engineering (MECH)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="12" stroke="#fb7185" stroke-width="2" fill="rgba(244,63,94,0.1)"/><circle cx="32" cy="32" r="5" stroke="#f43f5e" stroke-width="2" fill="rgba(244,63,94,0.15)"/><circle cx="32" cy="32" r="1.5" fill="#fb7185"/><path d="M32 20v-6M32 50v-6M20 32h-6M50 32h-6" stroke="#fb7185" stroke-width="3" stroke-linecap="round"/><path d="M23.5 23.5l-4-4M40.5 40.5l-4-4M40.5 23.5l4-4M23.5 40.5l-4 4" stroke="#fb7185" stroke-width="3" stroke-linecap="round"/></svg>`,
    abbr: 'MECH',
    colorClass: 'dept-rose',
    domains: ['CAD/CAM', 'Renewable Energy', '3D Printing', 'Automation', 'Thermal Systems', 'Open Innovation'],
    coordinator: 'Mr. S. Rudramoorthy'
  },
  mba: {
    name: 'Master of Business Administration (MBA)',
    icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 48L22 28L32 38L42 18L52 28" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 48L22 28L32 38L42 18L52 28" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" filter="blur(4px)"/><circle cx="52" cy="28" r="3" fill="#fbbf24"/><circle cx="42" cy="18" r="3" fill="#fbbf24"/><circle cx="32" cy="38" r="3" fill="#fbbf24"/><circle cx="22" cy="28" r="3" fill="#fbbf24"/><circle cx="12" cy="48" r="3" fill="#fbbf24"/><path d="M42 18l8-6" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><path d="M46 12h4v4" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    abbr: 'MBA',
    colorClass: 'dept-amber',
    domains: ['Business Plan', 'Marketing Strategy', 'Financial Modeling', 'HR Analytics', 'Startup Pitch', 'Open Innovation'],
    coordinator: 'Mrs. M. Mavitha'
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

    document.getElementById('modalIcon').innerHTML = `<div class="dept-badge ${dept.colorClass}" style="width:90px;height:90px;">${dept.icon}<span>${dept.abbr}</span></div>`;
    document.getElementById('modalTitle').textContent = dept.name;
    document.getElementById('modalCoordinator').textContent = dept.coordinator;

    const domainsList = document.getElementById('modalDomains');
    domainsList.innerHTML = dept.domains.map(d => `<li>${d}</li>`).join('');

    // Pre-select department in registration form
    const registerBtn = document.getElementById('modalRegister');
    registerBtn.addEventListener('click', () => {
      closeModal();
      const deptSelect = document.getElementById('department');
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

  // Registration deadline: March 4, 2026 11:59 PM IST (UTC+5:30)
  const DEADLINE = new Date('2026-03-04T23:59:00+05:30');
  const isExpired = () => new Date() > DEADLINE;

  if (isExpired()) {
    submitBtn.textContent = '🔒 REGISTRATION CLOSED';
    submitBtn.classList.add('disabled');
    submitBtn.disabled = true;
    // Disable all form inputs
    form.querySelectorAll('input, select, textarea').forEach(el => {
      el.disabled = true;
      el.style.opacity = '0.5';
      el.style.cursor = 'not-allowed';
    });
    return; // Skip all event listeners
  }

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

      // Fire-and-forget with short timeout since no-cors gives opaque response anyway
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal
      }).catch(() => { });

      // Show success after a brief delay (data is already being sent)
      setTimeout(() => {
        clearTimeout(timeoutId);
        showSuccess();
      }, 800);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
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

// ========== DEPARTMENT ICONS ==========
function initDeptIcons() {
  const deptKeys = Object.keys(departments);
  deptKeys.forEach(key => {
    const el = document.getElementById(`dept-icon-${key}`);
    if (el) {
      el.innerHTML = departments[key].icon;
    }
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initDeptIcons();
  initDeptModal();
  initForm();
  initParticles();
  initSmoothScroll();
});
