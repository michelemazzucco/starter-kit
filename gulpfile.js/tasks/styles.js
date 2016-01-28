'use strict';
var config = require('../config'),
    notifyError = require('../lib/notifyError');

var gulp = require('gulp'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    size = require('gulp-size'),
    sass = require('gulp-sass'),
    scss = require("postcss-scss"),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

// PostCSS plugins
var autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    rucksack = require('rucksack-css'),
    reporter = require('postcss-reporter'),
    stylelint = require('stylelint'),
    cssnano = require('cssnano');

gulp.task('styles', function() {
    
    var plugins = [
        stylelint,
        lost,
        rucksack({fallbacks: true}),
        autoprefixer(config.postcssPlugins.autoprefixer.browsers),
        cssnano({safe: true}),
        reporter({ clearMessages: true })
    ];

    gulp.src(config.dir.src + '/scss/**/*.scss')
        .pipe(plumber({errorHandler: notifyError}))
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins, {syntax: scss}))
        .pipe(sass())
        .pipe(rename(config.opts.renamemin))
        .pipe(size(config.tasks.size.opts))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(config.dir.dest + '/css'))
        .pipe(browserSync.stream()) 
});