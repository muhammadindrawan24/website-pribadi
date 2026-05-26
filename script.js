/* ═══════════════════════════════════════════════════════════
   MUHAMMAD ADI INDRAWAN — PORTFOLIO v2 JS
   Cinematic · Premium · Immersive
═══════════════════════════════════════════════════════════ */
'use strict';

/* ── Translations ── */
const T = {
  id: {
    'loading':'Memuat...',
    'nav.about':'About',
    'nav.skills':'Skills',
    'nav.exp':'Experience',
    'nav.portfolio':'Portfolio',
    'nav.contact':'Contact',

    'hero.available':'Tersedia untuk Peluang Baru',
    'hero.iam':'Saya seorang\u00a0',
    'hero.bio':'Mahasiswa Sistem Informasi yang bersemangat membangun pengalaman digital yang elegan, fungsional, dan berdampak nyata.',
    'hero.cv':'Download CV',
    'hero.contact':'Hubungi Saya',
    'hero.scroll':'Gulir ke bawah',

    'about.eyebrow':'Tentang Saya',
    'about.title1':'Siapa ',
    'about.title2':'Saya?',
    'about.lead':'Halo! Saya <strong>Muhammad Adi Indrawan</strong>, mahasiswa <strong>Sistem Informasi</strong> di Universitas Internasional Semen Indonesia (UISI) yang bersemangat di bidang teknologi.',
    'about.p1':'Saya memiliki ketertarikan mendalam dalam <em>web development</em>, <em>UI/UX design</em>, dan pengembangan sistem informasi modern.',
    'about.p2':'Saya percaya teknologi terbaik adalah yang tidak terasa — ia bekerja tanpa batas, terasa alami, dan memberdayakan penggunanya.',

    'chip.solver':'🎯 Problem Solver',
    'chip.creative':'🎨 Creative Thinker',
    'chip.tech':'💡 Tech Enthusiast',
    'chip.learner':'📚 Life Learner',

    'stat.projects':'Proyek Selesai',
    'stat.certs':'Sertifikat',
    'stat.orgs':'Organisasi',
    'stat.commit':'Dedikasi',

    'skills.eyebrow':'Keahlian',
    'skills.title':'Stack',
    'skills.level':'Tingkat Keahlian',
    'skills.comp':'Kompetensi',

    /* TIMELINE */
    'tl.eyebrow':'Perjalanan',
    'tl.title1':'Pendidikan & ',
    'tl.title2':'Pengalaman',

    'now':'Sekarang',

    'badge.edu':'Pendidikan',
    'badge.exp':'Pengalaman',
    'badge.proj':'Proyek',
    'badge.org':'Organisasi',

    /* TL0 */
    'tl0.title':'Prodi S1 Sistem Informasi',
    'tl0.desc':'Menempuh Sarjana S1 studi Sistem Informasi dengan fokus web development, analisis sistem, dan manajemen basis data. Aktif dalam kegiatan akademik dan organisasi kampus.',

    /* TL1 */
    'tl1.title':'Jurusan Rekayasa Perangkat Lunak',
    'tl1.place':'SMK SEMEN GRESIK',
    'tl1.desc':'Menempuh Pendidikan Sekolah Menengah Kejuruan selama 3 tahun dengan mempelajari dasar pemrograman, pengembangan software, dan sistem komputer.',

    /* TL2 */
    'tl2.title':'Magang Bagian Staff TIK',
    'tl2.place':'Kantor Polres Gresik – Divisi Teknologi Informasi & Komunikasi',
    'tl2.desc':'Terlibat dalam pemeliharaan sistem jaringan, pengelolaan administrasi, dan dukungan teknis operasional di lingkungan institusi.',

    /* TL3 */
    'tl3.title':'Website Dunia Styrofoam Gresik',
    'tl3.place':'Project Akhir Ujian SMK',
    'tl3.desc':'Membuat website statis menggunakan HTML, CSS, JavaScript serta memberikan pendampingan digital marketing kepada UMKM Desa Ponganan.',

    /* TL4 */
    'tl4.title':'Staff Ahli Departemen Kaderisasi',
    'tl4.place':'UKM Lembaga Dakwah Kampus UISI',
    'tl4.desc':'Berpartisipasi aktif dalam organisasi, mengasah kepemimpinan, komunikasi, dan kerja tim dalam berbagai event dan program dakwah kampus.',

    /* TL5 */
    'tl5.title':'Ketua Pelaksana Mentoring Dasar Agama Islam UISI 2025',
    'tl5.place':'Program pembinaan dasar keagamaan kampus oleh UKM LDK UISI',
    'tl5.desc':'Bertanggung jawab mengoordinasikan program pembinaan lebih dari 400 mahasiswa baru muslim mulai dari rekrutmen mentor, School of Mentor, koordinasi kepanitiaan, hingga pelaksanaan ceremony dan event mentoring.',

    /* PORTFOLIO */
    'pf.eyebrow':'Karya',
    'pf.title':'Saya',
    'pf.view':'Lihat Project',

    'pf0.title':'Website Sistem Informasi',
    'pf0.desc':'Aplikasi web manajemen data berbasis PHP & MySQL dengan autentikasi pengguna dan laporan dinamis.',

    'pf1.title':'UI Design Dashboard Modern',
    'pf1.desc':'Desain dashboard analitik modern dengan komponen bersih, intuitif, dan berorientasi data.',

    'pf2.title':'Website Dunia Styrofoam Gresik',
    'pf2.desc':'Website statis umkm desa pongangan (duniastyrofoam)',

    /* CONTACT */
    'ct.eyebrow':'Kontak',
    'ct.title1':'Mari ',
    'ct.title2':'Berkolaborasi',
    'ct.sub':'Punya proyek menarik? Atau sekadar ingin berkenalan? Saya selalu terbuka untuk peluang baru!',

    'ct.infoTitle':'Informasi Kontak',
    'ct.emailLbl':'Email',
    'ct.locLbl':'Lokasi',
    'ct.uniLbl':'Universitas',
    'ct.findMe':'Temukan Saya Di',

    'ct.formTitle':'Kirim Pesan',
    'ct.nameLabel':'Nama Lengkap',
    'ct.emailLabel':'Email',
    'ct.msgLabel':'Pesan',

    'ct.send':'Kirim Pesan ✉️',
    'ct.sent':'Pesan terkirim! Terima kasih.',

    /* FOOTER */
    'footer.tagline':'Membangun masa depan digital, satu baris kode pada satu waktu.',
    'footer.nav':'Navigasi',
    'footer.social':'Social',
    'footer.crafted':'Crafted with ❤️ & ☕',
  },

  en: {
    'loading':'Loading...',
    'nav.about':'About',
    'nav.skills':'Skills',
    'nav.exp':'Experience',
    'nav.portfolio':'Portfolio',
    'nav.contact':'Contact',

    'hero.available':'Available for New Opportunities',
    'hero.iam':'I am\u00a0',
    'hero.bio':'Information Systems student passionate about building elegant, functional, and impactful digital experiences.',
    'hero.cv':'Download CV',
    'hero.contact':'Contact Me',
    'hero.scroll':'Scroll down',

    'about.eyebrow':'About Me',
    'about.title1':'Who ',
    'about.title2':'Am I?',
    'about.lead':'Hello! I\'m <strong>Muhammad Adi Indrawan</strong>, an Information Systems student at UISI passionate about technology.',
    'about.p1':'I have a deep interest in web development, UI/UX design, and modern information system development.',
    'about.p2':'I believe the best technology is invisible — seamless, natural, and empowering.',

    'chip.solver':'🎯 Problem Solver',
    'chip.creative':'🎨 Creative Thinker',
    'chip.tech':'💡 Tech Enthusiast',
    'chip.learner':'📚 Life Learner',

    'stat.projects':'Projects Done',
    'stat.certs':'Certificates',
    'stat.orgs':'Organizations',
    'stat.commit':'Dedication',

    'skills.eyebrow':'Skills',
    'skills.title':'Stack',
    'skills.level':'Proficiency Level',
    'skills.comp':'Competencies',

    /* TIMELINE */
    'tl.eyebrow':'Journey',
    'tl.title1':'Education & ',
    'tl.title2':'Experience',

    'now':'Present',

    'badge.edu':'Education',
    'badge.exp':'Experience',
    'badge.proj':'Project',
    'badge.org':'Organization',

    /* TL0 */
    'tl0.title':'Bachelor of Information Systems',
    'tl0.desc':'Studying Information Systems focusing on web development, system analysis, and database management. Active in academic and organizational activities.',

    /* TL1 */
    'tl1.title':'Software Engineering Major',
    'tl1.place':'SMK SEMEN GRESIK',
    'tl1.desc':'Completed vocational high school education for 3 years focusing on programming fundamentals, software development, and computer systems.',

    /* TL2 */
    'tl2.title':'IT Staff Internship',
    'tl2.place':'Gresik Police Office – Information & Communication Technology Division',
    'tl2.desc':'Involved in network maintenance, administrative management, and operational technical support within the institution.',

    /* TL3 */
    'tl3.title':'Dunia Styrofoam Gresik Website',
    'tl3.place':'Vocational School Final Project',
    'tl3.desc':'Built a static website using HTML, CSS, and JavaScript while also providing digital marketing assistance for local MSMEs.',

    /* TL4 */
    'tl4.title':'Cadre Department Expert Staff',
    'tl4.place':'UISI Islamic Da’wah Organization',
    'tl4.desc':'Actively participated in organizational activities while developing leadership, communication, and teamwork skills.',

    /* TL5 */
    'tl5.title':'Chief Executive of Islamic Basic Mentoring UISI 2025',
    'tl5.place':'Campus religious mentoring program organized by UISI Islamic Organization',
    'tl5.desc':'Responsible for coordinating a mentoring program for more than 400 new Muslim students, including mentor recruitment, School of Mentor activities, committee coordination, and mentoring events.',

    /* PORTFOLIO */
    'pf.eyebrow':'Work',
    'pf.title':'Portfolio',
    'pf.view':'View Project',

    'pf0.title':'Information System Website',
    'pf0.desc':'PHP & MySQL-based web data management application with authentication and dynamic reports.',

    'pf1.title':'Modern Dashboard UI Design',
    'pf1.desc':'Modern analytics dashboard design with clean and intuitive components.',

    'pf2.title':'Website Styrofoam word Gresik',
    'pf2.desc':'project web static umkm desa pongangan (dunia styroform gresik)',

    /* CONTACT */
    'ct.eyebrow':'Contact',
    'ct.title1':'Let\'s ',
    'ct.title2':'Collaborate',

    'ct.sub':'Have an interesting project? Or just want to connect? I’m always open to new opportunities!',

    'ct.infoTitle':'Contact Info',
    'ct.emailLbl':'Email',
    'ct.locLbl':'Location',
    'ct.uniLbl':'University',
    'ct.findMe':'Find Me On',

    'ct.formTitle':'Send Message',
    'ct.nameLabel':'Full Name',
    'ct.emailLabel':'Email',
    'ct.msgLabel':'Message',

    'ct.send':'Send Message ✉️',
    'ct.sent':'Message sent! Thank you.',

    /* FOOTER */
    'footer.tagline':'Building the digital future, one line of code at a time.',
    'footer.nav':'Navigation',
    'footer.social':'Social',
    'footer.crafted':'Crafted with ❤️ & ☕',
  }
};

/* ── Typing strings per language ── */
const TYPING = {
  id: [
    'Web Developer',
    'UI/UX Designer',
    'Frontend Engineer',
    'Mahasiswa Sistem Informasi',
    'Problem Solver'
  ],

  en: [
    'Web Developer',
    'UI/UX Designer',
    'Frontend Engineer',
    'Information Systems Student',
    'Problem Solver'
  ]
};

/* ── State ── */
let currentLang  = localStorage.getItem('lang')  || 'id';
let currentTheme = localStorage.getItem('theme') || 'dark';
let typingActive = true;

/* ── DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  applyTheme(currentTheme);
  applyLang(currentLang, true);
  initThemeToggle();
  initLangToggle();
  initCursor();
  initNavbar();
  initHamburger();
  initStarCanvas();
  initParticles();
  initShootingStars();
  initScrollReveal();
  initSkillBars();
  initCounters();
  initTyping();
  initLazyImages();
  initAvatarFallback();
  initContactForm();
  initBackToTop();
  initScrollProgress();
  initMagnet();
  initCardTilt();
  initParallaxScroll();
  initRipple();
  initSmoothScroll();
  document.getElementById('yr').textContent = new Date().getFullYear();
  console.log('%c MAI Portfolio v2 %c Web Dev & UI Designer ',
    'background:linear-gradient(135deg,#6366F1,#06B6D4);color:#fff;padding:5px 12px;border-radius:4px 0 0 4px;font-weight:900;',
    'background:#0F172A;color:#6366F1;padding:5px 12px;border-radius:0 4px 4px 0;');
});

/* ══════════════════════════
   LOADER
══════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  const MIN = 2200;
  const t0 = Date.now();
  const done = () => {
    const wait = Math.max(0, MIN - (Date.now() - t0));
    setTimeout(() => {
      loader.classList.add('out');
      startTyping();
    }, wait);
  };
  if (document.readyState === 'complete') done();
  else window.addEventListener('load', done);
  setTimeout(done, MIN + 600);
}

/* ══════════════════════════
   THEME
══════════════════════════ */
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = t === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('theme', t);
  currentTheme = t;
}
function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
}

/* ══════════════════════════
   LANGUAGE
══════════════════════════ */
function applyLang(lang, init) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.dataset.lang = lang;
  const map = T[lang] || T.id;
  document.querySelectorAll('[data-id]').forEach(el => {
    const key = el.dataset.id;
    if (map[key] !== undefined) el.innerHTML = map[key];
  });
  const flag = document.getElementById('langFlag');
  const txt  = document.getElementById('langText');
  if (flag) flag.textContent = lang === 'id' ? '🇮🇩' : '🇬🇧';
  if (txt)  txt.textContent  = lang === 'id' ? 'ID' : 'EN';
  if (!init) restartTyping();
}
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (btn) btn.addEventListener('click', () => applyLang(currentLang === 'id' ? 'en' : 'id'));
}

/* ══════════════════════════
   CURSOR
══════════════════════════ */
function initCursor() {
  if (window.innerWidth <= 768) return;
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
  (function loop(){ rx+=(mx-rx)*0.1; ry+=(my-ry)*0.1; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
  document.addEventListener('mouseleave',()=>{ dot.style.opacity='0'; ring.style.opacity='0'; });
  document.addEventListener('mouseenter',()=>{ dot.style.opacity='1'; ring.style.opacity='1'; });
}

/* ══════════════════════════
   NAVBAR
══════════════════════════ */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const links = document.querySelectorAll('.nl');
  const sections = document.querySelectorAll('main section[id]');
  if (!nav) return;
  let last=0, ticking=false;
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking=false; }); ticking=true; }
  }, { passive:true });
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    nav.classList.toggle('hide', y > last + 5 && y > 300);
    if (y < last) nav.classList.remove('hide');
    last = y;
    let cur='';
    sections.forEach(s => { if (y >= s.offsetTop - 130) cur = s.id; });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#'+cur));
    document.getElementById('btt')?.classList.toggle('vis', y > 600);
  }
}

/* ══════════════════════════
   HAMBURGER
══════════════════════════ */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nl  = document.getElementById('navLinks');
  if (!btn||!nl) return;
  btn.addEventListener('click', () => {
    const open = nl.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
  nl.querySelectorAll('.nl').forEach(l => {
    l.addEventListener('click', () => { nl.classList.remove('open'); btn.classList.remove('open'); btn.setAttribute('aria-expanded',false); });
  });
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !nl.contains(e.target)) {
      nl.classList.remove('open'); btn.classList.remove('open'); btn.setAttribute('aria-expanded',false);
    }
  });
}

/* ══════════════════════════
   STAR CANVAS (Animated Sky)
══════════════════════════ */
function initStarCanvas() {
  const canvas = document.getElementById('starCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars=[];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive:true });

  // Create stars
  function makeStar() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.04 + 0.01,
      alpha: Math.random(),
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      alphaSpeed: Math.random() * 0.006 + 0.002,
    };
  }
  const COUNT = Math.min(180, Math.floor(W * H / 6000));
  for (let i=0; i<COUNT; i++) stars.push(makeStar());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.alpha += s.alphaDir * s.alphaSpeed;
      if (s.alpha >= 1)   { s.alphaDir=-1; s.alpha=1; }
      if (s.alpha <= 0.1) { s.alphaDir=1;  }
      s.y -= s.speed;
      if (s.y < 0) { s.y = H; s.x = Math.random()*W; }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha * 0.85})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ══════════════════════════
   FLOATING PARTICLES
══════════════════════════ */
function initParticles() {
  const wrap = document.getElementById('particles');
  if (!wrap) return;
  const COUNT = 20;
  for (let i=0; i<COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random()*2 + 1;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*20+15}s;
      animation-delay:${Math.random()*20}s;
      opacity:${Math.random()*0.4+0.1};
    `;
    wrap.appendChild(p);
  }
}

/* ══════════════════════════
   SHOOTING STARS
══════════════════════════ */
function initShootingStars() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  function shoot() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    const len = Math.random()*120+60;
    const angle = Math.random()*15+5; // degrees
    star.style.cssText = `
      width:${len}px;
      top:${Math.random()*40}%;
      left:${Math.random()*60+20}%;
      transform:rotate(${angle}deg);
    `;
    hero.appendChild(star);
    setTimeout(() => star.remove(), 900);
  }
  // Random interval
  const interval = () => setTimeout(() => { shoot(); interval(); }, Math.random()*5000+3000);
  setTimeout(interval, 2000);
}

/* ══════════════════════════
   SCROLL REVEAL
══════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-fade,.reveal-left,.reveal-right,.reveal-slide-right');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
    });
  }, { threshold:0.1, rootMargin:'0px 0px -50px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ══════════════════════════
   SKILL BARS
══════════════════════════ */
function initSkillBars() {
  const bars = document.querySelectorAll('.bar-fill');
  const pcts = document.querySelectorAll('.bar-pct');
  let done = false;
  const obs = new IntersectionObserver(entries => {
    if (done) return;
    if (entries.some(e => e.isIntersecting)) {
      done = true;
      bars.forEach((b,i) => setTimeout(() => { b.style.width = b.dataset.w + '%'; }, i*80));
      pcts.forEach((p,i) => setTimeout(() => animNum(p,0,+p.dataset.p,'%',1200), i*80));
      obs.disconnect();
    }
  }, { threshold:0.2 });
  const sec = document.getElementById('skills');
  if (sec) obs.observe(sec);
}

/* ══════════════════════════
   COUNTERS
══════════════════════════ */
function initCounters() {
  const els = document.querySelectorAll('.stat-n');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        animNum(el, 0, +el.dataset.target, el.dataset.suffix||'', 1600);
        obs.unobserve(el);
      }
    });
  }, { threshold:0.5 });
  els.forEach(el => obs.observe(el));
}
function animNum(el, from, to, suffix, dur) {
  const t0 = performance.now();
  const run = now => {
    const p = Math.min((now-t0)/dur, 1);
    const e = 1-Math.pow(1-p,3);
    el.textContent = Math.round(from+(to-from)*e) + suffix;
    if (p<1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}

/* ══════════════════════════
   TYPING ANIMATION
══════════════════════════ */
let typingTimer = null;
let typingStr=0, typingCh=0, typingDel=false, typingPaused=false;

function initTyping() { /* started after loader */ }
function startTyping() {
  typingActive = true;
  typingStr=0; typingCh=0; typingDel=false; typingPaused=false;
  scheduleTyping();
}
function restartTyping() {
  clearTimeout(typingTimer);
  typingStr=0; typingCh=0; typingDel=false; typingPaused=false;
  scheduleTyping();
}
function scheduleTyping() {
  if (!typingActive) return;
  const el = document.getElementById('typingEl');
  if (!el) return;
  const strings = TYPING[currentLang] || TYPING.id;
  const cur = strings[typingStr];
  if (!typingDel) {
    el.textContent = cur.slice(0, typingCh+1);
    typingCh++;
    if (typingCh === cur.length) {
      typingPaused = true;
      typingTimer = setTimeout(() => { typingPaused=false; typingDel=true; scheduleTyping(); }, 2400);
      return;
    }
  } else {
    el.textContent = cur.slice(0, typingCh-1);
    typingCh--;
    if (typingCh === 0) {
      typingDel = false;
      typingStr = (typingStr+1) % strings.length;
    }
  }
  typingTimer = setTimeout(scheduleTyping, typingDel ? 55 : 100);
}

/* ══════════════════════════
   LAZY IMAGES
══════════════════════════ */
function initLazyImages() {
  const imgs = document.querySelectorAll('img.lazy');
  if (!imgs.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src || img.src;
        img.onload  = () => { img.classList.add('loaded'); };
        img.onerror = () => { img.classList.add('err'); };
        obs.unobserve(img);
      }
    });
  }, { threshold:0.05 });
  imgs.forEach(img => obs.observe(img));
}

/* ══════════════════════════
   AVATAR FALLBACK
══════════════════════════ */
function initAvatarFallback() {
  const img = document.getElementById('avatarImg');
  const fb  = document.getElementById('avatarFallback');
  if (!img||!fb) return;
  const show = () => { img.style.display='none'; fb.style.display='flex'; };
  img.addEventListener('error', show);
  img.addEventListener('load',  () => { img.classList.add('loaded'); fb.style.display='none'; });
  if (img.complete && img.naturalWidth) { img.classList.add('loaded'); fb.style.display='none'; }
  else if (img.complete) show();
}

/* ══════════════════════════
   CONTACT FORM
══════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const fName  = document.getElementById('fName');
  const fEmail = document.getElementById('fEmail');
  const fMsg   = document.getElementById('fMsg');
  const nErr   = document.getElementById('nameErr');
  const eErr   = document.getElementById('emailErr');
  const mErr   = document.getElementById('msgErr');
  const ok     = document.getElementById('formOk');
  const btn    = document.getElementById('submitBtn');

  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const clr = el => { if(el) el.textContent=''; };
  const err = (el,m) => { if(el) el.textContent=m; };

  fName?.addEventListener('input',  () => { if(fName.value.trim().length>=2)  clr(nErr); });
  fEmail?.addEventListener('input', () => { if(isEmail(fEmail.value.trim()))  clr(eErr); });
  fMsg?.addEventListener('input',   () => { if(fMsg.value.trim().length>=10)  clr(mErr); });

  form.addEventListener('submit', e => {
    e.preventDefault(); clr(nErr); clr(eErr); clr(mErr);
    let valid = true;
    const lang = currentLang;
    if (!fName||fName.value.trim().length<2)      { err(nErr, lang==='id'?'Nama minimal 2 karakter.':'Name must be at least 2 characters.'); valid=false; }
    if (!fEmail||!isEmail(fEmail.value.trim()))    { err(eErr, lang==='id'?'Email tidak valid.':'Invalid email address.'); valid=false; }
    if (!fMsg||fMsg.value.trim().length<10)        { err(mErr, lang==='id'?'Pesan minimal 10 karakter.':'Message must be at least 10 characters.'); valid=false; }
    if (!valid) return;

    const txt = btn.querySelector('.btn-text');
    if(txt) txt.textContent = lang==='id'?'Mengirim...':'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      if(txt) txt.textContent = T[lang]['ct.send'];
      btn.disabled = false;
      form.reset();
      ok?.classList.add('show');
      setTimeout(() => ok?.classList.remove('show'), 5000);
    }, 1800);
  });
}

/* ══════════════════════════
   BACK TO TOP
══════════════════════════ */
function initBackToTop() {
  document.getElementById('btt')?.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
}

/* ══════════════════════════
   SCROLL PROGRESS BAR
══════════════════════════ */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const d = document.documentElement;
    const pct = (d.scrollTop) / (d.scrollHeight - d.clientHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive:true });
}

/* ══════════════════════════
   MAGNETIC BUTTONS
══════════════════════════ */
function initMagnet() {
  if (window.innerWidth <= 768) return;
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width/2) * 0.25;
      const dy = (e.clientY - r.top  - r.height/2) * 0.25;
      btn.style.transform = `translate(${dx}px,${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform=''; });
  });
}

/* ══════════════════════════
   CARD TILT (Portfolio)
══════════════════════════ */
function initCardTilt() {
  if (window.innerWidth <= 768) return;
  document.querySelectorAll('.pf-card, .stat-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width  - 0.5;
      const y = (e.clientY-r.top) /r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y*6}deg) rotateY(${x*6}deg) translateY(-5px)`;
      card.style.transition = 'transform 0.15s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s var(--ease)';
    });
  });
}

/* ══════════════════════════
   PARALLAX SCROLL
══════════════════════════ */
function initParallaxScroll() {
  const nebulae = document.querySelectorAll('.sky-nebula');
  const grid    = document.querySelector('.sky-grid');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nebulae.forEach((n,i) => { n.style.transform = `translateY(${y*(i%2===0?0.08:-0.06)}px) scale(${1+y*0.0001})`; });
    if (grid) grid.style.transform = `translateY(${y*0.12}px)`;
  }, { passive:true });
  // Mouse parallax on hero
  if (window.innerWidth > 768) {
    document.querySelector('.hero')?.addEventListener('mousemove', e => {
      const cx = (e.clientX/window.innerWidth  - 0.5) * 20;
      const cy = (e.clientY/window.innerHeight - 0.5) * 10;
      nebulae.forEach((n,i) => {
        const d = (i+1)*0.4;
        n.style.transform = `translate(${cx*d}px,${cy*d}px)`;
      });
    });
  }
}

/* ══════════════════════════
   RIPPLE
══════════════════════════ */
function initRipple() {
  document.querySelectorAll('.btn-primary,.btn-ghost').forEach(btn => {
    btn.addEventListener('click', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX-r.left, y = e.clientY-r.top;
      const rip = document.createElement('span');
      rip.style.cssText = `
        position:absolute; border-radius:50%; pointer-events:none;
        width:4px; height:4px;
        left:${x-2}px; top:${y-2}px;
        background:rgba(255,255,255,0.3);
        animation:rippleAnim 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
      `;
      if (!document.getElementById('ripStyle')) {
        const s = document.createElement('style');
        s.id='ripStyle';
        s.textContent='@keyframes rippleAnim{from{transform:scale(1);opacity:0.5}to{transform:scale(80);opacity:0}}';
        document.head.appendChild(s);
      }
      btn.style.position='relative'; btn.style.overflow='hidden';
      btn.appendChild(rip);
      setTimeout(()=>rip.remove(), 750);
    });
  });
}

/* ══════════════════════════
   SMOOTH SCROLL
══════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id==='#') { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); return; }
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const navH = +getComputedStyle(document.documentElement).getPropertyValue('--nav-h').replace('px','') || 70;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior:'smooth' });
      }
    });
  });
  
}


