module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    concat: {
      js: {
        src: ['app/scripts/color.js', 'app/scripts/logger.js'],
        dest: 'app/scripts/main.js'
      }
    },

    connect: {
      livereload: {
        options: {
          hostname: '*',
          livereload: true,
          open: true,
          base: 'app',
        }
      }
    },

    less: {
      styles: {
        src: ['app/styles/main.less'],
        dest: 'app/styles/main.css'
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['app/*.html']
      },
      less: {
        options: {
          livereload: false
        },
        files: ['app/styles/*.less'],
        tasks: ['less']
      },
      css: {
        files: ['app/styles/main.css']
      },
      js: {
        files: ['app/scripts/color.js', 'app/scripts/logger.js'],
        tasks: ['concat'],
      }
    }
  });

  grunt.registerTask('default', ['concat', 'connect', 'less', 'watch']);

};
