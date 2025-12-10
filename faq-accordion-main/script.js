const faqContainer = document.querySelector("#faq-container");

const faq = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

function renderFaq() {
  faq.forEach((Element) => {
    const section = document.createElement("section");
    section.classList.add("quest");

    section.innerHTML = ` 
    
    <article>
    <h3>${Element.question}</h3>
    <img class="icon" src="assets/images/icon-plus.svg" alt=""
    data-plus="assets/images/icon-plus.svg"
    data-minus="assets/images/icon-minus.svg">
    </article>
    
    <p class="hidden">${Element.answer}</p>`;

    faqContainer.appendChild(section);

    section.tabIndex = 0;
    section.style.cursor = " pointer";

    section.addEventListener("click", () => {
      const icon = section.querySelector(".icon");

      const plus = icon.dataset.plus;
      const minus = icon.dataset.minus;
      icon.src = icon.src.includes(plus) ? minus : plus;

      const paragraph = section.querySelector(".hidden");

      paragraph.classList.toggle("active");
    });

    section.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const icon = section.querySelector(".icon");

        const plus = icon.dataset.plus;
        const minus = icon.dataset.minus;
        icon.src = icon.src.includes(plus) ? minus : plus;

        const paragraph = section.querySelector(".hidden");
        paragraph.classList.toggle("active");
      }

      if (e.key === "ArrowDown") {
        const next = section.nextElementSibling;
        if (next) next.focus();
      }
      if (e.key === "ArrowUp") {
        const prev = section.previousSibling;
        if (prev) prev.focus();
      }
    });
  });
}
renderFaq();
