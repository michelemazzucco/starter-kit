var notify = require("gulp-notify");

module.exports = function(err) {
	notify.onError({
		title: "Gulp",
		subtitle: "Failure!",
		message: "Error: <%= error.message %>",
		sound: "Funk"
	})(err);
	this.emit('end');
};