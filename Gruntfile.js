var path = require("path");
var __dirname = './src/';

module.exports = function(grunt) {
	grunt.initConfig({

        watch: {
            scripts: {
                files: ['./src/app.js', 'Gruntfile.js'],
                tasks: ['expressrunner'],
                options: {
                    interrupt: true,
                    atBegin: true
                },
            },
        },

        expressrunner: {
            options: {
                script: './src/server.js',
                debug: 'app'
            }
        },

	});

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-runner');

	grunt.registerTask('dev', ['watch', 'expressrunner']);
    grunt.registerTask('default', ['dev']);
}