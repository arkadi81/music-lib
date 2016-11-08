var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');
// source maps allows source to point to originial
// non minified css, makes debugging much easier
var sourcemaps = require('gulp-sourcemaps');
// js minifier
var uglify = require('gulp-uglify');
// img minifier
var imageMin = require('gulp-imagemin');

//var handlebars = require('gulp-compile-handlebars');
//var rename = require('gulp-rename');

var less = require ('gulp-less');

//autoprefixer important to introduce old browser capability to css
var autoprefixer = require('gulp-autoprefixer');

//browserfy isnt a gulp plugin, requires vinyl to function with gulp
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// js linter gulp plugin
var jshint = require('gulp-jshint');

// unit testing plugin
var mocha = require('gulp-mocha');

// to require local use ./ in front of path
//var menu = require('./menu.json');


gulp.task('images', function() {
	gulp.src(['src/img/**/*'])
		.pipe(imageMin())
		.pipe(gulp.dest('dist/img'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	/* Deprecated 08/25/2016, old content, substituted by browserfy plugin assembly
	gulp.src(['src/scripts/main.js']) // source
		.pipe(sourcemaps.init()) // for easier debuggin
		.pipe(uglify()) // minify js
		.pipe(sourcemaps.write()) // sub unminified code for debugging
		.pipe(gulp.dest('dist/scripts')) // set dest
		.pipe(browserSync.stream()); // refresh browser
		*/

	var b = browserify({
		entries: 'src/scripts/main.js',
		debug: true
	});

	b.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/scripts/'))
		.pipe(browserSync.stream())
});

gulp.task('styles', function() {
	gulp.src(['src/styles/**/main.less'])
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(minifyCss())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());
		// on change of css file, minify it, dump 
		//minified version in dist dir and sync
});

gulp.task('lint', function() {
	gulp.src('src/scripts/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
	gulp.src('test/*.js')
		.pipe(mocha());
});
//unit testing

// middle argument is initialization. runs the 4 tasks
// immediately before startup
gulp.task('default', ['styles','images','scripts'], function() {
	/* console.log ('Your first gulp task has run!'); */
	browserSync.init({
        proxy: "http://localhost/music-lib",
        files: ["*.*","src/*.*","src/app/*.js","src/app/**/*.*"]
    });


	/*browserSync.init({
		server: './'
	});*/
	//gulp.watch('src/**/*', browserSync.reload);
	// on change of css watch styles and activate styles task
	//gulp.watch('src/styles/**/*.less', ['styles']);
	//gulp.watch('src/img/**/*', ['images']);
	//gulp.watch('src/scripts/**/*.js', ['scripts']);
	gulp.watch('*.html', browserSync.reload);
});