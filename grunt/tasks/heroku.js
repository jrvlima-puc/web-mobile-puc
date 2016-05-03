module.exports = function(grunt) {
    "use strict";

    grunt.registerTask("heroku", ["sass", "jshint", "newer:jsbeautifier" "copy"]);

};
