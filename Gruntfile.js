module.exports = function(grunt) {

    "use strict";

    require("load-grunt-tasks")(grunt);
    require("time-grunt")(grunt);
    require("load-grunt-config")(grunt);

    grunt.task.loadTasks("grunt/tasks");

    grunt.registerTask('heroku:production', ["sass", "jshint", "newer:jsbeautifier", "copy"]);

    console.log('*****');

};
