// ========== GREETING FUNCTION ==========
function greetingFunc() {
  let d = new Date();
  let h = d.getHours();
  let greeting;

  if (h >= 0 && h < 5) {
    greeting = "Good night";
  } else if (h < 12) {
    greeting = "Good morning";
  } else if (h < 18) {
    greeting = "Good afternoon";
  } else if (h < 20) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  let greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.innerHTML = `${greeting}, I am Florence Liu`;
  }
}

// ========== ADD YEAR TO FOOTER ==========
function addYear() {
  const currentYear = new Date().getFullYear();
  const copyYearEl = document.getElementById("copyYear");
  if (copyYearEl) {
    copyYearEl.textContent =`@ ${currentYear}`;
  }
}

// ========== GET ADVICE FUNCTION ==========
function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
      document.getElementById("adviceText").innerText = "Error retrieving advice.";
    });
}

// ========== FORM VALIDATION (For contact.html) ==========
document.addEventListener("DOMContentLoaded", function() {
  // Greeting
  greetingFunc();

  // If there's a form on the page, add validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const commentInput = document.getElementById("comment");

      // Check if these elements exist before validating
      if (nameInput && emailInput && commentInput) {
        if (
          !nameInput.checkValidity() ||
          !emailInput.checkValidity() ||
          !commentInput.checkValidity()
        ) {
          e.preventDefault();
          alert("Please fill out all required fields correctly.");
        }
      }
    });
  }
});



// ========== JQUERY TOGGLE FOR READ MORE / READ LESS ==========
$(document).ready(function() {
  $("#toggleBio").click(function() {
    // Toggle both paragraphs
    $("#shortBio, #fullBio").toggle();

    // Update button text using .trim() to remove extra whitespace
    if ($(this).text().trim() === "Read More") {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  });
});

// ========== ACTIVE NAVIGATION LINK HIGHLIGHTING ==========
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href").includes(currentPath)) {
      link.classList.add("active");
    }
  });
}

// ========== HAMBURGER MENU TOGGLE ==========
function setupHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
}

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", function() {
  greetingFunc();
  addYear();
  setupFormValidation();
  highlightActiveNav();
  setupHamburgerMenu();
});