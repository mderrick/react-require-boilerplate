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
                  'dist/www/views/index.html': ['www/views/index.html']
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
    grunt.registerTask('build', ['clean:before', 'requirejs', 'processhtml', 'copy', 'clean:after']);
    grunt.registerTask('server', function (target) {
        var tasks = [];
        if (target === 'prod') {
          tasks.push('build', 'shell:dist');
        } else {
          tasks.push('shell:dev');
        }
        grunt.task.run(tasks);
    });
};