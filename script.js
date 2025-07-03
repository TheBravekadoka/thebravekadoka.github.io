document.addEventListener("DOMContentLoaded", () => {
  // Carousel functionality
  const carousels = document.querySelectorAll(".carousel")

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".carousel-slide")
    const dots = carousel.querySelectorAll(".dot")
    const prevBtn = carousel.querySelector(".prev")
    const nextBtn = carousel.querySelector(".next")

    let currentIndex = 0

    // Function to show slide by index
    function showSlide(index) {
      // Remove active class from all slides and dots
      slides.forEach((slide) => slide.classList.remove("active"))
      dots.forEach((dot) => dot.classList.remove("active"))

      // Add active class to current slide and dot
      slides[index].classList.add("active")
      dots[index].classList.add("active")

      currentIndex = index
    }

    // Event listeners for prev/next buttons
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        let newIndex = currentIndex - 1
        if (newIndex < 0) newIndex = slides.length - 1
        showSlide(newIndex)
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        let newIndex = currentIndex + 1
        if (newIndex >= slides.length) newIndex = 0
        showSlide(newIndex)
      })
    }

    // Event listeners for dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = Number.parseInt(dot.getAttribute("data-index"))
        showSlide(index)
      })
    })

    // Auto-advance slides every 5 seconds
    setInterval(() => {
      let newIndex = currentIndex + 1
      if (newIndex >= slides.length) newIndex = 0
      showSlide(newIndex)
    }, 5000)
  })

  // Form submission
  const form = document.getElementById("registration-form")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simple form validation
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value

      if (!name || !email) {
        alert("Please fill in all required fields.")
        return
      }

      // In a real application, you would send this data to a server
      alert("Thank you for your interest! We will contact you soon with more information.")
      form.reset()
    })
  }
})
