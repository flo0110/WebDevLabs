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
  
document.addEventListener("DOMContentLoaded", function() {
    console.log("Current URL:", window.location.href);
    greetingFunc();
  });


function addYear() {
  const currentYear = new Date().getFullYear();
  const copyYearEl = document.getElementById("copyYear");
  if (copyYearEl) {
    copyYearEl.textContent = `© ${currentYear}`;
  }
}

function showList() {
  document.getElementById("favoriteThings").style.display = "block";
  document.getElementById("showBtn").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");

    if (!nameInput.checkValidity() || !emailInput.checkValidity() || !commentInput.checkValidity()) {
      e.preventDefault();
      alert("Please fill out all required fields correctly.");
    }
  });
});


$(document).ready(function() {
  // Toggle the short and full bio paragraphs
  $("#toggleBio").click(function() {
    // Toggle both paragraphs
    $("#shortBio, #fullBio").toggle();

    // Update button text
    if ($(this).text() === "Read More") {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  });
});