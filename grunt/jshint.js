module.exports = {
    options: {
        jshintrc: ".jshintrc",
        reporter: require("jshint-stylish")
    },
    common: {
        src: [
            "Gruntfile.js",
            "grunt/**/*.js"
        ]
    },
    app: {
        src: [
            // "client/puc-apps/**/*.js"
        ]
    },
    test: {
        src: [
            "tests/**/*.js"
        ]
    }

};
