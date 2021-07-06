const gulp = require("gulp");
const { src, dest, watch, parallel, series } = require("gulp");

// img task
// const imagemin = require("gulp-imagemin"); // not in a dev dep.
// function imgMinify() {
//   return src("src/pics/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
// }
// exports.img = imgMinify;

const htmlmin = require("gulp-htmlmin");
function copyHtml() {
  return src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("dist"));
}

exports.html = copyHtml;

const concat = require("gulp-concat");
const terser = require("gulp-terser");
const babel = require("gulp-babel");

// js task
function jsMinify() {
  return src("src/js/**/*.js", { sourcemaps: true })
    .pipe(concat("all.min.js"))
    .pipe(babel())
    .pipe(terser())
    .pipe(dest("dist/assets/js", { sourcemaps: "." }));
}
exports.js = jsMinify;

var cleanCss = require("gulp-clean-css");

// sass task
var sass = require("gulp-dart-sass");
function sassMinify() {
  return src(["src/sass/**/*.scss", "src/css/**/*.css"], { sourcemaps: true })
    .pipe(sass())
    .pipe(concat("style.sass.min.css"))
    .pipe(cleanCss())
    .pipe(dest("dist/assets/css", { sourcemaps: "." }));
}

var browserSync = require("browser-sync");
function serve(cb) {
  browserSync({
    server: {
      baseDir: "dist/",
    },
  });
  cb();
}
function reloadSync(cb) {
  browserSync.reload();
  cb();
}

// watch task
function watchTask() {
  watch("src/*.html", series(copyHtml, reloadSync));
  watch("src/js/**/*.js", { interval: 1000 }, jsMinify);
  watch(
    ["src/css/**/*.css", "src/sass/**/*.scss"],
    { interval: 1000 },
    series(sassMinify, reloadSync)
  );
}
exports.default = series(
  parallel(jsMinify, sassMinify, copyHtml),
  serve,
  watchTask
);
