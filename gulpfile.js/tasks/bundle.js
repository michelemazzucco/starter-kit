'use strict';
var config = require('../config');

var gulp = require('gulp'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('bundle', function() {
  gulp.src(config.dir.src + '/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify({mangle: false, compress:true}))
    .pipe(size(config.tasks.size.opts))
    .pipe(gulp.dest('dist/js'))
});