'use strict'

var $window = $(window)
var $mainHeader = $('#c-main-header')

$window
  .on('scroll', function () {
    $mainHeader[ $window.scrollTop() ? 'addClass' : 'removeClass' ]('c-main-header--active')
  })
  .trigger('scroll')
