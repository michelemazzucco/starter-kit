'use strict';
var config = require('../config');

var gulp = require('gulp'),
    browserSync = require('browser-sync');

var browserSyncTask = function() {
    browserSync({server: config.dest.root});
}
gulp.task('browserSync', browserSyncTask)
module.exports = browserSyncTask
