// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})


// Add this to your existing script.js
document.querySelectorAll(".nav-item > a").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      const parent = item.parentElement
      parent.classList.toggle("active")
    }
  })
})
// Form validation
function validateForm(event) {
  event.preventDefault()

  const form = document.getElementById("contactForm")
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const city = document.getElementById("city").value
  const hobbies = document.querySelectorAll('input[name="hobbies"]:checked')
  const message = document.getElementById("message").value

  // Validation rules
  if (name.length < 2) {
    alert("Name must be at least 2 characters long")
    return false
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    alert("Please enter a valid email address")
    return false
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long")
    return false
  }

  if (city === "") {
    alert("Please select a city")
    return false
  }

  if (hobbies.length === 0) {
    alert("Please select at least one hobby")
    return false
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters long")
    return false
  }

  // Show popup if validation passes
  showPopup()
  return false
}

// Popup handling
const popup = document.getElementById("popup")
const proceedBtn = document.getElementById("proceedBtn")
const cancelBtn = document.getElementById("cancelBtn")

function showPopup() {
  popup.style.display = "flex"
}

function hidePopup() {
  popup.style.display = "none"
}

proceedBtn.addEventListener("click", () => {
  hidePopup()
  document.getElementById("contactForm").submit()
  alert("Form submitted successfully!")
})

cancelBtn.addEventListener("click", hidePopup)

// Close popup when clicking outside
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    hidePopup()
  }
})

