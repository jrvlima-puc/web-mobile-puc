module.exports = function(grunt) {
    "use strict";

    grunt.registerTask("default", ["copy", "concurrent:target"]);

};
