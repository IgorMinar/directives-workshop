var cp = require('child_process');

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'package.json', 'src/**/*.js'],
      options: {
      }
    },
    html2js: {
      options: {
        base: '',
        module: 'templates',
        rename: function (moduleName) {
          return '/' + moduleName;
        }
      },
      main: {
        src: ['src/**/*.html', '!src/**/index.html', '!src/**/solution/*.html'],
        dest: 'tmp/templates.js'
      }
    },
    karma: {
      options: {
        frameworks: ['jasmine'],
        files: [
          'lib/jquery-1.10.2.js',
          'lib/positioning.js',
          'lib/angular.js',
          'lib/angular-mocks.js',
          'lib/jasmine-matchers.js',
          'lib/moment.js',
          'src/**/*.js',
          'src/**/*.html'
        ],
        exclude: [
          'src/**/index.html'
        ],
        browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],
        ngHtml2JsPreprocessor: {
          prependPrefix: '/',
          // setting this option will create only a single module that contains templates
          // from all the files, so you can load them all with module('templates')
          moduleName: 'templates'
        }
      },
      tdd: {
        autoWatch: true
      },
      ci: {
        singleRun: true
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          keepalive: true,
          middleware: function(connect, options){
            return [
              connect.static(options.base),
              connect.directory(options.base)
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('tdd', ['karma:tdd']);
  grunt.registerTask('default', ['jshint', 'html2js', 'karma:ci']);
  grunt.registerTask('server', ['connect:server']);
};
