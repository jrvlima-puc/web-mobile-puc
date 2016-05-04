module.exports = function(grunt) {
    "use strict";

    grunt.registerTask("build", ["sass", "jshint", "newer:jsbeautifier" "copy"]);

};
