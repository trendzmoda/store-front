'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var changed = require('gulp-changed')
var jade = require('gulp-jade')
var browserSync = require('browser-sync')
var requireDir = require('require-dir')

/**
 * settings
 */
var DIST = './dist/'

/**
 * task
 */
gulp.task('jade', function () {
  function $(price) {
    return price.toFixed(2).replace('.', ',')
  }

  return gulp.src('./src/html/*.jade')
    .pipe(plumber({ errorHandler: notify.onError('HTML Error: <%= error.message %>') }))
    .pipe(changed(DIST))
    .pipe(jade({
      pretty: true,
      locals: {
        config: require('../config'),
        data: requireDir('../data', { camelcase: true }),
        ENV: process.env.NODE_ENV,
        toPrice: $,
        toInstallment: function (price, times) {
          return $(price / times)
        }
      }
    }))
    .pipe(gulp.dest(DIST))
})

gulp.task('html', [ 'jade' ], browserSync.reload)
