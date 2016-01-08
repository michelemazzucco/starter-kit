'use strict';
var config = require('../config');

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');

gulp.task('images', function() {
  gulp.src('./site/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
    .pipe(browserSync.stream())
});