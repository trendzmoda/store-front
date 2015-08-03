'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')

/**
 * settings
 */
var settings = {
  shape: {
    dimension: {
      maxWidth: 32,
      maxHeight: 32
    },
    spacing: {
      padding: 10
    }
  },
  mode: {
    view: {
      bust: false,
      render: {
        styl: true
      }
    }
  }
}

/**
 * svg task
 */
gulp.task('svg', function () {
  return gulp.src('./src/svg/*.svg')
    .pipe(plumber({ errorHandler: notify.onError('SVG Error: <%= error.message %>') }))
    .pipe(svgSprite(settings))
    .pipe(gulp.dest('./src/img'))
})
