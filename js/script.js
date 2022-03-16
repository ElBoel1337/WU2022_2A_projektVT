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

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
/*html kod*/
/*            <div class="Slides">
                <img src="img/LAN.bild1.jpg" class="mySlides" style="width:100%">
            </div>
            <div class="Slides">
                <img src="img/LAN.bild2.jpg" class="mySlides" style="width:100%">
            </div>
            <div class="Slides">
                <img src="img/LAN.bild3.jpeg" class="mySlides" style="width:100%">
            </div>

            <button class="w3-button w3-display-left w3-black" onclick="plusDivs(-1)">&#10094;</button>
            <button class="w3-button w3-display-right w3-black" onclick="plusDivs(1)">&#10095;</button>
*/