const hamburger = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger.addEventListener('click', () => {

  container.classList.toggle('change');

});







let bouton = document.querySelector('.scroll-btn');

bouton.addEventListener('click', () => {

  document.querySelector('html').style.scrollBehavior
    = "smooth";

  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior
      = "unset";

  }, 1000)

})







const slideshow = document.querySelector('.slideshow');

setInterval(() => {

  const firstIcon = slideshow.firstElementChild

  firstIcon.classList.add('faded-out')

  const thirdIcon = slideshow.children[3]

  thirdIcon.classList.add('light')

  thirdIcon.previousElementSibling.classList.remove('light')

  setTimeout(() => {

    slideshow.removeChild(firstIcon)

    slideshow.appendChild(firstIcon)

    setTimeout(() => {
      firstIcon.classList.remove('faded-out')
    }, 1200)

  }, 1200)

}, 3000)









const hamb = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');

let touchStart, touchEnd;


sidebar.addEventListener('touchStart', e => {

  touchStart = e.targetTouches[0].clientX;

})

sidebar.addEventListener('touchmove', e => {

  touchEnd = e.targetTouches[0].clientX;

})

sidebar.addEventListener('touchend', e => {

  if (toucheStart - touchEnd > 100) {

    sidebar.classList.remove
  }

})








