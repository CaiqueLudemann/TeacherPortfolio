//section elements
const body = document.querySelector('body');
const homeSection = document.querySelector('.homeSection');
const aboutSection = document.querySelector('.about-section');
const methodSection = document.querySelector('.method-section');
const priceSection = document.querySelector('.price-section');
//nav elements
const navBar = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-li');
const logo = document.querySelector('.logo');
//dropdown anchor links
const inicio = document.querySelectorAll('.inicio');
const sobre = document.querySelectorAll('.sobre');
const metodo = document.querySelectorAll('.metodo');
const precos = document.querySelectorAll('.precos');
//toggler
const togglerButton = document.getElementById('toggler-button');
const dropDownMenu = document.querySelector('.drop-down');
//home elements

//about elements
const aboutSectionWrap = document.querySelector('.about-section-wrap');
const aboutParagraphs = document.querySelectorAll('.about-paragraphs')
//==============================================


//nav events&functions
inicio.forEach(item => {
  item.addEventListener('click', function () {
    homeSection.style.display = 'flex';
    aboutSection.style.display = 'none';
    methodSection.style.display = 'none';
    priceSection.style.display = 'none';
  })
})

sobre.forEach(item => {
  item.addEventListener('click', function () {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'flex';
    methodSection.style.display = 'none';
    priceSection.style.display = 'none';
  })
})

metodo.forEach(item => {
  item.addEventListener('click', function () {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    methodSection.style.display = 'flex';
    priceSection.style.display = 'none';
  })
})

precos.forEach(item => {
  item.addEventListener('click', function(){
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    methodSection.style.display = 'none';
    priceSection.style.display = 'flex';
  })
})




//nav effects
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


// inicioOnScroll.addEventListener('click', function () {
//   homeSection.style.display = 'flex';
//   aboutSection.style.display = 'none';
//   methodSection.style.display = 'none';
//   priceSection.style.display = 'none';
// });
// sobreOnScroll.addEventListener('click', function () {
//   homeSection.style.display = 'none';
//   aboutSection.style.display = 'flex';
//   methodSection.style.display = 'none';
//   priceSection.style.display = 'none';
// });
// metodoOnScroll.addEventListener('click', function () {
//   homeSection.style.display = 'none';
//   aboutSection.style.display = 'none';
//   methodSection.style.display = 'flex';
//   priceSection.style.display = 'none';
// });
// precosOnScroll.addEventListener('click', function () {
//   homeSection.style.display = 'none';
//   aboutSection.style.display = 'none';
//   methodSection.style.display = 'none';
//   priceSection.style.display = 'flex';
// });
