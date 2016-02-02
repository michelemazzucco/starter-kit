'use strict';
var config = require('../config');

var gulp = require('gulp'),
    size = require('gulp-size'),
    concat = require('gulp-concat');

gulp.task('vendor', function() {
  gulp.src(config.tasks.vendor.src)
    .pipe(concat('vendor.js'))
    .pipe(size(config.tasks.size.opts))
    .pipe(gulp.dest(config.dist.js))
});
