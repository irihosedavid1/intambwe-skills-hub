/**
 * nav.js — Shared Navigation Component
 * Renders role-aware navbar into #nav-placeholder
 * Uses Lucide icons and relative paths
 */

function getBasePath() {
  const path = window.location.pathname;
  const inPages = path.includes('/pages/');
  return {
    home: inPages ? '../index.html' : 'index.html',
    page: function(name) { return inPages ? name + '.html' : 'pages/' + name + '.html'; }
  };
}

function renderNav(activePage) {
  const user = ISH.getCurrentUser();
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  const bp = getBasePath();
  let links = '';
  let actions = '';

  if (!user) {
    links = `
      <a href="${bp.home}"               class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
      <a href="${bp.page('courses')}"     class="nav-link ${activePage === 'courses' ? 'active' : ''}">Courses</a>
      <a href="${bp.page('opportunities')}" class="nav-link ${activePage === 'opportunities' ? 'active' : ''}">Opportunities</a>
    `;
    actions = `
      <a href="${bp.page('auth')}" class="btn btn-outline btn-sm">Sign In</a>
      <a href="${bp.page('auth')}?tab=register" class="btn btn-primary btn-sm">Get Started</a>
    `;
  } else if (user.role === 'student') {
    links = `
      <a href="${bp.page('dashboard')}"     class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">Dashboard</a>
      <a href="${bp.page('courses')}"       class="nav-link ${activePage === 'courses' ? 'active' : ''}">Courses</a>
      <a href="${bp.page('badges')}"        class="nav-link ${activePage === 'badges' ? 'active' : ''}">My Badges</a>
      <a href="${bp.page('opportunities')}" class="nav-link ${activePage === 'opportunities' ? 'active' : ''}">Opportunities</a>
    `;
    actions = `
      <a href="${bp.page('profile')}" class="nav-user" style="text-decoration:none">
        <div class="nav-avatar">${user.name.charAt(0).toUpperCase()}</div>
        <span>${user.name.split(' ')[0]}</span>
      </a>
      <button class="btn btn-ghost btn-sm" onclick="ISH.logout()">Sign Out</button>
    `;
  } else if (user.role === 'employer') {
    links = `
      <a href="${bp.page('employer-dashboard')}" class="nav-link ${activePage === 'employer' ? 'active' : ''}">My Dashboard</a>
      <a href="${bp.page('opportunities')}"      class="nav-link ${activePage === 'opportunities' ? 'active' : ''}">Browse All</a>
    `;
    actions = `
      <a href="${bp.page('employer-profile')}" class="nav-user" style="text-decoration:none">
        <div class="nav-avatar" style="background:linear-gradient(135deg,#F5A623,#C07D0B)">${user.name.charAt(0).toUpperCase()}</div>
        <span>${user.name.split(' ')[0]}</span>
      </a>
      <button class="btn btn-ghost btn-sm" onclick="ISH.logout()">Sign Out</button>
    `;
  } else if (user.role === 'admin') {
    links = `
      <a href="${bp.page('admin')}"         class="nav-link ${activePage === 'admin' ? 'active' : ''}">Admin Panel</a>
      <a href="${bp.page('opportunities')}" class="nav-link ${activePage === 'opportunities' ? 'active' : ''}">Opportunities</a>
      <a href="${bp.page('courses')}"       class="nav-link ${activePage === 'courses' ? 'active' : ''}">Courses</a>
    `;
    actions = `
      <div class="nav-user" style="border-color:rgba(214,48,49,0.3)">
        <div class="nav-avatar" style="background:linear-gradient(135deg,#D63031,#C0392B)">${user.name.charAt(0).toUpperCase()}</div>
        <span>${user.name.split(' ')[0]}</span>
        <span class="tag tag-red" style="font-size:0.65rem">Admin</span>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="ISH.logout()">Sign Out</button>
    `;
  }

  let mobileLinks = links.replace(/nav-link/g, 'nav-link w-full');

  placeholder.innerHTML = `
    <nav class="navbar" id="main-nav">
      <div class="nav-inner">
        <a href="${bp.home}" class="nav-logo">
          <div class="logo-icon"><i data-lucide="sprout"></i></div>
          Intambwe <span>Skills</span>
        </a>

        <div class="nav-links" id="nav-links">
          ${links}
        </div>

        <div class="nav-actions" id="nav-actions">
          ${actions}
        </div>

        <div class="nav-hamburger" id="hamburger" onclick="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <div class="nav-mobile-menu" id="mobile-menu">
      ${mobileLinks}
      <div style="display:flex;gap:0.5rem;padding-top:0.5rem;border-top:1px solid rgba(255,255,255,0.15)">
        ${!user
          ? `<a href="${bp.page('auth')}" class="btn btn-outline btn-sm w-full">Sign In</a>
             <a href="${bp.page('auth')}?tab=register" class="btn btn-primary btn-sm w-full">Get Started</a>`
          : `<button class="btn btn-ghost btn-sm w-full" onclick="ISH.logout()">Sign Out</button>`
        }
      </div>
    </div>
  `;

  // Initialize Lucide icons in nav
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('open');
}

// Scroll-based reveal
function initScrollReveal() {
  const els = document.querySelectorAll('.fade-in-up');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollReveal);
