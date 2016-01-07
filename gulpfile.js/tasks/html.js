'use strict';
var config = require('../config');

var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    browserSync = require('browser-sync');

gulp.task('minify-html', function() {
  gulp.src(config.dir.src + '/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest(config.dir.dest))
    .pipe(browserSync.stream())
});