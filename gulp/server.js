'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync')
var config = require('../config')

/**
 * watch task
 */
gulp.task('watch', function () {
  gulp.watch([ './src/**/*.styl' ], [ 'css' ])
  gulp.watch([ './src/**/*.js' ], [ 'js' ])
  gulp.watch([ './src/**/*.jade' ], [ 'html' ])
})

/**
 * server task
 */
gulp.task('server', [ 'env:dev', 'watch', 'browserSync' ], function () {
  nodemon({ script: 'index.js' })
    .on('restart', function () {
      setTimeout(function () { browserSync.reload({ stream: false }) }, 1000)
    })
})

/**
 * browser sync task
 */
gulp.task('browserSync', [ 'build:dev' ], function() {
  browserSync({ proxy: 'http://localhost:' + config.APP_PORT })
})
