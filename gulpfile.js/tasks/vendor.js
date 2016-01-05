'use strict';
var config = require('../config');

var gulp = require('gulp'),
    size = require('gulp-size'),
    concat = require('gulp-concat');

gulp.task('vendor', function() {
  gulp.src(config.tasks.concat.npmsrc)
    .pipe(concat('vendor.js'))
    .pipe(size(config.tasks.size.opts))
    .pipe(gulp.dest('dist/js'))
});