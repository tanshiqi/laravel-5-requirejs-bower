var gulp      = require('gulp'),
    rjs       = require('requirejs'),
    minifyCSS = require('gulp-minify-css');


gulp.task('cssBuild', function() {
    return gulp.src('./public/css/main.css')
        .pipe(minifyCSS({keepSpecialComments:0}))
        .pipe(gulp.dest('./public/dist/'));
});


gulp.task('rjsBuild', function() {
    return rjs.optimize({
        name: 'main',
        mainConfigFile: 'public/js/main.js',
        out: 'public/dist/main.js',
        preserveLicenseComments: false
    });
});


gulp.task('watch', function() {
    gulp.watch('public/js/**/*.js', ['rjsBuild']);
    gulp.watch('public/css/**/*.css', ['cssBuild']);
});


gulp.task('default', ['cssBuild', 'rjsBuild']);
gulp.task('live', ['watch', 'cssBuild', 'rjsBuild']);
