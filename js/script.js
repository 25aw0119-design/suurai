const cursor = document.querySelector(".cursor-circle");
const progressBar = document.querySelector(".scroll-progress");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function moveCursor() {
  cursorX += (mouseX - cursorX) * 0.16;
  cursorY += (mouseY - cursorY) * 0.16;

  if (cursor) {
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
  }

  requestAnimationFrame(moveCursor);
}

moveCursor();

document.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("mouseenter", () => cursor?.classList.add("is-hover"));
  item.addEventListener("mouseleave", () =>
    cursor?.classList.remove("is-hover"),
  );
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.height = `${progress}%`;
  }
});

const revealTargets = document.querySelectorAll(
  ".section-head, .strength-item, .skill-column, .work-card, .footer-inner",
);

revealTargets.forEach((target) => target.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
      }
    });
  },
  { threshold: 0.16 },
);

revealTargets.forEach((target) => observer.observe(target));

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-inner");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".nav-inner a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
}

const works = [
  {
    page: "potoforio.html",
    title: "ポートフォリオ",
    tag: "#本サイト",
    image: "../../img/potofp_shot.png",
    url: "../potoforio/potoforio.html",
    tools: "Figma / Illustrator / Photoshop / HTML / CSS / JavaScript",
  },
  {
    page: "resipi.html",
    title: "レシピサイト",
    tag: "#進級制作",
    image: "../../img/rexipi_zhu.jpg",
    url: "../resipi/resipi.html",
    tools: "企画 / Figma / Illustrator / Photoshop / HTML / CSS / JavaScript",
  },
  {
    page: "pocket.html",
    title: "DJI JAPAN",
    tag: "#授業課題",
    image: "../../img/pocket.jpg",
    url: "../pocket/pocket.html",
    tools: "企画 / Figma",
  },
  {
    page: "jinjya.html",
    title: "謎先の神社アプリ",
    tag: "#授業課題",
    image: "../../img/jinjya.jpg",
    url: "../jinjya/jinjya.html",
    tools: "企画 / Figma / Illustrator / Photoshop",
  },
  {
    page: "faten.html",
    title: "Faten（アプリ）",
    tag: "#授業課題",
    image: "../../img/faten_bg.jpg",
    url: "../faten/faten.html",
    tools: "TypeScript、JavaScript、React 、Node.js、Expo",
  },
];
const nextWorkArea = document.querySelector(".next-work");

if (nextWorkArea) {
  const currentPage = location.pathname.split("/").pop();

  const currentIndex = works.findIndex((work) => work.page === currentPage);

  if (currentIndex !== -1) {
    const nextIndex = (currentIndex + 1) % works.length;
    const nextWork = works[nextIndex];

    nextWorkArea.innerHTML = `
      <a href="${nextWork.url}" class="next-card">
        <img src="${nextWork.image}" alt="${nextWork.title}">
        <div class="next-info">
          <span>${nextWork.tag}</span>
          <h2>${nextWork.title}</h2>
          <p>${nextWork.tools}</p>
        </div>
      </a>
    `;
  }
}

const gallery = document.querySelector(".tarot-design-image");
const next = document.querySelector(".gallery-btn.next");
const prev = document.querySelector(".gallery-btn.prev");

if (gallery && next && prev) {
  const cards = gallery.querySelectorAll("img");

  let index = 0;

  function move() {
    gallery.scrollTo({
      left: index * gallery.clientWidth,
      behavior: "smooth",
    });
  }

  next.onclick = () => {
    if (index < cards.length - 1) {
      index++;
      move();
    }
  };

  prev.onclick = () => {
    if (index > 0) {
      index--;
      move();
    }
  };
}
