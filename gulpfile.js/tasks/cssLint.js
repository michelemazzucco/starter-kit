'use strict';
var config = require('../config'),
    notifyError = require('../lib/notifyError');

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    scss = require("postcss-scss");

// PostCSS plugins
var reporter = require('postcss-reporter'),
    stylelint = require('stylelint');

gulp.task('cssLint', function() {
  
  var plugins = [
      stylelint(),
      reporter({clearMessages: true})
  ];

  gulp.src(config.src.scss)
    .pipe(postcss(plugins, {syntax: scss}))
});
