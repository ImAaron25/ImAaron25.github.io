// Fade in
window.onload = () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "1s";
    document.body.style.opacity = 1;
  }, 100);
};

// BACK TO TOP
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// SEARCH FUNCTION
document.getElementById("searchBar")?.addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});





// ===== EXISTING CODE ABOVE =====


// BACK TO TOP BUTTON
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// SEARCH FUNCTION
document.getElementById("searchBar")?.addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});

// ACCORDION
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});
