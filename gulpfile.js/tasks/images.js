'use strict';
var config = require('../config');

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');

gulp.task('images', function() {
  gulp.src(config.src.images)
    .pipe(imagemin())
    .pipe(gulp.dest(config.dest.images))
    .pipe(browserSync.stream())
});
