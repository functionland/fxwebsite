(function () {
  var carousel = document.querySelector('.showcase-carousel');
  if (!carousel) return;

  var track = carousel.querySelector('.showcase-carousel__track');
  var slides = carousel.querySelectorAll('.showcase-slide');
  var dots = carousel.querySelectorAll('.showcase-carousel__dot');
  var prevBtn = carousel.querySelector('.showcase-carousel__arrow--prev');
  var nextBtn = carousel.querySelector('.showcase-carousel__arrow--next');
  var current = 0;
  var count = slides.length;
  var interval = null;
  var DELAY = 5000;

  function goTo(index) {
    if (index < 0) index = count - 1;
    if (index >= count) index = 0;
    current = index;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('showcase-carousel__dot--active', i === current);
    }
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetTimer() {
    clearInterval(interval);
    interval = setInterval(next, DELAY);
  }

  prevBtn.addEventListener('click', function () { prev(); resetTimer(); });
  nextBtn.addEventListener('click', function () { next(); resetTimer(); });

  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
      goTo(parseInt(this.dataset.slide, 10));
      resetTimer();
    });
  }

  carousel.addEventListener('mouseenter', function () { clearInterval(interval); });
  carousel.addEventListener('mouseleave', function () { resetTimer(); });

  // Touch swipe
  var startX = 0;
  carousel.addEventListener('touchstart', function (e) {
    startX = e.changedTouches[0].clientX;
  }, { passive: true });
  carousel.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      dx > 0 ? prev() : next();
      resetTimer();
    }
  }, { passive: true });

  resetTimer();
})();
