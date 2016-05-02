module.exports = {
    dev: {
        script: 'server/bin/www',
        options: {
            args: ['dev'],
            nodeArgs: ['--debug'],
            callback: function(nodemon) {
                nodemon.on('log', function(event) {
                    console.log(event.colour);
                });
            },
            env: {
                PORT: '8181'
            },
            ignore: ['node_modules/**'],
            ext: 'js,coffee',
            watch: ['server'],
            delay: 1000,
            legacyWatch: true
        }
    },
    exec: {
        options: {
            exec: 'less'
        }
    }
};
