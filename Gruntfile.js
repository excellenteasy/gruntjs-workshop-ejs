module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
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

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['app/*.html']
      }
    }
  });

  grunt.registerTask('default', ['connect', 'watch']);

};
