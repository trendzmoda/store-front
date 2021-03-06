'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var imagemin = require('gulp-imagemin')

/**
 * imagemin task
 */
gulp.task('imagemin', function(){
  return gulp.src('./src/img/*.{jpg,png,gif,svg}')
    .pipe(plumber({ errorHandler: notify.onError('MINIFY IMAGES Error: <%= error.message %>') }))
    .pipe(imagemin())
    .pipe(gulp.dest('./src/img'))
})
