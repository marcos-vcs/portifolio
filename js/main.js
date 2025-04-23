
const App = {
  data: {
    btnColorMode: document.querySelector("#btn-color-mode"),
    accordionSkills: [
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
    ],
    jobs: [
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
    ],
    degrees: [
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
  },
  methods: {
    loadSplashScreen: () => {
      window.onload = () => {
        setTimeout(() => {
          document.body.classList.add("loaded");
          setTimeout(() => {
            document.querySelector(".splash-screen").remove();
          }, 1500);
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
      const downloadBtn = document.querySelector(".about__download-cv button");

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
      activeBtnQualifications.querySelector("span").innerText ===
      "Trabalhos";

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
    loadFooter: () => {
      const footer = document.querySelector(".footer");
      footer.innerHTML = footer.innerHTML.replace(
        "{atualYear}",
        new Date().getFullYear()
      );
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

      return `${startStr} - ${endStr}`;
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
  },
};

App.init();
