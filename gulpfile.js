const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('html', () => {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('./'))
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch', () => {
    gulp.watch(['src/**/*.html'], gulp.series('html', browserSync.reload));
    gulp.watch(['src/**/*.scss'], gulp.series('sass', browserSync.reload));
    browserSync.init({
        server: './'
    });
});



gulp.task('default', () => gulp.parallel('html', 'sass', 'fonts'));