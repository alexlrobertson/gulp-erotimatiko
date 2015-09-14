# gulp-erotimatiko
Questionable

[![Build Status](https://travis-ci.org/alexlrobertson/gulp-erotimatiko.svg)](https://travis-ci.org/alexlrobertson/gulp-erotimatiko)

```javascript
var gulp = require('gulp');
var erotimatiko = require('gulp-erotimatiko');

gulp.task('scripts', function () {
  gulp.src('src/**/*.js')
    .pipe(erotimatiko())
    .pipe(gulp.dest('build'));
});
```
