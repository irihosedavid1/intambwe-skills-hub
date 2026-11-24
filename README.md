# Intambwe Skills Hub

> **Learn. Prove. Get Hired.** — Rwanda's skills-to-employment platform for youth.

Intambwe Skills Hub is a web platform that connects free skill courses, quiz-verified digital badges, and local employer opportunities — all in one mobile-friendly platform built for Rwandan youth.

---

## Project Overview

**Problem:** Rwandan youth (ages 16–30) have skills but lack a simple, trusted way to prove them to employers. Opportunities are scattered across social media and global platforms not designed for local needs. According to the National Institute of Statistics of Rwanda (NISR, 2026), youth unemployment stood at 14.7% in 2025, with labour underutilization among youth reaching 56.7%.

**Solution:** Intambwe Skills Hub provides:
- **Free skill courses** relevant to the Rwandan job market
- **Quiz-verified digital badges** that prove skills to employers
- **Local opportunity listings** from verified Rwandan employers
- **Admin oversight** for quality and trust

---

## Features

### For Students (Learners)
- **User Registration & Login** — Create a free student account with university and field of study
- **Student Profile** — View and edit personal information, track skills summary
- **Course Catalog** — Browse 8 free skill courses across Technology, Marketing, Business, Soft Skills, and Productivity
- **Course Detail View** — Watch embedded YouTube learning resources, view quiz info
- **Quiz Module** — Take timed (10 min) multiple-choice quizzes with instant visual feedback per question
- **Badge System** — Earn verified digital badges upon passing quizzes (70%+ score)
- **Badge Profile** — View all earned badges with scores, share profile link
- **Student Dashboard** — Track course progress, view badges, monitor applications, see recommended courses
- **Job Applications** — Browse and apply to local opportunities with one click
- **Application Tracking** — View status of all submitted applications

### For Employers
- **Employer Registration** — Register as an employer (pending admin approval)
- **Employer Profile** — View and edit company information, track account status
- **Employer Dashboard** — Manage postings, view applicant details
- **Post Opportunities** — Create internship, part-time, full-time, and gig postings with descriptions and deadlines
- **Manage Applicants** — View applicant names, universities, fields, and application dates
- **Application Review** — See which students applied to each posting

### For Admins
- **Admin Panel** — Central management hub with tabs for Users, Opportunities, and Overview
- **Employer Approval** — Approve or reject new employer registrations
- **Opportunity Approval** — Review, approve, or reject employer-posted opportunities before they go live
- **User Management** — View all users filtered by role, with details and status
- **Platform Overview** — Monitor course performance, quiz statistics, badge counts, and recent activity
- **Data Reset** — Reset demo data for testing purposes

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No server or database required — the app runs entirely in the browser using `localStorage`

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/irihosedavid1/intambwe-skills-hub.git
   cd intambwe-skills-hub
   ```

2. **Open the project**

   **Option A: Open directly in browser**
   - Open `index.html` in your web browser (double-click the file)

   **Option B: Use a local development server (recommended)**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   # Then open http://localhost:8000 in your browser

   # OR using Node.js (if installed)
   npx serve .
   # Then open the URL shown in terminal
   ```

3. **Login with demo accounts** (pre-seeded automatically on first visit)

   | Role     | Email                    | Password      |
   |----------|--------------------------|---------------|
   | Student  | student@intambwe.rw      | student123    |
   | Employer | employer@intambwe.rw     | employer123   |
   | Admin    | admin@intambwe.rw        | admin123      |

4. **Explore the platform**
   - **As Student:** Browse courses → Watch video → Take quiz → Earn badge → Apply to jobs
   - **As Employer:** View dashboard → Post opportunity → View applicants
   - **As Admin:** Manage users → Approve employers → Approve opportunities → View analytics

---

## Project Structure

```
intambwe-skills-hub/
├── index.html                      # Home / Landing page
├── README.md                       # This file
├── css/
│   └── style.css                   # Complete design system (1900+ lines)
├── js/
│   ├── state.js                    # Application state management (localStorage)
│   ├── nav.js                      # Shared navigation component (role-aware)
│   └── courses-data.js             # Course catalog with 8 courses + 56 quiz questions
├── pages/
│   ├── auth.html                   # Login / Registration page
│   ├── profile.html                # Student profile (view & edit)
│   ├── courses.html                # Course catalog with search & filters
│   ├── quiz.html                   # Quiz module with timer and scoring
│   ├── badges.html                 # Student badge profile & sharing
│   ├── dashboard.html              # Student dashboard
│   ├── opportunities.html          # Job opportunities listing
│   ├── employer-dashboard.html     # Employer dashboard
│   ├── employer-profile.html       # Employer profile (view & edit)
│   └── admin.html                  # Admin panel (users, opportunities, overview)
└── assets/
    └── hero_bg.jpg                 # Hero section background image
```

---

## Technology Stack

| Technology        | Purpose                                    |
|-------------------|--------------------------------------------|
| HTML5             | Page structure and semantic markup         |
| CSS3              | Styling, animations, responsive design     |
| Vanilla JavaScript| Application logic, DOM manipulation        |
| localStorage      | Client-side data persistence               |
| Lucide Icons      | Modern SVG icon library (via CDN)          |
| Google Fonts      | Typography (Outfit font family)            |

**No frameworks, no build tools, no backend** — the entire application runs in the browser.

---

## Sprint History (Agile Scrum)

| Sprint   | Duration | Deliverables |
|----------|----------|-------------|
| Sprint 1 | 2 weeks  | Home page with hero section, user registration & login, student profile |
| Sprint 2 | 2 weeks  | Course catalog page with filters, quiz module with timer and scoring |
| Sprint 3 | 2 weeks  | Badge system linked to quiz results, badge profile, course completion tracking |
| Sprint 4 | 2 weeks  | Employer registration, opportunity posting, student applications, employer dashboard |
| Sprint 5 | 2 weeks  | Admin panel (approve employers & opportunities), employer profile, testing & bug fixes |

---

## Responsive Design

The platform is built with a **mobile-first** approach:
- Hamburger navigation menu on small screens
- Responsive grid layouts that stack on mobile
- Touch-friendly buttons and form inputs
- Proper viewport meta tags on all pages
- Works on any device with a modern browser

---

## Course Catalog

| # | Course | Category | Difficulty | Duration | Questions |
|---|--------|----------|------------|----------|-----------|
| 1 | Digital Marketing Basics | Marketing | Beginner | 2 hrs | 7 |
| 2 | Python Programming Fundamentals | Technology | Beginner | 3 hrs | 7 |
| 3 | Microsoft Excel for Work | Productivity | Beginner | 2.5 hrs | 7 |
| 4 | Business Communication Skills | Soft Skills | Beginner | 1.5 hrs | 7 |
| 5 | Web Development Basics (HTML & CSS) | Technology | Beginner | 3 hrs | 7 |
| 6 | Financial Literacy & Entrepreneurship | Business | Beginner | 2 hrs | 7 |
| 7 | Data Analysis with Google Sheets | Technology | Intermediate | 2.5 hrs | 7 |
| 8 | Customer Service Excellence | Soft Skills | Beginner | 1.5 hrs | 7 |

Each course includes a YouTube learning resource and 7 quiz questions with instant feedback.

---

## Key User Flows

### Student Flow
1. Register/Login → Land on Student Dashboard
2. Browse Courses → Select a course → Watch video → Take Quiz
3. Score 70%+ → Earn verified badge → Badge appears on profile
4. Browse Opportunities → View details → Apply with one click
5. Track all progress and applications from Dashboard

### Employer Flow
1. Register as Employer → Account is pending admin approval
2. After approval, login → Land on Employer Dashboard
3. Post new opportunity with details → Submitted for admin approval
4. After opportunity approval → View incoming applicants
5. Manage postings and review applicant details

### Admin Flow
1. Login as Admin → Land on Admin Panel
2. Users Tab: View all users, approve/reject employers
3. Opportunities Tab: View all opportunities, approve/reject postings
4. Overview Tab: Monitor platform metrics and course performance

---

## Author

**IRIHOSE David**
African Leadership University (ALU)
Software Engineering

---

## License

This project is built for academic purposes as part of the ALU Software Engineering program.

---

## References

- National Institute of Statistics of Rwanda. (2026). *Labour force survey annual report 2025*.
  https://statistics.gov.rw/data-sources/surveys/Labour-Force-Survey
