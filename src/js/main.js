//section elements
const body = document.querySelector('body');
//nav elements
const navBar = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-li');
const logo = document.querySelector('.logo');
// const navLinks = document.querySelector('.navLink') //cant find how multiple elements
const navInicio = document.getElementById('inicio');
const navSobre = document.getElementById('sobre');
const navMetodo = document.getElementById('metodo');
const navPrecos = document.getElementById('precos');
//toggler
const togglerButton = document.getElementById('toggler-button');
const dropDownMenu = document.querySelector('.drop-down');
//home elements
//...
//==============================================


//nav events&functions
function navDarken() {
  if (navBar.className === 'nav') {
    navBar.classList.add('navOnScroll');
    navBar.classList.remove('nav');
    logo.classList.add('logoOnScroll');
    logo.classList.remove('logo');
    navInicio.id = 'inicioOnScroll';
    navSobre.id = 'sobreOnScroll';
    navMetodo.id = 'metodoOnScroll';
    navPrecos.id = 'precosOnScroll';
  }
  if (window.pageYOffset === 0 && navBar.className === 'navOnScroll') {
    navBar.classList.add('nav');
    navBar.classList.remove('navOnScroll');
    logo.classList.add('logo');
    logo.classList.remove('logoOnScroll');
    navInicio.id = 'inicio';
    navSobre.id = 'sobre';
    navMetodo.id = 'metodo';
    navPrecos.id = 'precos';
  }
  if (togglerButton.id === 'toggler-buttonOnScroll' && window.pageYOffset === 0) {
    togglerButton.id = 'toggler-button';
  }
};
window.onscroll = navDarken;


//drop down menu
togglerButton.addEventListener('click', function () {
  if (togglerButton.id === 'toggler-button') {
    togglerButton.id = 'toggler-buttonOnClick';
    dropDownMenu.classList.add('drop-downOnClick');
    dropDownMenu.classList.remove('drop-down');

  }
  else {
    togglerButton.id = 'toggler-button';
    dropDownMenu.classList.add('drop-down');
    dropDownMenu.classList.remove('drop-downOnClick');
  }
});

dropDownMenu.addEventListener('mouseleave', function () {
  togglerButton.id = 'toggler-button';
  dropDownMenu.classList.add('drop-down');
  dropDownMenu.classList.remove('drop-downOnClick');
})