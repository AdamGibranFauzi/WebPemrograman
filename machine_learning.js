document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      cards.forEach(c => {
        if (c !== card) c.classList.add("dim");
      });
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      cards.forEach(c => c.classList.remove("dim"));
      card.classList.remove("active");
    });

    card.addEventListener("click", () => {
      const link = card.dataset.link;
      if (link) {
        window.location.href = link;
      }
    });
  });
});
