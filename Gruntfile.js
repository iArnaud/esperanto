/*global module*/
module.exports = function(grunt) {"use strict";

    grunt.initConfig({

        blanket_mocha : {
            all : ['www/test.html'],
            options : {
                threshold : 1,
                globalThreshold : 1,
                log : true,
                reporter : 'mocha-unfunk-reporter',
                moduleThreshold : 1,
                modulePattern : "./(.*?)/"
            }
        },
        jshint : {
            all : ['Gruntfile.js', 'www/src/js/**/*.js', 'www/test/**/*.js'],
            options : {
                jshintrc : '.jshintrc'
            }
        },
        compass : {
            clean : {
                options : {
                    bundleExec : true,
                    clean : true,
                    sassDir : "www/src/scss",
                    cssDir : "www/src/css",
                    imagesDir : "www/images",
                    environment : 'production'
                }
            },
            prod : {
                options : {
                    bundleExec : true,
                    sassDir : "www/src/scss",
                    cssDir : "www/src/css",
                    imagesDir : "www/images",
                    environment : 'production'
                }
            },
            dev : {
                options : {
                    bundleExec : true,
                    sassDir : "www/src/scss",
                    cssDir : "www/src/css",
                    imagesDir : "www/images"
                }
            },
            watch : {
                options : {
                    bundleExec : true,
                    watch : true,
                    sassDir : "www/src/scss",
                    cssDir : "www/src/css",
                    imagesDir : "www/images"
                }
            }
        },
        bower : {
            install : {
                options : {
                    targetDir: 'www/libs',
                    layout: 'byType',
                    install : true,
                    verbose : false,
                    cleanTargetDir : true,
                    cleanBowerDir : true,
                    bowerOptions: {}
                }
            }
        }
    });

    require('mocha-unfunk-reporter').option({
        "reportPending" : true
    });

    // Loading dependencies
    for (var key in grunt.file.readJSON("package.json").devDependencies) {
        if (key !== "grunt" && key.indexOf("grunt") === 0) {
            grunt.loadNpmTasks(key);
        }
    }

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('coverage', ['blanket_mocha']);
    grunt.registerTask('default', ['jshint', 'blanket_mocha']);
    grunt.registerTask('sass', ['compass:clean', 'compass:watch']);
    grunt.registerTask('sass:dev', ['compass:clean', 'compass:dev']);
    grunt.registerTask('sass:prod', ['compass:clean', 'compass:prod']);
}; 