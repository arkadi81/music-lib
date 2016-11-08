// ANGULAR SANDBOX

playing around / learning testing concept with the help of oreilley's angularjs up and running

workflow setup:


npm init
npm install --save-dev angular-mocks karma jasmine-core karma-jasmine karma-chrome-launcher
npm install --global karma-cli

npm install --save-dev gulp gulp-minify-css gulp-sourcemaps gulp-uglify gulp-imagemin gulp-less gulp-autoprefixer jshint gulp-jshint gulp-mocha superagent gulp-a11y browser-sync browserify vinyl-source-stream vinyl-buffer

git init

set .gitignore

configure gulpfile.js
for proxy browser sync use

gulp.task('default', function() {
    browserSync.init({
        proxy: "http://localhost/handlebars-tutorial",
        files: ["./*.*"]
    });
});

SMALL gulpfile configuration (no minification, just testing and browsersync setup)



see full version of gulpfile.js in root.

following suggestions for semi large project directory structure from
https://scotch.io/tutorials/angularjs-best-practices-directory-structure

app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html