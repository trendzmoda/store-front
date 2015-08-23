'use strict'

/**
 * settings
 */
var item = 'c-product-gallery__nav-item'
var itemActive = item + '--active'
var swiper = new Swiper('.swiper-container', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  paginationClickable: true,
  preloadImages: false,
  lazyLoading: true,
  onSlideChangeStart: function () {
    $('.' + item).eq(swiper.activeIndex).trigger('click', [ true ])
  }
})

/**
 * navigation
 */
$('.' + item)
  .on('click', function (e, dontSlide) {
    var $this = $(this).addClass(itemActive)
    $this.siblings().removeClass(itemActive)

    if (!dontSlide) {
      swiper.slideTo($this.index())
    }
  })
  .eq(swiper.activeIndex)
    .addClass(itemActive)
