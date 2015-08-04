'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')
var plumber = require('gulp-plumber')
var notify = require('gulp-notify')
var replace = require('gulp-replace')
var del = require('del')

/**
 * settings
 */
var settings = {
  shape: {
    dimension: {
      maxWidth: 16,
      maxHeight: 16
    },
    spacing: {
      padding: 4
    }
  },
  mode: {
    view: {
      prefix: '.u-svg-%s',
      bust: false,
      render: {
        styl: true
      }
    }
  }
}

/**
 * tasks
 */
gulp.task('svg:sprite', function () {
  return gulp.src('./src/svg/*.svg')
    .pipe(plumber({ errorHandler: notify.onError('SVG Error: <%= error.message %>') }))
    .pipe(svgSprite(settings))
    .pipe(gulp.dest('./src/svg'))
})

gulp.task('svg:copycss', [ 'svg:sprite' ], function () {
  return gulp.src('./src/svg/view/*.styl')
    .pipe(replace('svg/sprite', '/img/sprite'))
    .pipe(gulp.dest('./src/css/util'))
})

gulp.task('svg:copysvg', [ 'svg:sprite' ], function () {
  return gulp.src('./src/svg/view/svg/*.svg')
    .pipe(gulp.dest('./src/img'))
})

gulp.task('svg', [ 'svg:copycss', 'svg:copysvg' ], function (next) {
  del('./src/svg/view', next)
})
