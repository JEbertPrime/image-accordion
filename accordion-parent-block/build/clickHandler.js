console.log(document.querySelectorAll(".inner-accordion"));
document.querySelectorAll(".inner-accordion").forEach((e) =>
  e.addEventListener("click", function() {
    e.classList.contains("active")
      ? null
      : document
          .querySelectorAll(".inner-accordion")
          .forEach((i) => i.classList.remove("active"));
    
          e.classList.contains("active") ? null:
          e.classList.add("active");
  })
);
document.querySelectorAll(".left").forEach((el) =>
  el.addEventListener("click", (e) => {
      e.stopPropagation()
    document
    .querySelectorAll(".inner-accordion")
    .forEach((i) => i.classList.remove("active"));
    document
      .getElementById(
        "inner-accordion-" +
          (parseInt(el.parentElement.getAttribute("index")) - 1)
      )
      .classList.add("active");
  })
);
document.querySelectorAll(".right").forEach((el) =>
  el.addEventListener("click", (e) => {
      e.stopPropagation()
    document
    .querySelectorAll(".inner-accordion")
    .forEach((i) => i.classList.remove("active"));
    document
      .getElementById(
        "inner-accordion-" +
          (parseInt(el.parentElement.getAttribute("index")) + 1)
      )
      .classList.add("active");
  })
);