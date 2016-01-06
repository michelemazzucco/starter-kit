'use strict';
var gulp = require('gulp');

gulp.task('default', ['styles', 'minify-html', 'watch', 'bundle', 'browserSync']);