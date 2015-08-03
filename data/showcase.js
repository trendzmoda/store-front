'use strict'

/**
 * dependencies
 */
var _ = require('lodash')

/**
 * settings
 */
var items = [{
  name: 'Foo',
  description: 'Lorem ipsum dolor sit amet',
  url: '/product-name',
  image: 'http://lorempixel.com/225/300/fashion/1',
  price: 79.90,
  listPrice: 89.90,
  times: 2
}, {
  name: 'Bar',
  description: 'Consectetur adipisicing elit',
  url: '/product-name',
  image: 'http://lorempixel.com/225/300/fashion/2',
  price: 479.90,
  listPrice: 549.90,
  times: 5
}, {
  name: 'Baz',
  description: 'Dolor consectetur ipsum',
  url: '/product-name',
  image: 'http://lorempixel.com/225/300/fashion/3',
  price: 179.90,
  times: 3
}]

/**
 * showcase data generator
 * @param  {object} settings [settings object]
 * @return {object}          [showcase data object]
 */
function showcase(settings) {
  var qty = settings.qty

  return {
    items: _.flatten(_.times(Math.ceil(qty / items.length), function () { return items.concat(items) })).slice(0, qty)
  }
}

/**
 * public
 */
module.exports = showcase
