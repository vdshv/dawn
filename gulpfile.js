var syntax         = 'scss'; // Syntax: sass or scss;

var gulp          = require('gulp')
		sass          =  require('gulp-sass')(require('sass')),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify-es').default,
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify');


// Sass|Scss Styles
gulp.task('styles', function() {
	return gulp.src('src/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('src/css'))
	.pipe(gulp.dest('../assets'))
});

// JS
gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		// .src([
		// 	'src/js/common.js', // Always at the end
		// ])
	// .pipe(concat('scripts.js'))
	.pipe(uglify({ output: { comments: false } }))
	// .pipe(gulp.dest('src/js'))
	.pipe(gulp.dest('../assets'))
});

gulp.task('watch', function() {
	gulp.watch('src/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
	gulp.watch('src/js/**/*.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'watch'));
	
