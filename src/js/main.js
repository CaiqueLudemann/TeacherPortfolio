//html elements
const body = document.querySelector('body');
//nav elements
// const navBar = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-li');
const logo = document.getElementById('logo');
const navInicio = document.getElementById('inicio');
const navSobre = document.getElementById('sobre');
const navMetodo = document.getElementById('metodo');
const navPrecos = document.getElementById('precos');


//toggler
const togglerButton = document.getElementById('toggler-button');
const dropDownMenu = document.getElementById('drop-down');
//==============================================





function navLinkClicked() {
  navInicio.style.color = 'black';
  navInicio.style.backgroundColor = 'white';
  // body.style.backgroundColor = 'white';
}

function navLinkUnclicked() {
  navInicio.style.color = ''
  navInicio.style.backgroundColor = '';
  navInicio.style.borderRadius = '';
  // body.style.backgroundColor = '';
}

navInicio.onmouseover = navLinkClicked;
navInicio.onmouseout = navLinkUnclicked;




function dropDown() {
  if (dropDownMenu.style.display === 'block') {
    dropDownMenu.style.display = 'none';
    togglerButton.style.color = '';
    togglerButton.style.backgroundColor = '';
    togglerButton.style.transform = 'rotate(0deg)'
  } else {
    togglerButton.style.backgroundColor = 'white';
    togglerButton.style.padding = '0.3em'
    togglerButton.style.borderRadius = '100%';
    togglerButton.style.transform = 'rotate(90deg)';
    togglerButton.style.color = 'black';
    dropDownMenu.style.borderRadius = '10px';
    dropDownMenu.style.display = 'block';
  }
};

togglerButton.onclick = dropDown;










