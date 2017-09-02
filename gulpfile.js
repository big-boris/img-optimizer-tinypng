'use strict';

var gulp = require('gulp'),
    tinypng = require('gulp-tinypng');

var nm = './node_modules/';

gulp.task('tinypng', function() {
  return gulp.src('dev/img/**/*')
    .pipe(tinypng('API_KEY'))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch('dev/img/**/*', ['tinypng']);
});

gulp.task('default', [
  'tinypng',
  'watch'
]);
