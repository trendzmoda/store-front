'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var changed = require('gulp-changed')
var stylus = require('gulp-stylus')
var postcss = require('gulp-postcss')
var combineMq = require('gulp-combine-mq')
var browserSync = require('browser-sync')
var rename = require('gulp-rename')

/**
 * settings
 */
var DIST = './dist/css'

/**
 * css task
 */
gulp.task('stylus', function () {
  return gulp.src('./src/css/*.styl')
    .pipe(plumber({ errorHandler: notify.onError('CSS Error: <%= error.message %>') }))
    .pipe(changed(DIST))
    .pipe(stylus())
    .pipe(postcss([ require('autoprefixer-core') ]))
    .pipe(combineMq())
    .pipe(gulp.dest(DIST))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('css', [ 'stylus' ])
