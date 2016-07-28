'use strict';
var config = require('../config');

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    gulp.watch(config.src.scss, ['styles']);
    gulp.watch(config.src.js, ['bundle']);
    gulp.watch(config.src.html, ['minify-html']);
});
