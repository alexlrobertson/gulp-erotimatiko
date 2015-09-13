# gulp-erotimatiko
Questionable

```javascript
var gulp = require('gulp');
var erotimatiko = require('gulp-erotimatiko');

gulp.task('scripts', function () {
  gulp.src('src/**/*.js')
    .pipe(erotimatiko())
    .pipe(gulp.dest('build'));
});
```
