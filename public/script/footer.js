document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".footer-links h4");
  
  sections.forEach((title) => {
    title.style.cursor = "pointer";
    title.style.display = "flex";
    title.style.alignItems = "center";
    title.style.justifyContent = "space-between";
    title.style.position = "relative";

    const arrow = document.createElement("span");
    arrow.innerHTML = "&#8250;"; // ›
    arrow.classList.add("footer-arrow");
    arrow.style.fontSize = "1.2rem";
    arrow.style.color = "#ff8a05";
    arrow.style.transition = "transform 0.3s ease";
    arrow.style.marginLeft = "12px"; // aumenta distância entre texto e seta
    title.appendChild(arrow);

    const content = title.parentElement.querySelector("ul");
    if (content) {
      content.style.overflow = "hidden";
      content.style.maxHeight = "0";
      content.style.opacity = "0";
      content.style.transition = "max-height 0.35s ease, opacity 0.3s ease";
      content.style.pointerEvents = "none";
    }

    title.addEventListener("click", () => {
      const isActive = title.classList.toggle("active");

      sections.forEach((other) => {
        if (other !== title) {
          other.classList.remove("active");
          const otherContent = other.parentElement.querySelector("ul");
          const otherArrow = other.querySelector(".footer-arrow");
          if (otherContent) {
            otherContent.style.maxHeight = "0";
            otherContent.style.opacity = "0";
            otherContent.style.pointerEvents = "none";
          }
          if (otherArrow) otherArrow.style.transform = "rotate(0deg)";
        }
      });

      if (content) {
        if (isActive) {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = "1";
          content.style.pointerEvents = "auto";
          arrow.style.transform = "rotate(90deg)";
        } else {
          content.style.maxHeight = "0";
          content.style.opacity = "0";
          content.style.pointerEvents = "none";
          arrow.style.transform = "rotate(0deg)";
        }
      }
    });
  });

  // Deixa "Conecte-se" sempre aberto
  const social = document.querySelector(".footer-social .social-icons");
  if (social) {
    social.style.maxHeight = "none";
    social.style.opacity = "1";
    social.style.pointerEvents = "auto";
  }
});
