'use strict';
var config = require('../config');

var gulp = require('gulp'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('vendor', function() {
  gulp.src(config.tasks.vendor.src)
    .pipe(concat('vendor.js'))
    .pipe(uglify({mangle: false, compress:true}))
    .pipe(size(config.tasks.size.opts))
    .pipe(gulp.dest(config.dest.js))
});
