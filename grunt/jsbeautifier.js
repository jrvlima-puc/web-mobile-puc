module.exports = {
    grunt: {
        src: [
            "Gruntfile.js",
            "grunt/**/*.js"
        ]
    },
    app: {
        src: [
            "!client/puc-apps/components/**/*.*",
            "client/puc-apps/**/*.js"
        ]
    },
    test: {
        src: [
            "tests/**/*.js"
        ]
    }
};
