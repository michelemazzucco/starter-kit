'use strict';
var config = require('../config');
var notifyError = require('../lib/notifyError');

var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var size = require('gulp-size');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('bundle', function() {
  gulp.src(config.src.js)
    .pipe(plumber({errorHandler: notifyError}))
    .pipe(concat('bundle.js'))
    .pipe(uglify({mangle: false, compress:true}))
    .pipe(rename(config.opts.renamemin))
    .pipe(size(config.tasks.size.opts))
    .pipe(gulp.dest(config.dest.js))
});
