module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: "client",
            src: ["**/*.css", "!*.min.css"],
            dest: "server/public/css",
            ext: ".min.css"
        }]
    }
};
