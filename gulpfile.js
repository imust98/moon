const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprites');

gulp.task('sprites', function() {
  return gulp
    .src('src/images/*.svg')
    .pipe(svgSprite({
        cssFile:'scss/_sprite.scss'
    }))
    .pipe(gulp.dest('packages'));
});
