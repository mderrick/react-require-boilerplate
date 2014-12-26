module.exports = function(grunt) {
    'use strict';

    // Load all grunt tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            dist: {
                options: {
                    optimize: 'uglify2',
                    mainConfigFile: "./www/app/main.js",
                    baseUrl: "./www/app",
                    preserveLicenseComments: false,
                    stubModules: ['jsx'],
                    modules: [{
                        name: 'main',
                        exclude: ['JSXTransformer', 'text']
                    }],
                    dir: './.build'
                } 
            }
        },
        processhtml: {
            options: {
                strip: true,
                process: true
            },
            dist: {
                files: {
                  'dist/server/views/index.html': ['server/views/index.html']
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'www/bower_components/requirejs/require.js',
                        '.build/main.js'
                    ], 
                    dest: 'dist/www/', 
                    filter: 'isFile'
                }, {
                    expand: true,
                    src: [
                        'server/**/*'
                    ],
                    dest: 'dist/',
                    filter: 'isFile'
                }]
            }
        },
        shell: {
            dev: {
                command: 'node server/server.js'
            },
            dist: {
                command: 'node dist/server/server.js'
            }
        },
        clean: {
            before: ['dist'],
            after: ['.build']
        }
    });

    function command(cmd, done) {
    var myTerminal = require('child_process').exec;
        myTerminal(cmd, function(error, stdout, stderr) {
            grunt.log.write(stdout);
                if (stderr) {
                    grunt.log.error(stderr);
                }
                if (done) {
                    done();
                }
        });
    }


    grunt.registerTask('build', ['clean:before', 'requirejs', 'copy', 'processhtml', 'clean:after']);
    grunt.registerTask('server', function (target) {
        var tasks = [];
        if (target === 'prod') {
          tasks.push('build', 'shell:dist');
        } else {
          tasks.push('shell:dev');
        }
        grunt.task.run(tasks);
    });

    grunt.registerTask('heroku', function() {
        // --allow-root option
        // http://serverfault.com/questions/548537/cant-get-bower-working-bower-esudo-cannot-be-run-with-sudo
        command('./node_modules/.bin/bower install --allow-root', this.async());
        grunt.task.run(['build']);
    });
};