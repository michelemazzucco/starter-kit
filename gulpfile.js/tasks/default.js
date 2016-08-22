'use strict';
var gulp = require('gulp');

gulp.task('default', [
  'clean',
  'styles',
  'minify-html',
  'watch',
  'bundle',
  'vendor',
  'browserSync'
]);
