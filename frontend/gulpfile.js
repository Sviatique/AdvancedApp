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


gulp.task('minifyCSS', function(){
    gulp.src('./build/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', bundle);

gulp.task('minifyJS', ['bundle'], minifyJS);

gulp.task('templates', templates);

gulp.task('injectDeps', ['templates'], injectDeps);

gulp.task('build',['minifyJS', 'injectDeps']);


gulp.task('sass', function(){
    return gulp.src('./app/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
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

gulp.task('unitTestCi', function(){
    
});

gulp.task('unitTestWatch', function(){
    
});

gulp.task('e2e', function(){
    
});

gulp.task('test',['unitTestCi', 'e2e'], function(){
    
});


function bundle(){
    const src = './app/script/app.js';
    
    return browserify(src)
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./build'));
}

function templates(){
    const src = 'app/template/**/*.html';
    return gulp.src(src)
    .pipe(templateCache({module: 'templatesCache', standalone:true}))
    .pipe(gulp.dest('./build'));
}

function minifyJS(){
    const src = './build/**/*.js';
    
    return gulp.src(src)
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function injectDeps(){
    gulp.src('home.html')
    .pipe(inject(gulp.src(['./build/index.js'
                           , './build/templates.js'
                           , './build/style.css'
                           , './node_modules/angular-material/angular-material.min.css'
                           , './node_modules/bootstrap/dist/css/bootstrap.min.css' ]), {relative: 'true'}))
    .pipe(gulp.dest('./'));
}
//gulp.task('copy', copy);
//
//function copy(){
//    const src = ['../frontend/app/**/*', '../frontend/node_modules/**/*', '../frontend/bower_components/**/*'];
//    const base = {
//       base: '../frontend'
//    };
//    
//    return gulp.src(src, base)
//    .pipe(gulp.dest('./dist'));
//};
