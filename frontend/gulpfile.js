const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const concat = require('gulp-concat');  
const styl = require('gulp-styl');  
const refresh = require('gulp-livereload');  
const lr = require('tiny-lr');  
const server = lr();
const inject = require('gulp-inject');
const sass = require('gulp-sass');

//const ngAnnotate = require('gulp-ng-annotate');


gulp.task('lr-server', function() {  
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('build', function(){
    return browserify('./app/script/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', function(){
    return gulp.src('./app/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('inject', function(){
    gulp.src('home.html')
    .pipe(inject(gulp.src(['../frontend/build/index.js','../frontend/build/style.css', '../frontend/node_modules/angular-material/angular-material.min.css'
    ,'../frontend/node_modules/bootstrap/dist/css/bootstrap.min.css' ])))
    .pipe(gulp.dest('./'));
});

gulp.task('run', function(){
    gulp.run('lr-server', 'build', 'sass', 'inject');
    
    gulp.watch('./app/**/*', function(event) {  
        gulp.run('build');
    });
});



gulp.task('copy', function(){
   gulp.src(['../frontend/app/**/*', '../frontend/node_modules/**/*', '../frontend/bower_components/**/*'], {
       base: '../frontend'
   })
   .pipe(gulp.dest('./dist'));
});

