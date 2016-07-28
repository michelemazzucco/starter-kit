'use strict';
var config = require('../config');
var notifyError = require('../lib/notifyError');

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var scss = require("postcss-scss");

// PostCSS plugins
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');

gulp.task('cssLint', function() {

  var plugins = [
      stylelint(),
      reporter({clearMessages: true})
  ];

  gulp.src(config.src.scss)
    .pipe(postcss(plugins, {syntax: scss}))
});
