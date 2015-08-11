'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var browserSync = require('browser-sync')

/**
 * watch task
 */
gulp.task('watch', function () {
  gulp.watch([ './src/**/*.styl' ], [ 'css' ])
  gulp.watch([ './src/**/*.js' ], [ 'js' ])
  gulp.watch([ './src/**/*.jade' ], [ 'html' ])
})

/**
 * browser sync task
 */
gulp.task('browserSync', [ 'build:dev' ], function() {
  browserSync.init({ server: { baseDir: './dist' }})
})

/**
 * server task
 */
gulp.task('server', [ 'env:dev', 'watch', 'browserSync' ])
