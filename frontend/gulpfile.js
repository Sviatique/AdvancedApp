const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require("babelify");

gulp.task('browserify', function(){
    return browserify('./app/script/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./app/'));
});

gulp.task('copy', function(){
   gulp.src(['../frontend/app/**/*', '../frontend/node_modules/**/*', '../frontend/bower_components/**/*'], {
       base: '../frontend'
   })
   .pipe(gulp.dest('./dist'));
});