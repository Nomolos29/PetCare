// const contactLink = document.querySelectorAll('.link:nth-child(4)')

// document.querySelector('.link:nth-child(4)').addEventListener('click', (e) => {
//   e.preventDefault()

//   effect()
// }) 

// function effect() {
//   // e.preventDefault();

//   if(this.hash !== '') {

//     const hash = this.hash;

//     document.querySelector('html, body').animate({
//       scrollTop: hash.offset()
//     },
    
//     );

//   };
// };

// ---------------------------------------
// ANIMATION FOR SMOOTH SCROLLING
// ---------------------------------------

const section1 = document.querySelector('#sec-1')
const section2 = document.querySelector('#sec-2')
const section3 = document.querySelector('#puppies')
const section4 = document.querySelector('#food')

// ~~Function for content disappearal
function disappear(object) {
  object.style.opacity = 0
  object.style.visibility = 'hidden'
};

// ~~Function for content appearal
function appear(object) {
  object.style.opacity = 1
  object.style.visibility = 'visible'
  object.style.transition = 'all 1s ease-out 0.2s'
};

// If Else conditional logic statement for Animation
window.addEventListener('scroll', function() {
  if(this.window.scrollY < 200 ) {
    disappear(section1)
    disappear(section2)
    disappear(section3)
    disappear(section4)
  
  } else if(this.window.scrollY > 400 && this.window.scrollY < 500){

    appear(section1)
  
  } else if(this.window.scrollY > 700 && this.window.scrollY < 1000 ){

    appear(section2)

  } else if(this.window.scrollY > 800 && this.window.scrollY < 1100 ){
    
    appear(section3)

  } else if(this.window.scrollY > 1700 ){

    appear(section4)

  }
})


