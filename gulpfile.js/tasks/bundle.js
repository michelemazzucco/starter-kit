'use strict';
var config = require('../config');

var gulp = require('gulp'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync');

gulp.task('bundle', function() {
  gulp.src(config.src.js)
    .pipe(concat('bundle.js'))
    .pipe(uglify({mangle: false, compress:true}))
    .pipe(size(config.tasks.size.opts))
    .pipe(gulp.dest(config.dest.js))
    .pipe(browserSync.stream())
});
