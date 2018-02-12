const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

// 编译less
gulp.task('css', function () {
    gulp.src('../src/styles/index.scss')
        .pipe(sass())
        .pipe(rename('moon.css'))
        .pipe(gulp.dest('../lib/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/iconfont/fonts/*.*')
        .pipe(gulp.dest('../lib/styles/fonts'));
});

gulp.task('default', ['css', 'fonts']);