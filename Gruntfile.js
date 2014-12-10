module.exports = function(grunt) {
    'use strict';

    // Load all grunt tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            dist: {
                options: {
                    // Our config of requirejs is inside our main.js file
                    mainConfigFile: "./www/app/main.js",
                    baseUrl: "./www/app",
                    // Just remove comments not needed
                    preserveLicenseComments: false,
                    stubModules: ['jsx'], // Put the JSX transform to sleep
                    modules: [{
                        name: 'main',
                        // Do not need JSXTransformer or text in the final build
                        exclude: ['JSXTransformer', 'text']
                    }],
                    dir: './build'
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
                  'build/index.html': ['www/index.html']
                }
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['www/bower_components/requirejs/require.js'], 
                    dest: 'build/', 
                    filter: 'isFile'
                }]
            }
        }
    });

    grunt.registerTask('build', ['requirejs', 'processhtml', 'copy']);
};