/*
 * Author: Marcos Vinicio Cardoso Sousa
 * Date: 2025-04-23
 * Description: This script handles the functionality of a personal portfolio website.
 */
const App = {
  data: {
    btnColorMode: document.querySelector("#btn-color-mode"),
    accordionSkills: [
      {
        title: "Front-End",
        lastUpdate: "2025-06-01",
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
            level: 90,
          },
          {
            name: "TypeScript",
            level: 70,
          },
          {
            name: "JQuery",
            level: 70,
          },
          {
            name: "Bootstrap",
            level: 80,
          },
          {
            name: "React",
            level: 30,
          },
          {
            name: "Vue.js",
            level: 80,
          },
          {
            name: "PrimeVue",
            level: 80,
          },
          {
            name: "PrimeFlex",
            level: 80,
          },
          {
            name: "Angular",
            level: 70,
          },
          {
            name: "Angular Material",
            level: 70,
          },
          {
            name: "Ionic",
            level: 60,
          },
        ],
      },
      {
        title: "Back-End",
        lastUpdate: "2025-06-01",
        icon: "fa-solid fa-server",
        skills: [
          {
            name: "C#",
            level: 80,
          },
          {
            name: "Windows Forms",
            level: 50,
          },
          {
            name: "ASP.NET MVC",
            level: 80,
          },
          {
            name: "Entity Framework",
            level: 70,
          },
          {
            name: ".NET",
            level: 80,
          },
          {
            name: "IIS (Internet Information Services)",
            level: 70,
          },
          {
            name: "Java",
            level: 80,
          },
          {
            name: "Spring Boot",
            level: 80,
          },
          {
            name: "Spring data JPA",
            level: 80,
          },
          {
            name: "Spring Security",
            level: 70,
          },
        ],
      },
      {
        title: "Banco de Dados",
        lastUpdate: "2025-06-01",
        icon: "fa-solid fa-database",
        skills: [
          {
            name: "SQL Server",
            level: 80,
          },
          {
            name: "T-SQL (Transact-SQL)",
            level: 80,
          },
          {
            name: "MySQL",
            level: 70,
          },
          {
            name: "SQLite",
            level: 70,
          },
          {
            name: "MongoDB",
            level: 60,
          },
        ],
      },
      {
        title: "Ferramentas/Outros",
        lastUpdate: "2025-06-01",
        icon: "fa-solid fa-tools",
        skills: [
          {
            name: "Git",
            level: 80,
          },
          {
            name: "GitHub",
            level: 80,
          },
          {
            name: "Postman",
            level: 70,
          },
          {
            name: "Figma",
            level: 60,
          },
          {
            name: "Visual Studio Code",
            level: 90,
          },
          {
            name: "Visual Studio",
            level: 80,
          },
          {
            name: "Eclipse",
            level: 70,
          },
          {
            name: "IntelliJ IDEA",
            level: 70,
          },
          {
            name: "NetBeans",
            level: 60,
          },
          {
            name: "CI/CD",
            level: 60,
          },
          {
            name: "Agile (Scrum/Kanban)",
            level: 70,
          },
        ],
      },
      {
        title: "Cloud & Deployment",
        lastUpdate: "2025-06-01",
        icon: "fa-solid fa-cloud",
        skills: [
          { name: "Vercel", level: 80 },
          { name: "Heroku", level: 80 },
          { name: "Railway", level: 70 },
          { name: "AWS", level: 50 },
          { name: "Google Cloud Platform (GCP)", level: 50 },
        ],
      },
    ],
    jobs: [
      {
        title: "Desenvolvedor de Software júnior",
        company: "LG Lugar De Gente",
        startDate: "06/2024",
        endDate: "Atualmente",
      },
      {
        title: "Desenvolvedor de Software Trainee",
        company: "LG Lugar De Gente",
        startDate: "04/2023",
        endDate: "06/2024",
      },
      {
        title: "Estagiário de Desenvolvimento de Software",
        company: "LG Lugar De Gente",
        startDate: "01/2022",
        endDate: "09/2023",
      },
      {
        title: "Desenvolvedor Full-Stack",
        company: "Meta Tecnologia da Informação",
        startDate: "05/2021",
        endDate: "06/2022",
      },
      {
        title: "Estagiário de Tecnologia da Informação",
        company: "Dinamo Contabilidade",
        startDate: "08/2020",
        endDate: "10/2021",
      },
    ],
    degrees: [
      {
        title: "Bacharelado em Sistemas de Informação",
        institution: "UNIFASAM - Centro Universitário Sul-Americano",
        startDate: "01/2020",
        endDate: "12/2024",
      },
      {
        title: "Técnico em Manutenção e Suporte em Informática",
        institution: "Universidade Estadual de Goiás",
        startDate: "01/2016",
        endDate: "12/2018",
      },
      {
        title: "Ensino Médio",
        institution: "Colégio Estadual Machado de Assis",
        startDate: "01/2015",
        endDate: "12/2018",
      },
    ],
    aboutMeDatas: {
      startCarrerYears: 2020,
      projectsCompleted: 50,
      companiesWorked: 3,
    },
    projects: [
      {
        title: "Portfólio Pessoal",
        description:
          "Meu portfólio pessoal, desenvolvido com HTML, CSS e JavaScript.",
        image: "../assets/imgs/projects/portfolio.jpg",
        altImage: "Imagem do projeto Portfólio Pessoal",
        linkPreview: "",
        link: "https://github.com/marcos-vcs/portifolio",
        stacks: [
          {
            tooltip: "HTML",
            icon: "fa-brands fa-html5",
          },
          {
            tooltip: "CSS",
            icon: "fa-brands fa-css3-alt",
          },
          {
            tooltip: "JavaScript",
            icon: "fa-brands fa-js",
          },
          {
            tooltip: "Bootstrap",
            icon: "fa-brands fa-bootstrap",
          },
          {
            tooltip: "Font-awesome",
            icon: "fa-brands fa-font-awesome",
          },
        ],
      },
      {
        title: "Ultimate Tic Tac Toe",
        description:
          "Um jogo moderno e interativo de Jogo da Velha com IA inteligente, multiplayer e personalização completa!",
        image: "../assets/imgs/projects/ultimate-tic-tac-toe.png",
        altImage: "Imagem do projeto Ultimate Tic Tac Toe",
        link: "https://github.com/marcos-vcs/ultimate-tic-tac-toe",
        linkPreview: "https://ultimate-tic-tac-toe-nine.vercel.app/",
        stacks: [
          {
            tooltip: "HTML",
            icon: "fa-brands fa-html5",
          },
          {
            tooltip: "CSS",
            icon: "fa-brands fa-css3-alt",
          },
          {
            tooltip: "JavaScript",
            icon: "fa-brands fa-js",
          },
          {
            tooltip: "Font-awesome",
            icon: "fa-brands fa-font-awesome",
          },
          {
            tooltip: "Tailwind CSS",
            icon: "fa-brands fa-tailwindcss",
          },
        ],
      },
      {
        title: "Facilita Tasks",
        description:
          "Aplicação web para gerenciamento de tarefas com autenticação, cadastro de atividades e controle de status. Projeto com arquitetura moderna e design responsivo.",
        image: "../assets/imgs/projects/facilita-task.jpg",
        altImage: "Preview da aplicação Facilita Tasks",
        link: "https://github.com/marcos-vcs/facilita-tasks",
        linkPreview: "https://facilita-tasks-mocha.vercel.app/#/home",
        stacks: [
          {
            tooltip: "Vue.js",
            icon: "fa-brands fa-vuejs",
          },
          {
            tooltip: "HTML",
            icon: "fa-brands fa-html5",
          },
          {
            tooltip: "CSS",
            icon: "fa-brands fa-css3-alt",
          },
          {
            tooltip: "JavaScript",
            icon: "fa-brands fa-js",
          },
        ],
      },
      {
        title: "Serenatto Coffee",
        description:
          "Landing page responsiva para uma cafeteria fictícia, com design elegante, animações suaves e foco na experiência do usuário.",
        image: "../assets/imgs/projects/serenatto.png",
        altImage: "Imagem da landing page Serenatto Coffee",
        link: "https://github.com/marcos-vcs/serenatto",
        linkPreview: "https://serenatto-coffee.vercel.app/",
        stacks: [
          {
            tooltip: "HTML",
            icon: "fa-brands fa-html5",
          },
          {
            tooltip: "CSS",
            icon: "fa-brands fa-css3-alt",
          },
          {
            tooltip: "JavaScript",
            icon: "fa-brands fa-js",
          },
          {
            tooltip: "Bootstrap",
            icon: "fa-brands fa-bootstrap",
          },
        ],
      },
      {
        title: "Meteora",
        description:
          "Landing page responsiva para uma loja de roupas fictícia, com layout moderno, componentes do Bootstrap e foco em acessibilidade.",
        image: "../assets/imgs/projects/meteora.png",
        altImage: "Imagem da landing page Meteora",
        link: "https://github.com/marcos-vcs/meteora",
        linkPreview: "https://meteora-rust-kappa.vercel.app/",
        stacks: [
          {
            tooltip: "HTML",
            icon: "fa-brands fa-html5",
          },
          {
            tooltip: "CSS",
            icon: "fa-brands fa-css3-alt",
          },
          {
            tooltip: "JavaScript",
            icon: "fa-brands fa-js",
          },
          {
            tooltip: "Bootstrap",
            icon: "fa-brands fa-bootstrap",
          },
        ],
      },
      {
        title: "Número Secreto",
        description:
          "Jogo interativo em que o jogador tenta adivinhar um número secreto gerado aleatoriamente. O diferencial é a jogabilidade por comandos de voz e reinício automático ao dizer palavras como 'reiniciar' ou 'novo jogo'.",
        image: "../assets/imgs/projects/numero-secreto.png",
        altImage: "Imagem do jogo Número Secreto",
        link: "https://github.com/marcos-vcs/numero-secreto",
        linkPreview: "https://numero-secreto-omega-seven.vercel.app/",
        stacks: [
          {
            tooltip: "HTML",
            icon: "fa-brands fa-html5",
          },
          {
            tooltip: "CSS",
            icon: "fa-brands fa-css3-alt",
          },
          {
            tooltip: "JavaScript",
            icon: "fa-brands fa-js",
          },
          {
            tooltip: "Reconhecimento de Voz",
            icon: "fa-solid fa-microphone",
          },
        ],
      },
    ],
  },
  init: () => {
    App.methods.loadSplashScreen();
    App.methods.loadDarkMode();
    App.methods.loadSelectedMenuItem();
    App.methods.loadScrollToHomeBtn();
    App.methods.loadDownloadCV();
    App.methods.loadSkills();
    App.methods.loadBtnQualifications();
    App.methods.loadQualifications();
    App.methods.loadFooter();
    App.methods.loadAboutMe();
    App.methods.loadBootstrapTooltip();
    App.methods.loadProjects();
    App.methods.loadMenuHamburger();
  },
  methods: {
    loadMenuHamburger: () => {
      const menuHamburger = document.querySelector("#btn-menu-hamburger");
      menuHamburger.querySelector("span").innerHTML =
        menuHamburger.querySelector("span").innerHTML === "menu"
          ? "close"
          : "menu";

      const menu = document.querySelector(".menu").querySelector("ul");
      if (menuHamburger.querySelector("span").innerText === "close") {
        menu.classList.add("active-menu");
        menu.classList.remove("inactive-menu");
      } else {
        menu.classList.add("inactive-menu");
        menu.classList.remove("active-menu");
      }

      if (menuHamburger.querySelector("span").innerText === "close") {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }

      menuHamburger.addEventListener("click", () => {
        menuHamburger.querySelector("span").innerHTML =
          menuHamburger.querySelector("span").innerHTML === "menu"
            ? "close"
            : "menu";

        const menu = document.querySelector(".menu").querySelector("ul");
        if (menuHamburger.querySelector("span").innerText === "close") {
          menu.classList.add("active-menu");
          menu.classList.remove("inactive-menu");
        } else {
          menu.classList.add("inactive-menu");
          menu.classList.remove("active-menu");
        }

        if (menuHamburger.querySelector("span").innerText === "close") {
          document.body.classList.add("menu-open");
        } else {
          document.body.classList.remove("menu-open");
        }
      });
    },
    loadSplashScreen: () => {
      window.onload = () => {
        setTimeout(() => {
          document.body.classList.add("loaded");
          setTimeout(() => {
            document.querySelector(".splash-screen").remove();
          }, 1000);
        }, 0);
      };
    },
    loadDarkMode: () => {
      App.methods._updateButtonText(
        localStorage.getItem("dark-mode") === "enabled"
      );
      App.methods._updateLogo(localStorage.getItem("dark-mode") === "enabled");

      App.data.btnColorMode.addEventListener("click", () => {
        const isDarkMode = document.body.classList.contains("dark-theme");
        localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
        App.methods._updateButtonText(isDarkMode);
        App.methods._updateLogo(isDarkMode);
      });
    },
    loadSelectedMenuItem: () => {
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

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      sections.forEach((section) => observer.observe(section));
    },
    loadScrollToHomeBtn: () => {
      window.addEventListener("scroll", App.methods._toggleScrollTop);
      window.addEventListener("load", App.methods._toggleScrollTop);

      document
        .querySelector(".scroll-top__link")
        .addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
    },
    loadDownloadCV: () => {
      const downloadBtn =
        window.innerWidth <= 768
          ? document.querySelector(".about__download-cv-mobile button")
          : document.querySelector(".about__download-cv button");

      if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
          window.open(
            "../assets/docs/Marcos Vinicio Cardoso Sousa - Currículo - PT-BR.pdf",
            "_blank",
            "noopener,noreferrer"
          );
        });
      }
    },
    loadSkills: () => {
      const skillsContainer = document.querySelector("#accordionSkills");
      skillsContainer.innerHTML = "";

      for (let i = 0; i < App.data.accordionSkills.length; i++) {
        const { title, lastUpdate, icon, skills } = App.data.accordionSkills[i];
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
                          ${App.methods._formatDateLastUpdate(lastUpdate)}</div>
                      </div>
                  </div>
              </button>
          </h2>

          <div id="collapse-${i}" class="accordion-collapse collapse ${isExpanded}" data-bs-parent="#accordionSkills">
            <div class="accordion-body">
              <div class="skills-${i} skills_fix"></div>
            </div>
          </div>`;

        const skillsList = card.querySelector(`.skills-${i}`);
        for (let j = 0; j < skills.length; j++) {
          skillsList.innerHTML += `
            <div class="skill">
              <div class="skill_name">${skills[j].name}</div>
              <div class="skill_level">
                <div class="skill_level">${skills[j].level}%</div>
              </div>
            </div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: ${skills[j].level}%"></div>
              </div>
            </div>`;
        }

        skillsContainer.appendChild(card);
      }
    },
    loadBtnQualifications: () => {
      const btnQualifications = document.querySelectorAll(
        ".btn-qualifications"
      );

      btnQualifications.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (btn.classList.contains("active__qualifications")) {
            return;
          }

          btnQualifications.forEach((btn) => {
            btn.classList.remove("active__qualifications");
          });

          btn.classList.add("active__qualifications");
          App.methods.loadQualifications();
        });
      });
    },
    loadQualifications: () => {
      const activeBtnQualifications = document.querySelector(
        ".active__qualifications"
      );
      const timeline = document.querySelector(".timeline");
      const isJobsBtn =
        activeBtnQualifications.querySelector("span").innerText === "Trabalhos";

      timeline.classList.add("fade-out");

      window.addEventListener("DOMContentLoaded", () => {
        if (isJobsBtn) {
          App.methods._loadJobs();
        } else {
          App.methods._loadDegrees();
        }
      });

      timeline.addEventListener("transitionend", function handleFadeOut() {
        timeline.removeEventListener("transitionend", handleFadeOut);
        if (isJobsBtn) {
          App.methods._loadJobs();
        } else {
          App.methods._loadDegrees();
        }

        requestAnimationFrame(() => {
          timeline.classList.remove("fade-out");
          timeline.classList.add("fade-in");

          setTimeout(() => {
            timeline.classList.remove("fade-in");
          }, 500);
        });
      });
    },
    loadAboutMe: () => {
      const experienceYears = document.querySelector("#experienceYears");
      const projectsCompleted = document.querySelector("#projectsCompleted");
      const companiesWorked = document.querySelector("#companiesWorked");

      experienceYears.querySelector("h1").innerText = `${
        new Date().getFullYear() - App.data.aboutMeDatas.startCarrerYears
      }+`;
      projectsCompleted.querySelector(
        "h1"
      ).innerText = `${App.data.aboutMeDatas.projectsCompleted}+`;
      companiesWorked.querySelector(
        "h1"
      ).innerText = `${App.data.aboutMeDatas.companiesWorked}+`;
    },
    loadFooter: () => {
      const footer = document.querySelector(".footer");
      footer.innerHTML = footer.innerHTML.replace(
        "{atualYear}",
        new Date().getFullYear()
      );
    },
    loadBootstrapTooltip: () => {
      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
      );
    },
    loadProjects: () => {
      const projectsContainer = document.querySelector(".portifolio__content");

      projectsContainer.innerHTML = "";
      for (let i = 0; i < App.data.projects.length; i++) {
        const {
          title,
          description,
          image,
          altImage,
          link,
          linkPreview,
          stacks,
        } = App.data.projects[i];
        const projectItem = document.createElement("div");

        projectItem.classList.add("card");
        projectItem.classList.add("col-xs-12");
        projectItem.classList.add("col-sm-12");
        projectItem.classList.add("col-md-6");
        projectItem.classList.add("col-lg-6");
        projectItem.classList.add("col-xl-3");
        projectItem.classList.add("col-xxl-4");

        projectItem.innerHTML = `
          <div class="card-body">
            <div class="project-img">
              <img src="${image}" alt="${altImage}">
            </div>
            <div class="card-title">${title}</div>
            <div class="technologies-used">
              <div class="technologies-title">
                Tecnologias utilizadas:
              </div>
              <div class="technologies">
                ${App.methods._loadskills(stacks)}
              </div>
              <div class="card-text">
                <p>${description}</p>
              </div>
              
              <div class="card-buttons">
                <button onclick="App.methods._openLinkInButton('${link}')" type="button" class="btn btn-primary">
                    Repositório
                    <i class="fa-brands fa-github"></i>
                </button>
                ${App.methods._renderPreviewButton(linkPreview)}
              </div>

          </div>
        `;
        projectsContainer.appendChild(projectItem);
      }
    },
    _updateLogo: (isDarkMode) => {
      const logo = document.querySelector(".logo img");
      logo.src = `./assets/imgs/${
        isDarkMode ? "logo-light.png" : "logo-dark.png"
      }`;
      logo.alt = isDarkMode ? "Logo claro" : "Logo escuro";
    },
    _updateButtonText: (isDarkMode) => {
      App.data.btnColorMode.querySelector("span").innerText = isDarkMode
        ? "moon_stars"
        : "light_mode";
      document.body.classList.remove(isDarkMode ? "dark-theme" : "light-theme");
      document.body.classList.add(isDarkMode ? "light-theme" : "dark-theme");
    },
    _toggleScrollTop: () => {
      const scrollTop = document.querySelector(".scroll-top");

      if (window.scrollY > 100) {
        scrollTop.classList.add("active");
      } else {
        scrollTop.classList.remove("active");
      }
    },
    _formatDateLastUpdate: (lastUpdate) => {
      const date = new Date(lastUpdate);
      const months = [
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
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      return `${month}/${year}`;
    },
    _qualificationsDatesConverter: (start, end) => {
      const months = [
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

      const [monthStart, yearStart] = start.split("/");
      const [monthEnd, yearEnd] = end.split("/");

      const startStr = `${months[parseInt(monthStart) - 1]} ${yearStart}`;
      const endStr = `${months[parseInt(monthEnd) - 1]} ${yearEnd}`;

      return `${startStr} - ${end === "Atualmente" ? end : endStr}`;
    },
    _loadDegrees: () => {
      const timeline = document.querySelector(".timeline");
      timeline.innerHTML = "";

      for (let i = 0; i < App.data.degrees.length; i++) {
        const { title, institution, startDate, endDate } = App.data.degrees[i];
        const timelineItem = document.createElement("div");
        timelineItem.classList.add("timeline-item");
        timelineItem.classList.add(i % 2 === 0 ? "left" : "right");

        timelineItem.innerHTML = `
          <div class="content">
            <h5>${title}</h5>
            <p class="institution">${institution}</p>
            <p class="date">
                <i class="fa-solid fa-calendar-days"></i> ${App.methods._qualificationsDatesConverter(
                  startDate,
                  endDate
                )}
            </p>
          </div>
          `;
        timeline.appendChild(timelineItem);
      }
    },
    _loadJobs: () => {
      const timeline = document.querySelector(".timeline");
      timeline.innerHTML = "";

      for (let i = 0; i < App.data.jobs.length; i++) {
        const { title, company, startDate, endDate } = App.data.jobs[i];
        const timelineItem = document.createElement("div");
        timelineItem.classList.add("timeline-item");
        timelineItem.classList.add(i % 2 === 0 ? "left" : "right");

        timelineItem.innerHTML = `
          <div class="content">
            <h5>${title}</h5>
            <p class="institution">${company}</p>
            <p class="date">
                <i class="fa-solid fa-calendar-days"></i> ${App.methods._qualificationsDatesConverter(
                  startDate,
                  endDate
                )}
            </p>
          </div>
          `;
        timeline.appendChild(timelineItem);
      }
    },
    _loadskills: (skillsList) => {
      let skillsHTML = "";

      for (let j = 0; j < skillsList.length; j++) {
        const { tooltip, icon } = skillsList[j];

        skillsHTML += `
          <i class="${icon}"
             title="${tooltip}"
             data-bs-toggle="tooltip"
             data-bs-placement="top"
             data-bs-custom-class="custom-tooltip"
             data-bs-title="${tooltip}">
          </i>
        `;
      }
      return skillsHTML;
    },
    _openLinkInButton: (link) => {
      window.open(link, "_blank", "noopener,noreferrer");
    },
    _renderPreviewButton: (linkPreview) => {
      if (linkPreview) {
        return `<button onclick="App.methods._openLinkInButton('${linkPreview}')" type="button" class="btn btn-primary">
                    Preview
                    <i class="fa-solid fa-eye"></i>
                </button>`;
      } else {
        return "";
      }
    },
  },
};

App.init();
