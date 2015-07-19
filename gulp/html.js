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
gulp.task('html', function () {
  gulp.src('./src/html/*.jade')
    .pipe(plumber({ errorHandler: notify.onError('CSS Error: <%= error.message %>') }))
    .pipe(changed(DIST))
    .pipe(jade({
      pretty: true,
      locals: {
        config: require('../config'),
        data: requireDir('../data', { camelcase: true }),
        ENV: process.env.NODE_ENV,
        toPrice: function (price) {
          return price.toFixed(2).replace('.', ',')
        }
      }
    }))
    .pipe(gulp.dest(DIST))
    .pipe(browserSync.reload({ stream: true }))
})
