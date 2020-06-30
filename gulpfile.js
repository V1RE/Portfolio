const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

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

gulp.task("assets", () => {
  return gulp
    .src("./assets/**", { allowEmpty: true })
    .pipe(gulp.dest("./dist"));
});

gulp.task("jquery", () => {
  return gulp
    .src("./node_modules/jquery/dist/jquery.min.js")
    .pipe(gulp.dest("./dist"));
});

gulp.task("del", () => {
  return del("dist/**", { force: true });
});

gulp.task("build", gulp.series("sassCompile", "feather", "assets", "jquery"));

gulp.task("clean", gulp.series("del", "build"));

gulp.task("default", function() {
  gulp.watch(
    ["./_includes/sass/**/*.scss", "./assets/**"],
    gulp.series("build")
  );
});
