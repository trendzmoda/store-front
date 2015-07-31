/**
 * tasks
 */
require('./gulp/build')
require('./gulp/clean')
require('./gulp/css')
require('./gulp/env')
require('./gulp/html')
require('./gulp/js')
require('./gulp/img')

// dev only
if (process.env.NODE_ENV !== 'production') {
  require('./gulp/imagemin')
  require('./gulp/server')
}
