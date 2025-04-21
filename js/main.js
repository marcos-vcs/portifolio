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

/* Mecânica accordion Habilidades */
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

/* Mecânica timeline Qualificações */
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

/* Mecânica footer */
const footer = document.querySelector(".footer");
footer.innerHTML = footer.innerHTML.replace(
  "{atualYear}",
  new Date().getFullYear()
);

/* Mecânica botões Qualificacações */
const btnQualificacoes = document.querySelectorAll(".btn-qualificacoes");

btnQualificacoes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active__qualificacoes")) {
      return;
    }

    btnQualificacoes.forEach((btn) => {
      btn.classList.remove("active__qualificacoes");
    });

    btn.classList.add("active__qualificacoes");
    loadQualificacoes();
  });
});


const trabalhos = [
  {
    title: "Desenvolvedor Front-End",
    company: "Empresa A",
    startDate: "01/2020",
    endDate: "12/2023",
  },
  {
    title: "Desenvolvedor Back-End",
    company: "Empresa B",
    startDate: "01/2020",
    endDate: "12/2023",
  },
  {
    title: "Estagiário em Desenvolvimento Web",
    company: "Empresa C",
    startDate: "01/2020",
    endDate: "12/2023",
  },
];
const formacao = [
  {
    title: "Bacharel em Ciência da Computação",
    institution: "Universidade X",
    startDate: "01/2020",
    endDate: "12/2023",
  },
  {
    title: "Técnico em Informática",
    institution: "Escola Y",
    startDate: "01/2020",
    endDate: "12/2023",
  },
  {
    title: "Curso de Desenvolvimento Web",
    institution: "Instituto Z",
    startDate: "01/2020",
    endDate: "12/2023",
  },
  {
    title: "Curso de Banco de Dados",
    institution: "Instituto W",
    startDate: "01/2020",
    endDate: "12/2023",
  },
  {
    title: "Curso de Python",
    institution: "Instituto V",
    startDate: "01/2020",
    endDate: "12/2023",
  },
];

function converteDatasQualificacoes(start, end) {
  const meses = [
    "Jan.",
    "Fev.",
    "Mar.",
    "Abr.",
    "Mai.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Set.",
    "Out.",
    "Nov.",
    "Dez.",
  ];

  const [mesStart, anoStart] = start.split("/");
  const [mesEnd, anoEnd] = end.split("/");

  const startStr = `${meses[parseInt(mesStart) - 1]} ${anoStart}`;
  const endStr = `${meses[parseInt(mesEnd) - 1]} ${anoEnd}`;

  return `${startStr} - ${endStr}`;
}

loadQualificacoes();

function loadQualificacoes() {
  const btnAtivoQualificacoes = document.querySelector(
    ".active__qualificacoes"
  );
  const timeline = document.querySelector(".timeline");

  // Adiciona o fade-out
  timeline.classList.add("fade-out");

  // Espera a transição terminar antes de atualizar o conteúdo
  timeline.addEventListener("transitionend", function handleFadeOut() {
    timeline.removeEventListener("transitionend", handleFadeOut);

    const ehTrabalhos =
      btnAtivoQualificacoes.querySelector("span").innerText === "Trabalhos";

    // Limpa o conteúdo e carrega o novo
    if (ehTrabalhos) {
      loadTrabalhos();
    } else {
      loadFormacoes();
    }

    // Aplica fade-in no próximo "tick" do JS
    requestAnimationFrame(() => {
      timeline.classList.remove("fade-out");
      timeline.classList.add("fade-in");

      // Remove a classe fade-in depois que a animação acabar pra poder repetir depois
      setTimeout(() => {
        timeline.classList.remove("fade-in");
      }, 500);
    });
  });
}

function loadFormacoes() {
  const timeline = document.querySelector(".timeline");
  timeline.innerHTML = "";

  for (let i = 0; i < formacao.length; i++) {
    const { title, institution, startDate, endDate } = formacao[i];
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");
    timelineItem.classList.add(i % 2 === 0 ? "left" : "right");

    timelineItem.innerHTML = `
      <div class="content">
        <h5>${title}</h5>
        <p class="institution">${institution}</p>
        <p class="date">
            <i class="fa-solid fa-calendar-days"></i> ${converteDatasQualificacoes(
              startDate,
              endDate
            )}
        </p>
      </div>
      `;
    timeline.appendChild(timelineItem);
  }
}

function loadTrabalhos() {
  const timeline = document.querySelector(".timeline");
  timeline.innerHTML = "";

  for (let i = 0; i < trabalhos.length; i++) {
    const { title, company, startDate, endDate } = trabalhos[i];
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");
    timelineItem.classList.add(i % 2 === 0 ? "left" : "right");

    timelineItem.innerHTML = `
      <div class="content">
        <h5>${title}</h5>
        <p class="institution">${company}</p>
        <p class="date">
            <i class="fa-solid fa-calendar-days"></i> ${converteDatasQualificacoes(
              startDate,
              endDate
            )}
        </p>
      </div>
      `;
    timeline.appendChild(timelineItem);
  }
}
