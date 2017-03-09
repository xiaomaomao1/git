'use strict'
var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');
var browserSync=require('browser-sync').create();

gulp.task('hello',function(){
	console.log('hello world');
})
gulp.task('copy',function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist/'));
})
gulp.task('less',function(){
	gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css/'));
})
gulp.task('js',function(){
	gulp.src('src/js/*js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js/'))
})
gulp.task('sync',function(){
	browserSync.init({
		server:{
			baseDir:'./src'
		}
	})
})
gulp.task('dist',function(){
	gulp.watch('src/index.html'3,['copy']);
	gulp.watch('src/less/*.less',['less']);
	gulp.watch('src/js/*.js',['js']);

})