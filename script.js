/*-- ================= FILTER ================= */
const filterButtons = document.querySelectorAll(".filter-btn")
const projects = document.querySelectorAll(".project-item")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Active Button
    filterButtons.forEach((btn) => {
      btn.classList.remove("btn-dark")
      btn.classList.add("btn-outline-dark")
    })
    button.classList.remove("btn-dark")
    button.classList.add("btn-outline-dark")

    const filter = button.dataset.filter
    projects.forEach((project) => {
      const category = project.dataset.category

      if (filter === "all" || category.includes(filter)) {
        project.style.display = "block"
      } else {
        project.style.display = "none"
      }
    })
  })
})
