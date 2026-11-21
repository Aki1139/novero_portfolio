const settings = {
  ...window.restoredSettings
};

const themeToggle = document.querySelector("#theme-toggle");
const visitorForm = document.querySelector("#visitor-form");
const visitorNameInput = document.querySelector("#visitor-name");
const visitorGreeting = document.querySelector("#visitor-greeting");
const lastVisitElement = document.querySelector("#last-visit");
const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

function displaySettings() {
  if (visitorNameInput) {
    visitorNameInput.value = settings.visitorName;
  }

  if (visitorGreeting) {
    visitorGreeting.textContent =
      settings.visitorName || "visitor";
  }

  if (lastVisitElement) {
    if (!settings.lastVisit) {
      lastVisitElement.textContent = "Never";
    } else {
      const date = new Date(settings.lastVisit);

      lastVisitElement.textContent = Number.isNaN(date.getTime())
        ? "Unknown"
        : date.toLocaleString();
    }
  }
}

function saveCurrentSettings() {
  window.portfolioSettings.save(settings);
}

if (themeToggle) {
  themeToggle.checked = settings.theme === "dark";

  themeToggle.addEventListener("change", () => {
    settings.theme = themeToggle.checked ? "dark" : "light";

    document.documentElement.dataset.theme = settings.theme;
    saveCurrentSettings();
  });
}

if (visitorForm) {
  visitorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    settings.visitorName = visitorNameInput.value.trim();

    displaySettings();
    saveCurrentSettings();
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    contactStatus.textContent =
      "Thank you! Your message has been received.";

    contactForm.reset();
  });
}

displaySettings();

settings.lastVisit = new Date().toISOString();
saveCurrentSettings();