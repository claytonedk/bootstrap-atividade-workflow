'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require("gulp-htmlmin")
var notify = require("gulp-notify");

// Task para compilacao de SASS -> CSS
gulp.task('sass', function () {
   return gulp.src('./source/scss/style.scss')
        .pipe(sass())
        .on("error", notify.onError({title: "erro ao compilar", message: "<%= error.message %>"}))
        .pipe(gulp.dest('./dist'));
});

gulp.task("html", function() {
	return gulp.src("./source/index.html")
				 .pipe(htmlmin({collapseWhitespace: true}))
				 .pipe(gulp.dest("./dist"));
});

// Task para disparar tarefas caso ocorra alteracoes em arquivos
gulp.task('watch', function () {
    gulp.watch('./source/scss/style.scss', ['sass']);
    gulp.watch('./source/index.html', ['html']);
});

// Task default para iniciar apenas com o comando "gulp" no terminal
gulp.task("default", ['sass', 'html', 'watch']);