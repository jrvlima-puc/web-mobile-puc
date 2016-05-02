module.exports = {
    main: {
        configFile: "karma.conf.js",
        options: {
            files: [{
                pattern: "client/puc-apps/**/*.js"
            }, {
                pattern: "tests/puc-specs/**/*.js"
            }]
        }
    }
};
