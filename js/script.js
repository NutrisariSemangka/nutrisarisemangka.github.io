let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 4,
      },
      640: {
         slidesPerView: 5,
      },
      768: {
         slidesPerView: 1,
      },
      1000: {
         slidesPerView: 1,
      },
   },
});

// isotope js
$(window).on('load', function () {
   $('.filters_menu li').click(function () {
      $('.filters_menu li').removeClass('active');
      $(this).addClass('active');

      var data = $(this).attr('data-filter');
      console.log(data)
      $grid.isotope({
         filter: data
      })
   });

   var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: false,
      masonry: {
         columnWidth: ".all"
      }
   })
});