
const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
// const wrap = require('gulp-wrap');
// const declare = require('gulp-declare');
// const concat = require('gulp-concat');

gulp.task('html', function(){
    gulp.src('*.hbs')
        .pipe(handlebars())
        // .pipe(wrap('Handlebars.template(<%= contents %>)'))
        // .pipe(declare({
        //     namespace: 'MyApp.templates',
        //     noRedeclare: true, // Avoid duplicate declarations
        // }))
        // .pipe(concat('templates.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', [ 'html']);
