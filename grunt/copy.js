module.exports = {
    all: {
        files: [
            // includes files within path and its sub-directories
            {
                expand: true,
                cwd: 'client',
                src: ['**/*.*'],
                dest: 'server/public/'
            }

        ]
    }
};
