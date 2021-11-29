let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
const homeMainImg = document.querySelector('.home figure img');
const homeSliderImg = document.querySelectorAll('.img-slider img');


// 햄버거 메뉴 버튼 활성화
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

// 스크롤 됐을때 메뉴 비활성화
window.addEventListener('scroll', () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
});

// Home에 slider img를 클릭하면, 메인 이미지 바뀌기
homeSliderImg.forEach(img => {
  img.addEventListener('click', e => {
    e.preventDefault();
    let currentImg = img.getAttribute('src');
    homeMainImg.src = currentImg;
  })
})

// swiper slider
const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});