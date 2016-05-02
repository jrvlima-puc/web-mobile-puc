module.exports = {
    css: {
        files: "client/**/*.scss",
        tasks: ["sass"],
        options: {
            livereload: true
        }
    },
    copy: {
        files: [
            "client/**/*.*"
        ],
        tasks: ["copy"]
    },
    gruntFiles: {
        files: [
            "grunt/**/*.js",
            "Gruntfile.js"
        ],
        tasks: ["jshint", "newer:jsbeautifier"]
    },
    js: {
        files: [
            "!client/puc-apps/components/**/*.js",
            "client/puc-apps/**/*.js",
            "tests/puc-specs/**/*.js",
            "grunt/karma.js"

        ],
        tasks: ["jshint", "newer:jsbeautifier", "karma"]
    }
};
