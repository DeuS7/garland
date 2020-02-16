//Init modules
const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync").create();

//BrowserSync
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: "app"
		},
		port: 3000
	});
	done();
}

// BrowserSync Reload
function browserSyncReload(done) {
	browsersync.reload();
	done();
}

// File path vars
const files = {
	scssPath: 'app/scss/**/*.scss',
	jsPath: 'app/jsNext/**/*.js',
	htmlPath: 'app/*.html'
}

function devCss() {
	return src(files.scssPath)
		.pipe(sass())
		.pipe(dest('app/css'))
    	.pipe(browsersync.stream());
}

function devJs() {
	return src(files.jsPath)
		.pipe(dest('app/js'))
		.pipe(browsersync.stream());
}

function watchFiles() {
	watch("app/scss/**/*.{scss,sass}", devCss);
	watch("app/jsNext/**/*.js", devJs);
	watch("app/*.html", browserSyncReload);
}

exports.devCss = devCss;
exports.devJs = devJs;

exports.wa = parallel(watchFiles, browserSync);