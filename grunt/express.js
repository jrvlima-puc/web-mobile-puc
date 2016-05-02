module.exports = {
    options: {
        script: 'server/bin/www',
        delay: 1000,
        output: ".+",
    },
    dev: {
        options: {
            node_env: 'development',
        }
    }
};
