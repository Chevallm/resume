const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
    browserSync.init({
        server: './'
    });
    gulp.watch(['src/**/*.scss'], gulp.series('sass'));
    gulp.watch(['src/**/*.html']).on('change', gulp.series('html', browserSync.reload));
    
});

gulp.task('sass', () => {
    return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', () => {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('./'))
});

gulp.task('images', () => {
    return gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});



gulp.task('default', () => gulp.parallel('html', 'sass', 'fonts', 'images'));