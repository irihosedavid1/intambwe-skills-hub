/**
 * state.js — Intambwe Skills Hub
 * Central localStorage state manager + seed data
 */

const ISH = (() => {
  /* ── Keys ──────────────────────────────────────────────── */
  const K = {
    USERS:        'ish_users',
    CURRENT_USER: 'ish_current_user',
    QUIZ_RESULTS: 'ish_quiz_results',
    BADGES:       'ish_badges',
    OPPS:         'ish_opportunities',
    APPS:         'ish_applications',
  };

  /* ── Helpers ────────────────────────────────────────────── */
  const get = key => JSON.parse(localStorage.getItem(key) || '[]');
  const set = (key, val) => localStorage.setItem(key, JSON.stringify(val));
  const uid = () => '_' + Math.random().toString(36).slice(2, 9);

  /* ── Path Helper ────────────────────────────────────────── */
  function getHomePath() {
    const path = window.location.pathname;
    return path.includes('/pages/') ? '../index.html' : 'index.html';
  }

  function getPagePath(name) {
    const path = window.location.pathname;
    return path.includes('/pages/') ? name + '.html' : 'pages/' + name + '.html';
  }

  /* ── Init / Seed ────────────────────────────────────────── */
  function initialize() {
    if (!localStorage.getItem('ish_seeded')) {
      const users = [
        {
          id: 'admin_1',
          name: 'Admin Uwimana',
          email: 'admin@intambwe.rw',
          password: 'admin123',
          role: 'admin',
          createdAt: new Date().toISOString(),
          approved: true
        },
        {
          id: 'student_demo',
          name: 'Marie Mukamana',
          email: 'student@intambwe.rw',
          password: 'student123',
          role: 'student',
          university: 'University of Rwanda',
          field: 'Computer Science',
          createdAt: new Date().toISOString(),
          approved: true
        },
        {
          id: 'employer_demo',
          name: 'Jean Bizimana',
          email: 'employer@intambwe.rw',
          password: 'employer123',
          role: 'employer',
          company: 'Kigali Tech Solutions',
          sector: 'Information Technology',
          createdAt: new Date().toISOString(),
          approved: true
        }
      ];
      set(K.USERS, users);

      const badges = [
        {
          id: uid(), userId: 'student_demo',
          courseId: 'digital-marketing',
          courseName: 'Digital Marketing Basics',
          icon: 'smartphone', score: 85, earnedAt: '2026-10-15T10:00:00Z'
        },
        {
          id: uid(), userId: 'student_demo',
          courseId: 'communication',
          courseName: 'Business Communication',
          icon: 'message-circle', score: 92, earnedAt: '2026-10-20T14:00:00Z'
        }
      ];
      set(K.BADGES, badges);

      const results = [
        { userId: 'student_demo', courseId: 'digital-marketing', score: 85, passed: true, date: '2026-10-15T10:00:00Z' },
        { userId: 'student_demo', courseId: 'communication',      score: 92, passed: true, date: '2026-10-20T14:00:00Z' }
      ];
      set(K.QUIZ_RESULTS, results);

      const opps = [
        {
          id: 'opp_1', employerId: 'employer_demo',
          title: 'Junior Web Developer Intern',
          company: 'Kigali Tech Solutions',
          companyIcon: 'monitor',
          type: 'Internship', category: 'Technology',
          location: 'Kigali, Rwanda',
          description: 'Join our team to build real-world web applications. You will work on live client projects using HTML, CSS, JavaScript and React. Great opportunity to build your portfolio.',
          requirements: 'Basic HTML/CSS knowledge, eagerness to learn, good communication',
          deadline: '2026-12-31',
          status: 'active',
          createdAt: '2026-11-01T08:00:00Z'
        },
        {
          id: 'opp_2', employerId: 'employer_demo',
          title: 'Digital Marketing Assistant',
          company: 'Rwanda Digital Agency',
          companyIcon: 'megaphone',
          type: 'Part-time', category: 'Marketing',
          location: 'Remote / Kigali',
          description: 'Help us manage social media accounts, create content, and run ad campaigns for our clients. Flexible hours, great for students.',
          requirements: 'Social media knowledge, creativity, digital marketing basics badge preferred',
          deadline: '2026-12-15',
          status: 'active',
          createdAt: '2026-11-02T09:00:00Z'
        },
        {
          id: 'opp_3', employerId: 'employer_demo',
          title: 'Data Entry & Excel Analyst',
          company: 'FinServ Rwanda',
          companyIcon: 'bar-chart-2',
          type: 'Gig', category: 'Finance',
          location: 'Kigali, Rwanda',
          description: 'Short-term data project (4 weeks). Requires strong Excel skills to clean and analyze our financial data for a quarterly report.',
          requirements: 'Proficiency in Microsoft Excel, attention to detail, available immediately',
          deadline: '2026-11-30',
          status: 'active',
          createdAt: '2026-11-05T10:00:00Z'
        },
        {
          id: 'opp_4', employerId: 'employer_demo',
          title: 'Customer Service Representative',
          company: 'Telecom Rwanda',
          companyIcon: 'phone',
          type: 'Full-time', category: 'Customer Service',
          location: 'Kigali, Rwanda',
          description: 'Handle customer inquiries, complaints, and provide excellent service. Training provided. Great first job for recent graduates.',
          requirements: 'Good communication, patience, Kinyarwanda + French or English',
          deadline: '2026-12-20',
          status: 'active',
          createdAt: '2026-11-07T11:00:00Z'
        }
      ];
      set(K.OPPS, opps);
      set(K.APPS, []);

      localStorage.setItem('ish_seeded', 'true');
    }
  }

  /* ── Auth ───────────────────────────────────────────────── */
  function getCurrentUser() {
    const id = localStorage.getItem(K.CURRENT_USER);
    if (!id) return null;
    return getUser(id);
  }

  function setCurrentUser(id) {
    localStorage.setItem(K.CURRENT_USER, id);
  }

  function logout() {
    localStorage.removeItem(K.CURRENT_USER);
    window.location.href = getHomePath();
  }

  function login(email, password) {
    const users = get(K.USERS);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Invalid email or password.' };
    if (user.role === 'employer' && !user.approved) {
      return { ok: false, error: 'Your employer account is pending admin approval.' };
    }
    setCurrentUser(user.id);
    return { ok: true, user };
  }

  function register(data) {
    const users = get(K.USERS);
    if (users.find(u => u.email === data.email)) {
      return { ok: false, error: 'An account with this email already exists.' };
    }
    const user = {
      id: uid(),
      ...data,
      createdAt: new Date().toISOString(),
      approved: data.role !== 'employer'
    };
    users.push(user);
    set(K.USERS, users);
    if (data.role !== 'employer') {
      setCurrentUser(user.id);
    }
    return { ok: true, user };
  }

  function requireAuth(allowedRoles) {
    const user = getCurrentUser();
    if (!user) {
      window.location.href = getPagePath('auth');
      return null;
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      window.location.href = getPagePath('dashboard');
      return null;
    }
    return user;
  }

  /* ── Users ──────────────────────────────────────────────── */
  function getUser(id) {
    return get(K.USERS).find(u => u.id === id) || null;
  }

  function getUsers() { return get(K.USERS); }

  function updateUser(id, updates) {
    const users = get(K.USERS);
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return false;
    users[idx] = { ...users[idx], ...updates };
    set(K.USERS, users);
    return true;
  }

  /* ── Quiz Results ───────────────────────────────────────── */
  function getQuizResults(userId) {
    return get(K.QUIZ_RESULTS).filter(r => r.userId === userId);
  }

  function saveQuizResult(result) {
    const results = get(K.QUIZ_RESULTS);
    const idx = results.findIndex(r => r.userId === result.userId && r.courseId === result.courseId);
    if (idx >= 0) results[idx] = result;
    else results.push(result);
    set(K.QUIZ_RESULTS, results);
  }

  function hasPassedCourse(userId, courseId) {
    return get(K.QUIZ_RESULTS).some(r => r.userId === userId && r.courseId === courseId && r.passed);
  }

  /* ── Badges ─────────────────────────────────────────────── */
  function getBadges(userId) {
    return get(K.BADGES).filter(b => b.userId === userId);
  }

  function awardBadge(userId, course, score) {
    const badges = get(K.BADGES);
    if (badges.find(b => b.userId === userId && b.courseId === course.id)) return;
    badges.push({
      id: uid(),
      userId, courseId: course.id,
      courseName: course.title,
      icon: course.icon, score,
      earnedAt: new Date().toISOString()
    });
    set(K.BADGES, badges);
  }

  /* ── Opportunities ──────────────────────────────────────── */
  function getOpportunities(filter = {}) {
    let opps = get(K.OPPS);
    if (filter.status)   opps = opps.filter(o => o.status === filter.status);
    if (filter.employer) opps = opps.filter(o => o.employerId === filter.employer);
    return opps.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  function saveOpportunity(opp) {
    const opps = get(K.OPPS);
    if (opp.id) {
      const idx = opps.findIndex(o => o.id === opp.id);
      if (idx >= 0) { opps[idx] = opp; set(K.OPPS, opps); return opp; }
    }
    const newOpp = { ...opp, id: uid(), createdAt: new Date().toISOString(), status: 'pending' };
    opps.push(newOpp);
    set(K.OPPS, opps);
    return newOpp;
  }

  function approveOpportunity(id) {
    const opps = get(K.OPPS);
    const idx = opps.findIndex(o => o.id === id);
    if (idx >= 0) { opps[idx].status = 'active'; set(K.OPPS, opps); }
  }

  function rejectOpportunity(id) {
    const opps = get(K.OPPS);
    const idx = opps.findIndex(o => o.id === id);
    if (idx >= 0) { opps[idx].status = 'rejected'; set(K.OPPS, opps); }
  }

  /* ── Applications ───────────────────────────────────────── */
  function getApplications(filter = {}) {
    let apps = get(K.APPS);
    if (filter.userId) apps = apps.filter(a => a.studentId === filter.userId);
    if (filter.oppId)  apps = apps.filter(a => a.opportunityId === filter.oppId);
    return apps;
  }

  function applyToOpportunity(studentId, opportunityId) {
    const apps = get(K.APPS);
    if (apps.find(a => a.studentId === studentId && a.opportunityId === opportunityId)) {
      return { ok: false, error: 'You have already applied to this opportunity.' };
    }
    apps.push({
      id: uid(), studentId, opportunityId,
      status: 'applied', appliedAt: new Date().toISOString()
    });
    set(K.APPS, apps);
    return { ok: true };
  }

  function hasApplied(studentId, opportunityId) {
    return get(K.APPS).some(a => a.studentId === studentId && a.opportunityId === opportunityId);
  }

  /* ── Toast ──────────────────────────────────────────────── */
  function toast(msg, type = 'success', duration = 3500) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<span>${msg}</span>`;
    container.appendChild(t);
    setTimeout(() => {
      t.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(() => t.remove(), 300);
    }, duration);
  }

  /* ── Lucide Icon Helper ────────────────────────────────── */
  function renderIcon(name, extraClass) {
    return `<i data-lucide="${name}"${extraClass ? ' class="' + extraClass + '"' : ''}></i>`;
  }

  /* ── Public API ─────────────────────────────────────────── */
  return {
    initialize,
    getCurrentUser, setCurrentUser, logout, login, register, requireAuth,
    getUser, getUsers, updateUser,
    getQuizResults, saveQuizResult, hasPassedCourse,
    getBadges, awardBadge,
    getOpportunities, saveOpportunity, approveOpportunity, rejectOpportunity,
    getApplications, applyToOpportunity, hasApplied,
    toast, renderIcon,
    getHomePath, getPagePath
  };
})();

ISH.initialize();
