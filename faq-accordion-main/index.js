const section = document.getElementById("faq-container");

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
faq.forEach((element) => {
  const article = document.createElement("article");
  article.classList.add("quest");
  article.innerHTML = `<article class="question">  
    <h3>${element.question}</h3>
    <img class="icon" src="assets/images/icon-plus.svg" alt="icon-img"
    data-plus="assets/images/icon-plus.svg"
    data-minus="assets/images/icon-minus.svg">
    </article>
    
    <p class="hidden">${element.answer}</p>`;

  section.appendChild(article);

  article.style.cursor = "pointer";
  article.tabIndex = 0;

  // click instances..
  article.addEventListener("click", () => {
    const paragraph = article.querySelector(".hidden");
    const icon = article.querySelector(".icon");
    paragraph.classList.toggle("active");

    const plusUrl = icon.dataset.plus;
    const minusUrl = icon.dataset.minus;

    icon.src = icon.src.includes(plusUrl) ? minusUrl : plusUrl;

  });

  // Navigation rule..
  article.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      const paragraph = article.querySelector(".hidden");
      const icon = article.querySelector(".icon");
      paragraph.classList.toggle("active");

      const plusUrl = icon.dataset.plus;
      const minusUrl = icon.dataset.minus;

      icon.src = icon.src.includes(plusUrl) ? minusUrl : plusUrl;
    }
    if (e.key === "ArrowUp") {
      article.previousElementSibling.focus();
    } if (e.key === "ArrowDown") {
      article.nextElementSibling.focus();
    }
  });
});
