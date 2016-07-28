'use strict';
var config = require('../config');

var gulp = require('gulp');
var size = require('gulp-size');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('vendor', function() {
  gulp.src(config.tasks.vendor.src)
    .pipe(concat('vendor.js'))
    .pipe(uglify({mangle: false, compress:true}))
    .pipe(rename(config.opts.renamemin))
    .pipe(size(config.tasks.size.opts))
    .pipe(gulp.dest(config.dest.js))
});
