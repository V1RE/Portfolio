const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sassCompile", function() {
  return gulp
    .src("./_includes/sass/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("feather", function() {
  return gulp
    .src("./node_modules/feather-icons/dist/**")
    .pipe(gulp.dest("./dist/icons"));
});

gulp.task("build", gulp.series("sassCompile", "feather"));

gulp.task("default", function() {
  gulp.watch(["./_includes/sass/**/*.scss"], gulp.series("build"));
});
