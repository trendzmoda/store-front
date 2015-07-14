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
        ENV: process.env.NODE_ENV
      }
    }))
    .pipe(gulp.dest(DIST))
    .pipe(browserSync.reload({ stream: true }))
})
