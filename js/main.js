// Splash Screen
window.onload = () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
    setTimeout(() => {
      document.querySelector('.splash-screen').remove();
    }, 500);
  }, 0);
};

/* Mecânica modo dark */
const btnColorMode = document.querySelector('#btn-color-mode');

updateButtonText(localStorage.getItem('dark-mode') === 'enabled');
updateLogo(localStorage.getItem('dark-mode') === 'enabled');

btnColorMode.addEventListener('click', () => {
  const isDarkMode = document.body.classList.contains('dark-theme');
  localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
  updateButtonText(isDarkMode);
  updateLogo(isDarkMode);
})

function updateLogo(isDarkMode) {
  const logo = document.querySelector('.logo img');
  logo.src = `./assets/imgs/${isDarkMode ? 'logo-light.png' : 'logo-dark.png'}`;
  logo.alt = isDarkMode ? 'Logo claro' : 'Logo escuro';
} 

function updateButtonText(isDarkMode) {
  btnColorMode.querySelector('span').innerText = isDarkMode ? 'moon_stars' : 'light_mode';
  document.body.classList.remove(isDarkMode ? 'dark-theme' : 'light-theme');
  document.body.classList.add(isDarkMode ? 'light-theme' : 'dark-theme');
}

// Mecânica para destacar o item do menu conforme o scroll
const menuLinks = document.querySelectorAll('.menu ul li:not(.ignore) a');
const sections = document.querySelectorAll('main section');

const observerOptions = {
  root: null,
  rootMargin: '-75px 0px 0px 0px',
  threshold: 0.5
};

// Callback do Observer
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuLinks.forEach(link => {
        link.parentElement.classList.remove('menu__active');
      });
      
      const targetId = entry.target.getAttribute('id');
      const correspondingLink = document.querySelector(`.menu ul li a[href="#${targetId}"]`);
      
      if (correspondingLink) {
        correspondingLink.parentElement.classList.add('menu__active');
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

// Controle do botão scroll-top
const scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (window.scrollY > 100) {
    scrollTop.classList.add('active');
  } else {
    scrollTop.classList.remove('active');
  }
}

window.addEventListener('scroll', toggleScrollTop);
window.addEventListener('load', toggleScrollTop);

document.querySelector('.scroll-top__link').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
