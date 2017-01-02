var gulp = require('gulp');

// Need fs package to load json configs
var fs = require('fs');
var jsonConfigs = JSON.parse(fs.readFileSync('json-based-config.json'));

// Load JavaScript based configs
var jsConfigs = require('./js-based-config')();

gulp.task('default', function() {
    console.log(jsConfigs.test);
    console.log(jsonConfigs.test);
});
