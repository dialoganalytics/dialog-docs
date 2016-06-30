'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('source/stylesheets/site.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/'));
});

// Build
gulp.task('build', ['sass']);

// Default & Watch
gulp.task('default', function () {
  gulp.watch('source/stylesheets/**/*.scss',['sass']);
});
