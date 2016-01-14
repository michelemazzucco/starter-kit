'use strict';
var config = require('../config');

var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function() {
    del(['./dist'])
});