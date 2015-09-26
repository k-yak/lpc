// including plugins
var gulp = require('gulp')
, minifyCss = require("gulp-minify-css")
, less = require("gulp-less")
, nodemon = require("gulp-nodemon")
, notify = require('gulp-notify')
, livereload = require('gulp-livereload')
, notify = require('gulp-notify')
, livereload = require('gulp-livereload')
, jshint = require("gulp-jshint");

gulp.task('compile-less', function () {
    gulp.src('./less/*.less') // path to your file
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('jsLint', function () {
    gulp.src(['./app.js', './*/*.js']) // path to your files
        .pipe(jshint())
        .pipe(jshint.reporter()); // Dump results
});

gulp.task('start', function() {
    //compile less
    gulp.watch(['./less/*.less'], ['compile-less']);
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'app.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	})
})

gulp.task('default', function() {
    //
});