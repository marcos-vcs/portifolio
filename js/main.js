// Splash Screen
window.onload = () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
    setTimeout(() => {
      document.querySelector(".splash-screen").remove();
    }, 1500);
  }, 0);
};

/* Mecânica modo dark */
const btnColorMode = document.querySelector("#btn-color-mode");

updateButtonText(localStorage.getItem("dark-mode") === "enabled");
updateLogo(localStorage.getItem("dark-mode") === "enabled");

btnColorMode.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-theme");
  localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
  updateButtonText(isDarkMode);
  updateLogo(isDarkMode);
});

function updateLogo(isDarkMode) {
  const logo = document.querySelector(".logo img");
  logo.src = `./assets/imgs/${isDarkMode ? "logo-light.png" : "logo-dark.png"}`;
  logo.alt = isDarkMode ? "Logo claro" : "Logo escuro";
}

function updateButtonText(isDarkMode) {
  btnColorMode.querySelector("span").innerText = isDarkMode
    ? "moon_stars"
    : "light_mode";
  document.body.classList.remove(isDarkMode ? "dark-theme" : "light-theme");
  document.body.classList.add(isDarkMode ? "light-theme" : "dark-theme");
}

// Mecânica para destacar o item do menu conforme o scroll
const menuLinks = document.querySelectorAll(".menu ul li:not(.ignore) a");
const sections = document.querySelectorAll("main section");

const observerOptions = {
  root: null,
  rootMargin: "-75px 0px 0px 0px",
  threshold: 0.5,
};

// Callback do Observer
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      menuLinks.forEach((link) => {
        link.parentElement.classList.remove("menu__active");
      });

      const targetId = entry.target.getAttribute("id");
      const correspondingLink = document.querySelector(
        `.menu ul li a[href="#${targetId}"]`
      );

      if (correspondingLink) {
        correspondingLink.parentElement.classList.add("menu__active");
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

// Controle do botão scroll-top
const scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
  if (window.scrollY > 100) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
}

window.addEventListener("scroll", toggleScrollTop);
window.addEventListener("load", toggleScrollTop);

document.querySelector(".scroll-top__link").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* Mecânica de download de CV */
const downloadBtn = document.querySelector(".sobre__download-cv button");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    window.open(
      "../assets/docs/Marcos Vinicio Cardoso Sousa - Currículo - PT-BR.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  });
}

function formataDataUltimaAtualizacao(lastUpdate) {
  const data = new Date(lastUpdate);
  const meses = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();
  return `${mes}/${ano}`;
}

const habilidades = [
  {
    title: "Front-End",
    lastUpdate: "2023-10-01",
    icon: "fa-solid fa-laptop-code",
    skills: [
      {
        name: "HTML",
        level: 90,
      },
      {
        name: "CSS",
        level: 90,
      },
      {
        name: "JavaScript",
        level: 80,
      },
      {
        name: "React",
        level: 70,
      },
      {
        name: "Vue.js",
        level: 60,
      },
    ],
  },
  {
    title: "Back-End",
    lastUpdate: "2023-10-01",
    icon: "fa-solid fa-server",
    skills: [
      {
        name: "Node.js",
        level: 70,
      },
      {
        name: "Express.js",
        level: 70,
      },
      {
        name: "Python",
        level: 60,
      },
      {
        name: "Django",
        level: 60,
      },
    ],
  },
  {
    title: "Banco de Dados",
    lastUpdate: "2023-10-01",
    icon: "fa-solid fa-database",
    skills: [
      {
        name: "MySQL",
        level: 80,
      },
      {
        name: "MongoDB",
        level: 70,
      },
      {
        name: "PostgreSQL",
        level: 60,
      },
    ],
  },
];

const habilidadesContainer = document.querySelector("#accordionHabilities");
habilidadesContainer.innerHTML = "";
for (let i = 0; i < habilidades.length; i++) {
  const { title, lastUpdate, icon, skills } = habilidades[i];
  const isExpanded = i === 0 ? "show" : "";

  const card = document.createElement("div");
  card.classList.add("accordion-item");
  card.innerHTML = `
    <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
            <div class="accordion__title">
                <div class="icon">
                    <i class="${icon}"></i>
                </div>
                <div>
                    <div class="title">${title}</div>
                    <div class="subtitle">Última atualização: 
                    ${formataDataUltimaAtualizacao(lastUpdate)}</div>
                </div>
            </div>
        </button>
    </h2>

    <div id="collapse-${i}" class="accordion-collapse collapse ${isExpanded}" data-bs-parent="#accordionHabilities">
      <div class="accordion-body">
        <div class="habilidades__skills-${i}" style="margin-left: 3.5%; margin-top: -25px;"></div>
      </div>
    </div>`;

  const skillsList = card.querySelector(`.habilidades__skills-${i}`);
  for (let j = 0; j < skills.length; j++) {
    skillsList.innerHTML += `
      <div class="habilidade">
        <div class="habilidade__nome">${skills[j].name}</div>
        <div class="habilidade__nivel">
          <div class="habilidade__nivel-barra">${skills[j].level}%</div>
        </div>
      </div>
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: ${skills[j].level}%"></div>
        </div>
      </div>`;
  }

  habilidadesContainer.appendChild(card);
}
