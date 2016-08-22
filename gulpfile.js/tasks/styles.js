'use strict';
var config = require('../config');
var notifyError = require('../lib/notifyError');

var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var size = require('gulp-size');
var sass = require('gulp-sass');
var scss = require("postcss-scss");
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var gulpif = require('gulp-if');

var gutil = require('gulp-util');

var env = gutil.env.env || 'prod';

// PostCSS plugins
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var rucksack = require('rucksack-css');
var reporter = require('postcss-reporter');
var cssnano = require('cssnano');

gulp.task('styles', ['cssLint'], function() {

    var plugins = [
        lost,
        rucksack({fallbacks: true}),
        autoprefixer(config.postcssPlugins.autoprefixer.browsers),
        cssnano({safe: true, discardComments: {removeAll: true}})
    ];

    gulp.src(config.src.scss)
        .pipe(plumber({errorHandler: notifyError}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(rename(config.opts.renamemin))
        .pipe(size(config.tasks.size.opts))
        .pipe(gulpif(env === 'local', sourcemaps.write('./maps')))
        .pipe(gulp.dest(config.dest.css))
        .pipe(browserSync.stream())
});
