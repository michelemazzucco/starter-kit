'use strict';
var config = require('../config'),
    notifyError = require('../lib/notifyError');

var gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('bundle', function() {
  gulp.src(config.src.js)
    .pipe(plumber({errorHandler: notifyError}))
    .pipe(concat('bundle.js'))
    .pipe(uglify({mangle: false, compress:true}))
    .pipe(size(config.tasks.size.opts))
    .pipe(gulp.dest(config.dest.js))
});
