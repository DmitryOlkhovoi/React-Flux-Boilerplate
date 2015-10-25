var gulp = require('gulp');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src('src/**')
    .pipe(babel())
    .pipe(gulp.dest('build'));

});

gulp.task('browserify', function() {
  return gulp.src('build/app.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: process.env.NODE_ENV === 'development'
    }))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('build', ['babel', 'browserify']);

gulp.task('watch', function() {
  gulp.watch('./src', 'build');
});
