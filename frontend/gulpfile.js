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
const templateCache = require('gulp-angular-templatecache');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const creanCSS = require('gulp-clean-css');
//const ngAnnotate = require('gulp-ng-annotate');


gulp.task('lr-server', function() {  
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('compress', function(){
    gulp.src('./build/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('minifyCSS', function(){
    gulp.src('./build/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', function(){
    browserify('./app/script/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./build'));
})

gulp.task('build', function(){
    gulp.run('bundle', 'compress');
});


gulp.task('templates', function(){
    return gulp.src('app/template/**/*.html')
    .pipe(templateCache({module: 'templatesCache', standalone:true}))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', function(){
    return gulp.src('./app/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('inject', function(){
    gulp.run('templates');
    gulp.src('home.html')
    .pipe(inject(gulp.src(['./build/index.js'
                           , './build/templates.js'
                           , './build/style.css'
                           , './node_modules/angular-material/angular-material.min.css'
                           , './node_modules/bootstrap/dist/css/bootstrap.min.css' ]), {relative: 'true'}))
    .pipe(gulp.dest('./'));
});

gulp.task('prettify', function() {
  return gulp.src('./dist/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
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

