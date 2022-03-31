/*Meny*/
const nav = document.getElementById('nav-links')
const burger = document.getElementById('burger')

function toggleMenu() {
    nav.classList.toggle('nav-active')

    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)


/*Bilder*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
/*Funktion*/
function showDivs(n) {
  /*Variabel*/
  var i;
  /*Array*/
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  /*For-loop*/
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}