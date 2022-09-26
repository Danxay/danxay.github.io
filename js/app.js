import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offsetTop(animItem);
      const animStart = 3;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offsetTop(el) {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop
  }

  animOnScroll()
}

window.addEventListener('scroll', headerOnScroll);

const header = document.querySelector(".header");
let headerPos =  header.getBoundingClientRect().top + header.offsetHeight;

function headerOnScroll() {
  if (window.scrollY >= headerPos) {
      header.classList.add("_active")
  }
  else {
      header.classList.remove("_active")
  }
}

const mobileNavWrapper = document.querySelector('.header__mobile-nav-wrapper')
const mobileNavBtn = mobileNavWrapper.querySelector('.header__mobile-nav-btn');

mobileNavBtn.addEventListener('click', () => {
  mobileNavWrapper.classList.contains("_active") ? mobileNavWrapper.classList.remove("_active") : mobileNavWrapper.classList.add("_active");
})


let options = {
  strings: ['Привет!'],
  typeSpeed: 80,
  startDelay: 200,
};
new Typed('.about-me__banner-title', options);


new Swiper(".portfolio__swiper", {
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    1400: {
      slidesPerView: 2
    }
  }
});