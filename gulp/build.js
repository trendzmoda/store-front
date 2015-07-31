'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var runSequence = require('run-sequence')

/**
 * settings
 */
var tasks = [ 'html', 'css', 'js', 'img' ]

/**
 * build task
 */
gulp.task('build:dev', [ 'env:dev' ], function (next) {
  runSequence('clean:dist', tasks, next)
})
