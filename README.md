#Aki Novero — Personal Web Portfolio
A clean, responsive, multi-page portfolio website designed for Aki Novero, a Multimedia Arts student specializing in graphic design, traditional art, film, animation, and web design.

#Key Features
- Multi-Page Semantic Structure: Organized across four distinct pages (Home, About, Skills, Contact) using semantic HTML5 elements.
- Dark / Light Theme Toggle: Seamless theme switching powered by CSS custom properties (:root variables) and data-theme attribute toggling.
- Zero-Flash Theme Bootstrapping (theme-bootstrap.js): Synchronously reads saved theme preferences from localStorage before page rendering, preventing a Flash of Unstyled Content (FOUC).
- Visitor Personalization: Visitors can input and save their name, which immediately updates the welcome greeting across sessions without requiring a page refresh.
- Visit Tracking: Tracks and displays the user's previous session timestamp using the browser's localStorage API.
- Responsive Layout: Adaptive design using CSS Flexbox and CSS Grid that adjusts for desktop, tablet, and mobile viewport sizes (breakpoint at 700px).
- Interactive Contact Form: Standardized HTML5 form validation paired with client-side event handling for instant submission feedback.

#Directory & File Structure

portfolio/
├── index.html           # Landing page with hero greeting & personalization form
├── about.html           # Student background & visual storytelling summary
├── skills.html          # Responsive 3-column grid highlighting core competencies
├── contact.html         # Interactive contact form page
├── css/
│   └── styles.css       # Global styles, CSS variables, dark mode styles & media queries
└── js/
    ├── theme-bootstrap.js # Early-execution script for theme restoration
    ├── settings.js        # Data manager for saving/loading localStorage state
    └── app.js             # Event listeners & DOM logic for interactive features

#Technical Stack
- HTML5: Semantic markup (<header>, <main>, <section>, <article>, <footer>, <time>, <nav>).
- CSS3: Custom properties (CSS variables), Flexbox header/nav, CSS Grid layout (.skills-grid), smooth scrolling, transitions, and media queries (max-width: 700px).
- JavaScript (ES6+): Object destructuring, standard DOM manipulation, client-side data validation, template strings, localStorage API, and event handling (submit, change).

#Settings and State Work
- theme-bootstrap.js: Loaded in the <head> of every page. Reads portfolioSettings from localStorage, sets document.documentElement.dataset.theme, and assigns window.restoredSettings.
- settings.js: Exposes window.portfolioSettings.save() to securely update localStorage using structured data verification and try...catch safety.
- app.js: Handles user interactions—updating the visitor's greeting, toggling theme state on input, updating last visit timestamps, and managing contact form responses.

#Getting Started
- Clone or download the repository files.
- Ensure the directory structure places CSS in css/ and JS files in js/.
- Open index.html directly in any standard web browser, or serve using a static web server (such as Live Server for VS Code).

#Author
- Aki Novero
- Multimedia Arts Student
- Copyright © 2026 Aki Novero. All rights reserved.
