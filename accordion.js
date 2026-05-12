document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
