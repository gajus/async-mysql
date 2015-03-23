'use strict';

let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint'),
    mocha = require('gulp-mocha');

gulp.task('lint', function () {
    return gulp
        .src(['./src/**/*.js', './src/tests/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('bundle', ['lint'], function () {
    return gulp
        .src('src/main.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            experimental: true,
            optional: ['runtime']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'));
});

gulp.task('test', ['bundle'], function () {
    require('babel/register')({
    experimental: true
});

    return gulp
        .src('./tests/*.js', {
            read: false
        })
        .pipe(mocha());
});

gulp.task('default', ['test']);

gulp.task('watch', function () {
    gulp.watch('src/**/*', ['default']);
});
