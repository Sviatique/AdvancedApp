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
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const concatCSS = require('gulp-concat-css');
const karma = require('karma').Server;
const jasmine = require('gulp-jasmine');
//const ngAnnotate = require('gulp-ng-annotate');

gulp.task('lint', vet);

gulp.task('lrServer', lrServer);

gulp.task('minifyCSS', minifyCSS);

gulp.task('bundle', bundle);

gulp.task('minifyJS', ['bundle'], minifyJS);

gulp.task('concatCSS', bundleCSS);

gulp.task('templates', templates);

gulp.task('injectDeps', ['concatCSS','templates'], injectDeps);

gulp.task('build',['minifyJS', 'injectDeps']);

gulp.task('sass', sassCompose);

gulp.task('prettify', prettify );

gulp.task('run',['lr-server', 'build', 'sass', 'inject'], run );

gulp.task('unitTestCi', unitTestCi);

gulp.task('unitTestWatch', unitTestWatch);

gulp.task('e2e', e2e);

gulp.task('test',['unitTestCi', 'e2e']);

///////////////////////////////

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
    .pipe(uglify('index.min.js'))
    .pipe(gulp.dest('./dist'));
}

function injectDeps(){
    return gulp.src('home.html')
    .pipe(inject(gulp.src(['./build/index.js',
                           './build/templates.js', 
                           './build/style.css']), {relative: 'true'}))
    .pipe(gulp.dest('./'));
}

function vet(){
    const src = ['./app/script/**/*.js', './*.js'];
    return gulp
        .src(src)
        .pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(jshint.reporter('fail'));
}

function prettify() {
    return gulp.src('./dist/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
}

function minifyCSS(){
    return gulp.src('./build/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
}

function lrServer() {  
    return server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
}

function sassCompose(){
    return gulp.src('./app/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
}

function run(){
    gulp.watch('./app/**/*', function(event) {  
        gulp.run('build');
    });
}

function getServer(done, singleRun){
    return new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: singleRun
    }, done);
}

function unitTestCi(done) {
    return getServer(done, true).start();
    
}


function e2e() {
    
}

function unitTestWatch(done) {
    return getServer(done, false).start();
}


function bundleCSS() {
    const src = ['./build/style.css', 
                 './node_modules/angular-material/angular-material.min.css',
                 './node_modules/bootstrap/dist/css/bootstrap.min.css'];
    return gulp.src(src)
    .pipe(concatCSS('style.css'))
    .pipe(gulp.dest('./build'))
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
