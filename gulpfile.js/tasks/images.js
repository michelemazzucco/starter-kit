'use strict';
var config = require('../config');

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');

gulp.task('images', function() {
  gulp.src(config.src.images)
    .pipe(imagemin())
    .pipe(gulp.dest(config.dest.images))
    .pipe(browserSync.stream())
});
