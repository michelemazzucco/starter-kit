'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch');
    
gulp.task('watch', function() {
    gulp.watch('site/scss/**/*.scss', ['styles']);
    gulp.watch('site/**/*.html', ['minify-html']);
});