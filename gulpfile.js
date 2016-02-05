var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var Server = require('karma').Server;
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var scss = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('buildVendor', function() {
   return gulp.src(['bower_components/jquery/dist/jquery.min.js',
   'bower_components/**/*.min.js'])
       .pipe(concat('vendors.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist'));
});

gulp.task('buildApp', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('buildCSS', function() {
	return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css',
			 'src/stylesheets/**/*.css'])
	    .pipe(minifycss())
	    .pipe(concat('cssstyles.css'))
	    .pipe(gulp.dest('dist'));
});

gulp.task('buildSCSS', function() {
  return gulp.src("src/stylesheets/**/*.scss")
      .pipe(scss({"bundleExec": true}))
      .pipe(concat('scssstyles.css'))
      .pipe(minifycss())
      .pipe(gulp.dest('dist'));
});

gulp.task('mergeCSS',['buildCSS','buildSCSS'], function() {
	return gulp.src(['dist/cssstyles.css','dist/scssstyles.css'])
	    .pipe(concat('styles.css'))
	    .pipe(gulp.dest('dist'))
	    .pipe(connect.reload());
});

gulp.task('cleanCSS',['mergeCSS'], function() {
	return gulp.src(['dist/cssstyles.css','dist/scssstyles.css'], {read: false})
	    .pipe(clean());
});

gulp.task('moveHTML', function() {
   return gulp.src('src/**/*.html')
       .pipe(gulp.dest('dist'))
       .pipe(connect.reload());
});

gulp.task('moveImages', function() {
	return gulp.src(['src/**/*.png','src/**/*.gif','src/**/*.jpg'])
	    .pipe(gulp.dest('dist'))
	    .pipe(connect.reload());
});

    gulp.task('build', ['buildVendor','buildApp','buildCSS','buildSCSS','mergeCSS','cleanCSS','moveHTML','moveImages']);

// ************************************************

gulp.task('karma', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('jshint', function() {
    return gulp.src(['src/js/**/*.js', 'src/tests/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter())
});

gulp.task('test', ['karma','jshint']);

// ************************************************

gulp.task('default',['build','test']);

gulp.task('connect', function(){
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['build']);
    gulp.watch('src/**/*.html', ['build']);
});

gulp.task('autorun', ['watch','connect']);