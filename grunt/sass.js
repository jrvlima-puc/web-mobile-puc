module.exports = {
    development: {
        options: {
            style: "expanded",
            noCache: true
        },
        files: {
            // "client/template/css/main.css": "client/template/sass/main.scss",
            "client/puc-apps/app/css/main.css": "client/puc-apps/app/sass/main.scss"
        }
    },
    template: {
        options: {
            style: "expanded"
        },
        files: {
            // "client/template/css/main.css": "client/template/sass/main.scss",
            "client/template/css/main.css": "client/template/sass/main.scss"
        }
    }
};
